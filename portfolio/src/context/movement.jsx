import { createContext, useState, useEffect, useContext } from "react";
import styles from "../components/Structure.module.css";

export const movementContext = createContext(null);

export const useMovement = () => {
  // const { values, setValues } = useContext(movementContext);
  return useContext(movementContext);
};

export const MovementProvider = (props) => {
  const [scale, setScale] = useState(1);
  const [panning, setPanning] = useState(false);
  const [pointX, setPointX] = useState(1000);
  const [pointY, setPointY] = useState(310);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  // keybord keys
  const [arrowKeyPressed, setArrowKeyPressed] = useState(null);

  const [notInsideAnyElement, setNotInsideAnyElement] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    if (innerWidth <= 770) {
      setScale(1);
      setPointX(0);
      setPointY(0);
    }

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // boundation
    // let maxX = 1000;
    // let minX = -100;
    // let maxY = 300;
    // let minY = -100;
    // setPointX(pointX > maxX ? maxX : pointX < minX ? minX : pointX);
    // setPointY(pointY > maxY ? maxY : pointY < minY ? minY : pointY);

    setTransform();
  }, [pointX, pointY, scale]);

  useEffect(() => {
    const zoom_outer = document.getElementById(styles.zoom_outerid);
    if (panning) {
      zoom_outer.style.cursor = "grabbing";
    } else {
      zoom_outer.style.cursor = "grab";
    }
  }, [panning]);

  // listning keybord keys
  useEffect(() => {
    function handleKeyDown(event) {
      let speed = 20;
      switch (event.key) {
        case "ArrowUp":
          setArrowKeyPressed("Arrow Up key pressed");
          setPointY((prev) => prev + speed);
          break;
        case "ArrowDown":
          setArrowKeyPressed("Arrow Down key pressed");
          setPointY((prev) => prev - speed);
          break;
        case "ArrowLeft":
          setArrowKeyPressed("Arrow Left key pressed");
          setPointX((prev) => prev + speed);
          break;
        case "ArrowRight":
          setArrowKeyPressed("Arrow Right key pressed");
          setPointX((prev) => prev - speed);
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
    const zoomElement = document.getElementById(styles.zoom);
    // if (zoomElement) {
    if (innerWidth <= 770) {
      zoomElement.style.transform = `none`;
      zoomElement.style.overflow = `scroll`;
      zoomElement.style.height = `100%`;
      return;
    }
    zoomElement.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    zoomElement.style.overflow = `visible`;
    zoomElement.style.height = `none`;
    {
      // moving bg position on mouse move
      // }
      // const bgPosition = document.getElementById("zoom_outerid");
      // let bg_pos = -100;
      // bgPosition.style.backgroundPosition = `${pointX * 0.15 + bg_pos}px ${
      //   pointY * 0.15 + bg_pos
      // }px`;
      // bgPosition.style.backgroundSize = `${(scale)*2000}px`
    }
  };

  const handleMouseDown = (e) => {
    if (!notInsideAnyElement) return;
    e.preventDefault();
    setStart({ x: e.clientX - pointX, y: e.clientY - pointY });
    setPanning(true);
    console.log(-window.screenX, window.screenY, window);
  };

  const handleMouseUp = () => {
    setPanning(false);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    // console.log(e.clientX - start.x, e.clientY - start.y);
    if (!panning || innerWidth <= 770) {
      return;
    }

    setPointX(e.clientX - start.x);
    setPointY(e.clientY - start.y);
    // setTransform();
  };

  const handleWheel = (e) => {
    if (innerWidth <= 770) {
      setScale(1);
      // setPointX(0);
      // setPointY(0);
      return;
    }
    // e.preventDefault();
    const delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    const newScale = delta > 0 ? scale * 1.05 : scale / 1.05;
    if (newScale < 0.1 || newScale > 8) return;

    const xs = (e.clientX - pointX) / scale;
    const ys = (e.clientY - pointY) / scale;
    // setScale(newScale < 0.5 ? 0.5 : newScale > 1.5 ? 1.5 : newScale);
    setScale(newScale);
    setPointX(e.clientX - xs * newScale);
    setPointY(e.clientY - ys * newScale);

    // setTransform();
  };

  const handleTouchStart = (e) => {
    // e.preventDefault();
    setStart({
      x: e.touches[0].clientX - pointX,
      y: e.touches[0].clientY - pointY,
    });
    setPanning(true);
  };

  const handleTouchMove = (e) => {
    // e.preventDefault();
    if (!panning || innerWidth <= 770) {
      return;
    }

    setPointX(e.touches[0].clientX - start.x);
    setPointY(e.touches[0].clientY - start.y);
    // setTransform();
  };

  const handleTouchEnd = () => {
    setPanning(false);
  };

  return (
    <>
      <movementContext.Provider
        value={{
          scale,
          setScale,
          panning,
          setPanning,
          pointX,
          setPointX,
          pointY,
          setPointY,
          start,
          setStart,
          arrowKeyPressed,
          setArrowKeyPressed,
          setTransform,
          handleMouseDown,
          handleMouseUp,
          handleMouseMove,
          handleWheel,
          handleTouchStart,
          handleTouchMove,
          handleTouchEnd,
          notInsideAnyElement,
          setNotInsideAnyElement,
          innerWidth,
        }}
      >
        {props.children}
      </movementContext.Provider>
    </>
  );
};
