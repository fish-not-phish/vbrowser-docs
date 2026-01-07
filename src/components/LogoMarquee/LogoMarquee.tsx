import React from "react";
import styles from "./LogoMarquee.module.css";

const logos = [
  { name: "Brave", src: "/img/icons/brave.png" },
  { name: "Chrome", src: "/img/icons/chrome.png" },
  { name: "Chromium", src: "/img/icons/chromium.png" },
  { name: "Discord", src: "/img/icons/discord.png" },
  { name: "Falkon", src: "/img/icons/falkon.png" },
  { name: "Firefox", src: "/img/icons/firefox.png" },
  { name: "Kali", src: "/img/icons/kali.png" },
  { name: "LibreWolf", src: "/img/icons/librewolf.png" },
  { name: "Microsoft Edge", src: "/img/icons/edge.png" },
  { name: "Mullvad Browser", src: "/img/icons/mullvad.png" },
  { name: "Pale Moon", src: "/img/icons/palemoon.png" },
  { name: "Pulse", src: "/img/icons/pulse.png" },
  { name: "SeaMonkey", src: "/img/icons/seamonkey.png" },
  { name: "Signal", src: "/img/icons/signal.png" },
  { name: "Slack", src: "/img/icons/slack.png" },
  { name: "Telegram", src: "/img/icons/telegram.png" },
  { name: "Tor Browser", src: "/img/icons/tor.png" },
  { name: "Ungoogled Chromium", src: "/img/icons/ungoogled.png" },
  { name: "Waterfox", src: "/img/icons/waterfox.png" },
  { name: "Zen", src: "/img/icons/zen.png" },
  { name: "Zoom", src: "/img/icons/zoom.png" },
];

export default function LogoMarquee() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...logos, ...logos].map((logo, idx) => (
            <div className={styles.logo} key={idx}>
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
