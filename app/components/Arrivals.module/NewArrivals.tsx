"use client"; // Required for Next.js App Router

import React from "react";
import styles from "./new_arrivals.module.css"; // Import CSS Module

export default function NewArrivals() {
  return (
    <div className={styles.new_parent}>
      <div className={styles.new_bullet}>
        <div className={styles.new_bullet_marker}></div>
        <div className={styles.new_bullet_name}>Featured</div>
      </div>
      <div className={styles.new_heading}>
        <div className={styles.new_title}>New Arrivals</div>
      </div>

      <div className={styles.display_parent}>
        <div className={styles.featured_1}></div>
        <div className={styles.featured_2_3_4}>
          <div className={styles.featured_2}></div>
          <div className={styles.featured_3_4}>
            <div className={styles.featured_3}></div>
            <div className={styles.featured_4}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
