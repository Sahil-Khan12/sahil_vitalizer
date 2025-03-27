"use client"; // Required for Next.js App Router

import React from "react";
import styles from "./speaker_image.module.css"; // Import CSS Module

export default function SpeakerImage() {
  return (
    <div className={styles.speaker_parent}>
      <div className={styles.speaker_image}></div>
    </div>
  );
}
