import React, { useState } from "react";

interface Slide {
  url: string;
  title: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

const ImageSliderBase: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const arrowStyles: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "30px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
  };

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <div onClick={goToPrevious} style={{ ...arrowStyles, left: "20px" }}>
        ❰
      </div>
      <div onClick={goToNext} style={{ ...arrowStyles, right: "20px" }}>
        ❱
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSliderBase;
