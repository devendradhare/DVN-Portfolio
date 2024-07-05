import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
// svg
import kbd from "../../svg/keyboard.svg";
import mouseMove from "../../svg/mouseMove.svg";
import mouseScroll from "../../svg/mouseScroll.svg";
// css
import Styles from "./NavHelp.module.css";

const BounceAnimation = ({ children, ...props }) => {
  // const [isExpanded, setIsExpanded] = useState(true);
  // console.log("props: ", props);
  const [bounce, bounceApi] = useSpring(() => ({
    config: { mass: 1, tension: 150, friction: 10 },
  }));

  const handleMouseDown = () => {
    bounceApi.start({ transform: "scale(0.99)" });
  };

  const handleMouseUp = () => {
    bounceApi.start({
      transform: "scale(1.05)",
    });
  };

  const handleMouseOver = () => {
    bounceApi.start({ transform: "scale(1.05)" });
  };

  const handleMouseLeave = () => {
    bounceApi.start({ transform: "scale(1)" });
  };

  const animatedComp = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      className: Styles.HowToNavigate,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      onMouseOver: handleMouseOver,
      style: { ...bounce },
      ...props,
    });
  });

  return <>{animatedComp}</>;
};

const NavHelp = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const createExpendSpring = (mass, tension, friction) => {
    return useSpring(() => ({
      transform: "scale(0)",
      from: { x: "0px", y: "0px" },
      config: { mass, tension, friction },
    }));
  };

  const [expend, expendApi] = createExpendSpring(1, 130, 10);
  const [expend2, expend2Api] = createExpendSpring(2, 150, 20);
  const [expend3, expend3Api] = createExpendSpring(3, 170, 30);
  const childs = [
    {
      expend: expend,
      img: kbd,
      discription:
        "Press the keyboard's arrow keys in the direction you want to move",
    },
    {
      expend: expend2,
      img: mouseScroll,
      discription:
        "To zoom in or out on a webpage, simply scroll up to zoom in and scroll down to zoom out",
    },
    {
      expend: expend3,
      img: mouseMove,
      discription:
        "To move around, just press and hold the right mouse button, then move your mouse in the direction you want to go.... Easy, right?",
    },
  ];

  const handleMouseUp = () => {
    expendApi.start({
      x: isExpanded ? "-110px" : "0px",
      y: isExpanded ? "-180px" : "0px",
      transform: isExpanded ? "scale(0.7)" : "scale(0)",
    });
    expend2Api.start({
      x: isExpanded ? "-210px" : "0px",
      y: isExpanded ? "0px" : "0px",
      transform: isExpanded ? "scale(0.7)" : "scale(0)",
    });
    expend3Api.start({
      x: isExpanded ? "-110px" : "0px",
      y: isExpanded ? "180px" : "0px",
      transform: isExpanded ? "scale(0.7)" : "scale(0)",
    });
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={Styles.helpNavParent}>
      <BounceAnimation onMouseUp={handleMouseUp}>
        <animated.div>
          <h1 style={{ fontSize: "22px" }}>How To Navigate</h1>
        </animated.div>
      </BounceAnimation>

      {childs.map((child, index) => (
        <BounceAnimation
          key={index}
          className={Styles.HowToNavigateChild}
          style={child.expend}
        >
          <animated.div>
            <img src={child.img} alt="keyboard" style={{ width: "100px" }} />
            <p>{child.discription}</p>
          </animated.div>
        </BounceAnimation>
      ))}
    </div>
  );
};

export default NavHelp;
