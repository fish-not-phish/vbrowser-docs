import React from "react";
import Heading from "@theme/Heading";
import styles from "./CapabilityBlocks.module.css";

const blocks = [
  {
    step: "01",
    title: "Screenshots",
    description:
      "Capture full-resolution screenshots of live browser sessions for reporting, evidence collection, and archival.",
    image: "/img/capabilities/application.png",
    align: "left",
  },
  {
    step: "02",
    title: "File uploads & downloads",
    description:
      "Safely upload files into an isolated browser session and retrieve downloads as password-protected archives.",
    image: "/img/capabilities/attachment.png",
    align: "right",
  },
  {
    step: "03",
    title: "Audio input",
    description:
      "Inject microphone input into browser sessions when interacting with sites that require voice access.",
    image: "/img/capabilities/microphone.png",
    align: "left",
  },
  {
    step: "04",
    title: "Audio output",
    description:
      "Stream tab and system audio from browser sessions in real time.",
    image: "/img/capabilities/loudspeaker.png",
    align: "right",
  },
];

export default function CapabilityBlocks() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        {blocks.map((b) => (
          <div
            key={b.step}
            className={`${styles.block} ${
              b.align === "right" ? styles.reverse : ""
            }`}
          >
            <div className={styles.visual}>
            <div className={styles.visualInner} />
            <img
                src={b.image}
                alt=""
                className={styles.visualImage}
                loading="lazy"
            />
            </div>

            <div className={styles.text}>
              <span className={styles.step}>{b.step}</span>
              <Heading as="h3" className={styles.title}>
                {b.title}
              </Heading>
              <p className={styles.description}>{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
