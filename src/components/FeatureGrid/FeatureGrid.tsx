import React from "react";
import styles from "./FeatureGrid.module.css";

type FeatureBlockProps = {
  title: string;
  items: string[];
};

function FeatureBlock({ title, items }: FeatureBlockProps) {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockTitle}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <FeatureBlock
          title="Ephemeral, isolated browser sessions"
          items={[
            "Every session runs in a dedicated, short-lived container",
            "No shared state, cookies, cache, or local storage between sessions",
            "Automatic teardown on session termination or timeout",
            "Designed to treat browsers as untrusted workloads",
          ]}
        />

        <FeatureBlock
          title="Security-first execution model"
          items={[
            "Strict isolation between host, control plane, and browser workloads",
            "Reduced blast radius for zero-days and drive-by exploits",
            "Explicit browser allow-listing during setup",
          ]}
        />

        <FeatureBlock
          title="Built for CTI, OSINT, and investigations"
          items={[
            "Safe analysis of phishing sites and malicious landing pages",
            "Support for Tor, Mullvad, hardened, and niche browser profiles",
            "Ideal for investigating infrastructure without host exposure",
            "Disposable environments prevent investigator attribution leakage",
          ]}
        />

        <FeatureBlock
          title="Simple control plane, opinionated by design"
          items={[
            "Minimal authenticated API for session lifecycle management",
            "No proxying, traffic interception, or data exfiltration features",
            "Deliberately limited surface area to reduce operational risk",
            "Designed to be integrated into existing tooling and workflows",
          ]}
        />
      </div>
    </section>
  );
}
