import React from "react";
import Style from "./AboutMe.module.css";
import me from "./main.png";
import { Box } from "@mui/material";

function EmojiBullet({ emoji, text }) {
  return (
    <Box
      component={"li"}
      fontSize={"1rem"}
      lineHeight={1.5}
      style={{ cursor: "default" }}
    >
      <Box
        component={"span"}
        aria-label="cheese"
        role="img"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"1.5rem"}
      >
        {emoji}
      </Box>
      {text}
    </Box>
  );
}
export default function AboutMe() {
  return (
    <div className={Style.aboutMe}>
      <img
        className={Style.shadowed}
        alt={"image of developer"}
        src={me}
        // style={{ height: "200px", margin: "0 2rem" }}
      />

      <svg
        // className={`${styles.node}`}
        width="100"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        className={Style.aboutMeSvg}
      >
        <path
          d={`M500,0 C500,-150 200,-100 170,-30`}
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
        <path
          d={`M170,-50 L170,-30 L190, -35`}
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
      </svg>

      <div className={Style.aboutMeText}>
        <h1>
          Hi, I'm
          <span className={Style.gradientName}>Devendra dhare</span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm a Full Stack Web Developer."</h2>
        {/* <Box component={"ul"} p={"0.8rem"}>
          <EmojiBullet emoji="☕" text="fueled by coffee" />
          <EmojiBullet emoji="🌎" text="based in the Indore MP" />
          <EmojiBullet emoji="💼" text="MERN Stack Developer" />
          <EmojiBullet emoji="📧" text="devendrdhare@gmail.com" />
        </Box> */}
      </div>
    </div>
  );
}
