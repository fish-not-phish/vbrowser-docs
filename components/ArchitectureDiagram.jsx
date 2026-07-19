'use client'

import { useMemo } from 'react'
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
} from '@xyflow/react'
import dagre from '@dagrejs/dagre'
import '@xyflow/react/dist/style.css'

const C = {
  user:     { border: '#CF7287', label: '#CF7287' },
  proxy:    { border: '#CFAF72', label: '#CFAF72' },
  frontend: { border: '#72CF87', label: '#72CF87' },
  backend:  { border: '#CF7287', label: '#CF7287' },
  celery:   { border: '#CF7287', label: '#CF7287' },
  data:     { border: '#CFAF72', label: '#CFAF72' },
  aws:      { border: '#7287CF', label: '#7287CF' },
  cf:       { border: '#CFAF72', label: '#CFAF72' },
  container:{ border: '#72CF87', label: '#72CF87' },
}

function ArchNode({ data }) {
  const c = C[data.type] || C.data
  return (
    <div style={{
      background: '#12121e',
      border: `1px solid ${c.border}`,
      borderRadius: 8,
      padding: '8px 14px',
      minWidth: 148,
      textAlign: 'center',
      boxShadow: `0 0 10px ${c.border}1a`,
    }}>
      <Handle type="target" position={Position.Top}    style={{ background: c.border, border: 'none', width: 6, height: 6 }} />
      <Handle type="target" position={Position.Left}   style={{ background: c.border, border: 'none', width: 6, height: 6 }} id="left"  />
      <Handle type="target" position={Position.Right}  style={{ background: c.border, border: 'none', width: 6, height: 6 }} id="right" />
      <div style={{ color: c.label, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
        {data.label}
      </div>
      {data.sub && (
        <div style={{ color: '#5a4a55', fontSize: '0.65rem', marginTop: 3, lineHeight: 1.4 }}>
          {data.sub}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} style={{ background: c.border, border: 'none', width: 6, height: 6 }} />
      <Handle type="source" position={Position.Left}   style={{ background: c.border, border: 'none', width: 6, height: 6 }} id="src-left"  />
      <Handle type="source" position={Position.Right}  style={{ background: c.border, border: 'none', width: 6, height: 6 }} id="src-right" />
    </div>
  )
}

const nodeTypes = { arch: ArchNode }

// Node dimensions — dagre needs these to space nodes correctly
const NODE_W = 172
const NODE_H = 58

function applyDagreLayout(nodes, edges) {
  const g = new dagre.graphlib.Graph()
  g.setDefaultEdgeLabel(() => ({}))
  g.setGraph({ rankdir: 'TB', nodesep: 60, ranksep: 70, marginx: 20, marginy: 20 })

  nodes.forEach(n => g.setNode(n.id, { width: NODE_W, height: NODE_H }))
  edges.forEach(e => g.setEdge(e.source, e.target))

  dagre.layout(g)

  return nodes.map(n => {
    const { x, y } = g.node(n.id)
    return { ...n, position: { x: x - NODE_W / 2, y: y - NODE_H / 2 } }
  })
}

const rawNodes = [
  { id: 'user',     type: 'arch', position: { x: 0, y: 0 }, data: { type: 'user',      label: 'User Browser',        sub: 'HTTPS / WebSocket'              } },
  { id: 'cf',       type: 'arch', position: { x: 0, y: 0 }, data: { type: 'cf',        label: 'Cloudflare Proxy',    sub: 'All traffic proxied'            } },
  { id: 'proxy',    type: 'arch', position: { x: 0, y: 0 }, data: { type: 'proxy',     label: 'Reverse Proxy',       sub: 'Traefik · Caddy · Nginx'        } },
  { id: 'frontend', type: 'arch', position: { x: 0, y: 0 }, data: { type: 'frontend',  label: 'Next.js Frontend',    sub: 'React · Tailwind · Bun'         } },
  { id: 'backend',  type: 'arch', position: { x: 0, y: 0 }, data: { type: 'backend',   label: 'Django Backend',      sub: 'REST API · Channels (WS)'       } },
  { id: 'postgres', type: 'arch', position: { x: 0, y: 0 }, data: { type: 'data',      label: 'PostgreSQL',          sub: 'Application data'               } },
  { id: 'redis',    type: 'arch', position: { x: 0, y: 0 }, data: { type: 'data',      label: 'Redis',               sub: 'Celery broker · WS channels'    } },
  { id: 'worker',   type: 'arch', position: { x: 0, y: 0 }, data: { type: 'celery',    label: 'Celery Worker',       sub: 'Starts · stops containers'      } },
  { id: 'beat',     type: 'arch', position: { x: 0, y: 0 }, data: { type: 'celery',    label: 'Celery Beat',         sub: '60s idle checker'               } },
  { id: 'ecr',      type: 'arch', position: { x: 0, y: 0 }, data: { type: 'aws',       label: 'AWS ECR',             sub: 'Browser image registry'         } },
  { id: 'ecs',      type: 'arch', position: { x: 0, y: 0 }, data: { type: 'container', label: 'AWS ECS Fargate',     sub: 'KasmVNC · browser/OS · per-session' } },
  { id: 'cfdns',    type: 'arch', position: { x: 0, y: 0 }, data: { type: 'cf',        label: 'Cloudflare DNS',      sub: 'Per-session A record'           } },
]

const e = (id, source, target, color, opts = {}) => ({
  id, source, target,
  style: { stroke: color, strokeWidth: 1.5 },
  ...opts,
})

const rawEdges = [
  e('user-cf',       'user',     'cf',       '#CF7287', { animated: true }),
  e('cf-proxy',      'cf',       'proxy',    '#CFAF72'),
  e('proxy-fe',      'proxy',    'frontend', '#CFAF72'),
  e('proxy-be',      'proxy',    'backend',  '#CFAF72'),
  e('be-postgres',   'backend',  'postgres', '#CF7287'),
  e('be-redis',      'backend',  'redis',    '#CF7287'),
  e('be-worker',     'backend',  'worker',   '#CF7287', { animated: true, label: 'dispatch task', labelStyle: { fill: '#7a5060', fontSize: 10 }, labelBgStyle: { fill: 'transparent' } }),
  e('redis-worker',  'redis',    'worker',   '#CFAF72'),
  e('redis-beat',    'redis',    'beat',     '#CFAF72'),
  e('worker-ecr',    'worker',   'ecr',      '#CF7287'),
  e('ecr-ecs',       'ecr',      'ecs',      '#7287CF', { animated: true }),
  e('ecs-cfdns',     'ecs',      'cfdns',    '#72CF87', { label: 'upsert A record', labelStyle: { fill: '#7a5060', fontSize: 10 }, labelBgStyle: { fill: 'transparent' } }),
]

export default function ArchitectureDiagram() {
  const layoutedNodes = useMemo(() => applyDagreLayout(rawNodes, rawEdges), [])
  const [nodes, , onNodesChange] = useNodesState(layoutedNodes)
  const [edges, , onEdgesChange] = useEdgesState(rawEdges)

  return (
    <div style={{
      width: '100%',
      height: 760,
      borderRadius: 12,
      overflow: 'hidden',
      border: '1px solid rgba(207,114,135,0.15)',
      margin: '1.5rem 0',
    }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={true}
        panOnScroll={false}
        panOnDrag={true}
        minZoom={0.4}
        maxZoom={2}
      >
        <Background color="#1a0f14" gap={24} size={1} />
      </ReactFlow>
    </div>
  )
}
