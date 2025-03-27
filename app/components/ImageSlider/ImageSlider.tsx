"use client";

import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageSliderBase from "./ImageSliderBase";
import axios from "axios";

const ImageSlider: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const [slides, setSlides] = useState<{ url: string; title: string }[]>([]);
  const BASE_URL = "http://localhost:8000"; // Ensure this matches your backend

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/posters/67e3dc19cfdf5e5d8a2b65e7"
        );

        if (data.success && data.poster.imageUrl.length > 0) {
          const images = data.poster.imageUrl.map(
            (imgPath: string, index: number) => ({
              url: `${BASE_URL}${imgPath}`, // Prepend base URL to image paths
              title: `Image ${index + 1}`,
            })
          );
          setSlides(images);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const containerStyles: React.CSSProperties = {
    width: isMobile ? "85vw" : "60vw",
    height: isMobile ? "35vw" : "23vw",
    backgroundSize: "contain",
    margin: "0 auto",
  };

  return (
    <div style={containerStyles}>
      {slides.length > 0 ? (
        <ImageSliderBase slides={slides} />
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default ImageSlider;
