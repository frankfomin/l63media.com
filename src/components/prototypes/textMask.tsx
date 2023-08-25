"use client"
import React, { useRef, useEffect, useState } from "react";

function VideoHoverEffect() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Get the position of the mouse cursor relative to the video container
    const videoContainer = videoRef.current!.getBoundingClientRect();
    const x = e.clientX - videoContainer.left;
    const y = e.clientY - videoContainer.top;

    // Update the position of the masking circle
    setCirclePosition({ x, y });
  };

  useEffect(() => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");

    const updateCanvas = () => {
      // Clear the canvas
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the video on the canvas with a masking effect
      ctx!.globalCompositeOperation = "source-over";
      ctx!.drawImage(video, 0, 0, video.width, video.height);

      ctx!.globalCompositeOperation = "destination-in";
      ctx!.beginPath();
      ctx!.arc(circlePosition.x, circlePosition.y, 25, 0, 2 * Math.PI);
      ctx!.fill();

      requestAnimationFrame(updateCanvas);
    };

    updateCanvas();
  }, [circlePosition]);

  return (
    <div className=" relative filter color-clip." onMouseMove={handleMouseMove}>
      <video  className=" filter grayscale" src="Untitled.mp4" ref={videoRef} width="1000" height={1000} autoPlay muted/>
      
      <canvas
        ref={canvasRef}
        width="1000"
        height="1000" // Set the canvas size to match the video size
        className=" absolute inset-0"
      ></canvas>
    </div>
  );
}

export default VideoHoverEffect;


