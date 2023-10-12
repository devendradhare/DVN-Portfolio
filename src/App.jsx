import "./App.css";

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scale, setScale] = useState(1);
  const [panning, setPanning] = useState(false);
  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [start, setStart] = useState({ x: 0, y: 0 });
  // keybord keys
  const [arrowKeyPressed, setArrowKeyPressed] = useState(null);

  useEffect(() => {
    let maxX = 1000;
    let minX = -100;
    let maxY = 300;
    let minY = -100;

    setPointX(pointX > maxX ? maxX : pointX < minX ? minX : pointX);
    setPointY(pointY > maxY ? maxY : pointY < minY ? minY : pointY);
    setTransform();
  }, [pointX, pointY]);

  useEffect(() => {
    console.log("asdf");
    function handleKeyDown(event) {
      let speed = 10;
      switch (event.key) {
        case "ArrowUp":
          setArrowKeyPressed("Arrow Up key pressed");
          setPointY((prev) => prev - speed);
          break;
        case "ArrowDown":
          setArrowKeyPressed("Arrow Down key pressed");
          setPointY((prev) => prev + speed);
          break;
        case "ArrowLeft":
          setArrowKeyPressed("Arrow Left key pressed");
          setPointX((prev) => prev - speed);
          break;
        case "ArrowRight":
          setArrowKeyPressed("Arrow Right key pressed");
          setPointX((prev) => prev + speed);
          break;
        default:
          break;
      }
    }

    function handleKeyUp(event) {
      setArrowKeyPressed(null);
    }

    // Add event listeners for keydown and keyup when the component mounts
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Remove the event listeners when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const setTransform = () => {
    const zoomElement = document.getElementById("zoom");
    if (zoomElement) {
      zoomElement.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }
    // const zoomElement2 = document.getElementById("zoom2");
    // zoomElement2.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    const bgPosition = document.getElementById("zoom_outerid");
    bgPosition.style.backgroundPosition = `${pointX * 0.15}px ${
      pointY * 0.15
    }px`;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setStart({ x: e.clientX - pointX, y: e.clientY - pointY });
    setPanning(true);
  };

  const handleMouseUp = () => {
    setPanning(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    // console.log(e.clientX - start.x, e.clientY - start.y);
    if (!panning) {
      return;
    }

    setPointX(e.clientX - start.x);
    setPointY(e.clientY - start.y);
    setTransform();
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    const newScale = delta > 0 ? scale * 1.05 : scale / 1.05;
    if (newScale < 0.5 || newScale > 1.5) return;

    const xs = (e.clientX - pointX) / scale;
    const ys = (e.clientY - pointY) / scale;
    setScale(newScale < 0.5 ? 0.5 : newScale > 1.5 ? 1.5 : newScale);
    setPointX(e.clientX - xs * newScale);
    setPointY(e.clientY - ys * newScale);

    setTransform();
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setStart({
      x: e.touches[0].clientX - pointX,
      y: e.touches[0].clientY - pointY,
    });
    setPanning(true);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!panning) {
      return;
    }

    setPointX(e.touches[0].clientX - start.x);
    setPointY(e.touches[0].clientY - start.y);
    setTransform();
  };

  const handleTouchEnd = () => {
    setPanning(false);
  };

  return (
    <div
      className="zoom_outer"
      id="zoom_outerid"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      onTouchEnd={handleTouchEnd}
    >
      <h2>
        pointX : {pointX} pointY : {pointY} key : {arrowKeyPressed}
      </h2>
      <div id="zoom">
        
      </div>
      {/* <div id="zoom2"
      >2</div> */}
    </div>
  );
}

export default App;
