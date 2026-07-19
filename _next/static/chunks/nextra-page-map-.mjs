import meta from "../../../pages/_meta.js";
import browsers_meta from "../../../pages/browsers/_meta.js";
import getting_started_meta from "../../../pages/getting-started/_meta.js";
import installation_meta from "../../../pages/installation/_meta.js";
import legal_meta from "../../../pages/legal/_meta.js";
import security_meta from "../../../pages/security/_meta.js";
import usage_meta from "../../../pages/usage/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "browsers",
  route: "/browsers",
  children: [{
    data: browsers_meta
  }, {
    name: "docker-images",
    route: "/browsers/docker-images",
    frontMatter: {
      "sidebarTitle": "Docker Images"
    }
  }, {
    name: "index",
    route: "/browsers",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }]
}, {
  name: "getting-started",
  route: "/getting-started",
  children: [{
    data: getting_started_meta
  }, {
    name: "index",
    route: "/getting-started",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "prerequisites",
    route: "/getting-started/prerequisites",
    frontMatter: {
      "sidebarTitle": "Prerequisites"
    }
  }, {
    name: "quickstart",
    route: "/getting-started/quickstart",
    frontMatter: {
      "sidebarTitle": "Quickstart"
    }
  }]
}, {
  name: "installation",
  route: "/installation",
  children: [{
    data: installation_meta
  }, {
    name: "redeployment",
    route: "/installation/redeployment",
    frontMatter: {
      "sidebarTitle": "Redeployment"
    }
  }, {
    name: "reverse-proxy",
    route: "/installation/reverse-proxy",
    frontMatter: {
      "sidebarTitle": "Reverse Proxy"
    }
  }, {
    name: "setup-script",
    route: "/installation/setup-script",
    frontMatter: {
      "sidebarTitle": "Setup Script"
    }
  }]
}, {
  name: "introduction",
  route: "/introduction",
  frontMatter: {
    "sidebarTitle": "Introduction"
  }
}, {
  name: "legal",
  route: "/legal",
  children: [{
    data: legal_meta
  }, {
    name: "liability",
    route: "/legal/liability",
    frontMatter: {
      "sidebarTitle": "Liability"
    }
  }, {
    name: "license",
    route: "/legal/license",
    frontMatter: {
      "sidebarTitle": "License"
    }
  }]
}, {
  name: "security",
  route: "/security",
  children: [{
    data: security_meta
  }, {
    name: "index",
    route: "/security",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "mfa",
    route: "/security/mfa",
    frontMatter: {
      "sidebarTitle": "Mfa"
    }
  }, {
    name: "oidc-sso",
    route: "/security/oidc-sso",
    frontMatter: {
      "sidebarTitle": "Oidc Sso"
    }
  }]
}, {
  name: "usage",
  route: "/usage",
  children: [{
    data: usage_meta
  }, {
    name: "cases",
    route: "/usage/cases",
    frontMatter: {
      "sidebarTitle": "Cases"
    }
  }, {
    name: "file-protection",
    route: "/usage/file-protection",
    frontMatter: {
      "sidebarTitle": "File Protection"
    }
  }, {
    name: "launching-a-session",
    route: "/usage/launching-a-session",
    frontMatter: {
      "sidebarTitle": "Launching a Session"
    }
  }, {
    name: "network-logging",
    route: "/usage/network-logging",
    frontMatter: {
      "sidebarTitle": "Network Logging"
    }
  }, {
    name: "screenshots",
    route: "/usage/screenshots",
    frontMatter: {
      "sidebarTitle": "Screenshots"
    }
  }, {
    name: "session-history",
    route: "/usage/session-history",
    frontMatter: {
      "sidebarTitle": "Session History"
    }
  }, {
    name: "workspaces",
    route: "/usage/workspaces",
    frontMatter: {
      "sidebarTitle": "Workspaces"
    }
  }]
}];