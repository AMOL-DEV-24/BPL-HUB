"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Background layers */}
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      {/* Brand watermark */}
      <div className={styles.brandMark}>BPL</div>

      {/* HERO CONTENT */}
      <div className={styles.hero}>
        <h1 className={styles.title}>
          BPL HUB <span>ADMIN</span>
        </h1>

        <p className={styles.subtitle}>
          Modern cricket management system for Players, Matches, Teams & Live Scores.
        </p>

        <div className={styles.actions}>
          <button onClick={() => router.push("/login")}>
            Get Started
          </button>

          <button className={styles.secondary}>
            Explore Features
          </button>
        </div>

        {/* Feature chips */}
        <div className={styles.badges}>
          <span>⚡ Fast</span>
          <span>📊 Live Data</span>
          <span>🔐 Secure</span>
          <span>🏏 Cricket System</span>
        </div>
      </div>
    </div>
  );
}