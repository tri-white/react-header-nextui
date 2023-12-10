import React, { useState, useRef } from "react";
import "../App.css";
export default function CardSlider() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Initialize with page 1
  const videoRef = useRef(null);

  const startVideo = () => {
    setVideoPlaying(true);
    videoRef.setVideoPlaying(true);
  };

  const handleEllipseClick = () => {
    startVideo();
  };

  const handleVectorClick = (direction) => {
    if (direction === "left" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "right") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {isVideoPlaying && (
        <video ref={videoRef} controls className="Rectangle3">
          <source src={require("../videos/ai-fun.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <>
        <img className="Rectangle2" src={require("../img/rectangle-2.png")} />
        {!isVideoPlaying && (
          <img className="Rectangle3" src={require("../img/rectangle-3.png")} />
        )}
        <img className="Rectangle4" src={require("../img/rectangle-4.png")} />
        <img className="Rectangle5" src={require("../img/rectangle-5.png")} />
        {!isVideoPlaying && (
          <div className="Ellipse16" onClick={handleEllipseClick}>
            <img className="playButton" src={require("../img/polygon.png")} />
          </div>
        )}
      </>
      <div className="Ellipse5" onClick={() => handleVectorClick("left")}/>
      <img
        className="VectorLeft"
        src={require("../img/vectorLeft.png")}
        onClick={() => handleVectorClick("left")}
      />
          <div className="Ellipse8"  onClick={() => handleVectorClick("right")}/>
      <img
        className="VectorRight"
        src={require("../img/vectorRight.png")}
        onClick={() => handleVectorClick("right")}
      />
      <div className="PageNow">{String(currentPage).padStart(2, '0')}</div>
    </div>
  );
}
