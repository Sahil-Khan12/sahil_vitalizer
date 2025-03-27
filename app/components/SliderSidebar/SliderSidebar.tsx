"use client"; // Ensure compatibility with Next.js App Router
import React from "react";
import "./slider_sidebar.css";
import { JSX } from "@emotion/react/jsx-runtime";
import ImageSlider from "../ImageSlider/ImageSlider";

export default function SliderSidebar({
  categoryNames = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ],
}: {
  categoryNames?: string[];
}): JSX.Element {
  return (
    <div className="section">
      <div className="sidebar_parent">
        {categoryNames.length > 0 ? (
          categoryNames.map((name, index) => (
            <div key={index} className="sidebar_tags">
              <div>📌 {name}</div>
            </div>
          ))
        ) : (
          <div className="sidebar_tags">No Categories Available</div>
        )}
      </div>

      <div className="slider">
        <ImageSlider />
      </div>
    </div>
  );
}
