import React, { useState } from "react";
// Style
import Style from "./Structure.module.css";
// My components
import AboutMe from "./aboutMe/AboutMe";
import NavBar from "./navBar/NavBar";
import Skills from "./skills/Skills";
import ContactMe from "./contactMe/ContactMe";
import Social from "./social/Social";
import MyProjects from "./myProjects/MyProjects";
import MyCertificate from "./myCertificate/MyCertificate";
import Resume from "./resume/Resume";
import HowToNavigate from "./howToNavigate/HowToNavigate";
// MUI components
import Button from "@mui/material/Button";
// context api
import { useMovement } from "../context/movement.jsx";

const AppStructure = () => {
  const {
    setScale,
    setPointX,
    setPointY,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleWheel,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    innerWidth,
  } = useMovement();
  const [diviceNotice, setDiviceNotice] = useState(false);

  return (
    <>
      {innerWidth >= 770 && <NavBar></NavBar>}
      <section className={diviceNotice ? Style.diviceNotice : " "}>
        <div>
          <p>For a better experience, open it on your computer</p>
          <button onClick={() => setDiviceNotice(false)}>Open Anyway</button>
        </div>
      </section>

      <div
        id={Style.zoom_outerid}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
        onTouchEnd={handleTouchEnd}
      >
        {/* <p>
          <span>pointX : {pointX}</span>
          <span>pointY : {pointY}</span>
          <span>scale : {scale}</span>
          <span>key : {arrowKeyPressed}</span>
        </p> */}

        <div id={Style.zoom}>
          <AboutMe className={Style.aboutMe} />
          <p className={Style.objective}>
            Welcome to my portfolio! I am a passionate Full Stack Web Developer
            with expertise in the MERN stack. I am dedicated to contributing to
            dynamic web projects while continually expanding my skills in web
            development.
          </p>

          <Social left={"-870px"} top={"50px"} />
          <Resume left={"-950px"} top={"430px"} />
          <MyProjects left={"-1250px"} top={"650px"} />
          <MyCertificate left={"400px"} top={"850px"} />
          <Skills />
          <ContactMe left={"500px"} top={"1500px"} />
          {innerWidth >= 770 && <HowToNavigate left={"-1700px"} top={"10px"} />}

          <svg
            className={`${Style.node}`}
            width="1"
            height="1"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* node: Developer ----to---- objective  */}
            <path
              d={`M-240,-20 c80,130 -299,-30 -200,110`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />

            {/* node: wave hand ----to---- contect me */}
            {/* <path
              d={`M-125,-120 c100,90 40,-150 160,-50`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            /> */}

            {/* node: contect button ----to---- contect zone */}
            {/* <path
              d={`M90,-110 C250,100 300,-500 380,-430`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            /> */}
            {/* <path
            d={`M570,-450 c0,0 100,-50 60, 35`}
            fill="none"
            stroke="white"
            strokeWidth="4"
          /> */}

            {/* node: my image ---to--- social */}
            <path
              d={`M-770,-10 C-650,20 -990,10 -900,60`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            <path
              d={`M-880,50 C-915,40 -880,210 -910,200 C-880,200 -910,360 -880,350`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />

            {/* node: skill word ---to--- my skills zone */}
            <path
              d={`M-165,180 C-180,480 -100,290 130,280`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />

            {/* skills bracket up portion */}
            <path
              d={`M250,280 C280,290 240,160 300,170`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />

            {/* skills bracket down portion */}
            <path
              d={`M250,280 C290,250 240,600 300,570`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            {/* Node: project word ---to--- project zone */}
            <path
              d={`M-430, 180 c120,280 -200,100 -160,460`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            {/* Node: skills bracket ---to--- certificats zone */}
            <path
              d={`M860,390 c800,90 110,150 120, 430`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            {/* Node: social bracket ---to--- resume */}
            <path
              d={`M-895,300 c-200,100 -20,90 -20, 130`}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AppStructure;
