import React from "react";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./Hero.module.css";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <Heading as="h1" className={styles.title}>
            Investigate <span className={styles.highlight}>more</span> /
          </Heading>

          <div className={styles.splitRow}>
            <Heading as="h1" className={styles.title}>
              with <span className={styles.highlight}>less</span>
            </Heading>

            <p className={styles.subtitle}>
              Investigations that launch<br />
              in minutes
            </p>
          </div>

          <div className={styles.actions}>
            <Link
              className={styles.primaryButton}
              to="/docs/category/getting-started"
            >
              TRY NOW <ArrowUpRight className={styles.icon} />
            </Link>
            <Link
              className={styles.primaryButton}
              to="https://github.com/fish-not-phish/open-vbrowser"
            >
              <span className={styles.buttonContent}>
                GITHUB <ArrowUpRight className={styles.icon} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
