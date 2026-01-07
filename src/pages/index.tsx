import type { ReactNode } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Hero from "../components/Hero/Hero";
import LogoMarquee from "../components/LogoMarquee/LogoMarquee";
import FeatureGrid from "../components/FeatureGrid/FeatureGrid";
import CapabilityBlocks from "../components/CapabilityBlocks/CapabilityBlocks";


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Disposable, isolated browser sessions for security research and controlled web access."
    >
      <Hero />
      <main>
        <FeatureGrid />
        <LogoMarquee />
        <CapabilityBlocks />
      </main>
    </Layout>
  );
}
