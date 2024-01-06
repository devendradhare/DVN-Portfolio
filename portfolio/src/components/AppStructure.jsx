import React from 'react';
// styles
import styles from "./Structure.module.css";
// My components
import AboutMe from "./aboutMe/AboutMe";
import NavBar from "./navBar/NavBar";
import FrontendSkills from "./skills/FrontendSkills";
import BackendSkills from "./skills/BackendSkills";
import ProgrammingSkills from "./skills/ProgrammingSkills";
import VCS_Skills from "./skills/VCS_Skills";
import ContactMe from "./contactMe/ContactMe";
import Social from "./social/Social";
import MyProjects from "./myProjects/MyProjects";
import MyCertificate from "./myCertificate/MyCertificate";
import Resume from "./resume/Resume";
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
  } = useMovement();

  return (
    <>
      <NavBar></NavBar>
      <div
        id={styles.zoom_outerid}
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
        {/* <AppBar />   */}
        <div id={styles.zoom}>
          <AboutMe className={styles.aboutMe} />
          <div className={styles.objective}>
            Welcome to my portfolio! I am a passionate Full Stack Web Developer
            with expertise in the MERN stack. I am dedicated to contributing to
            dynamic web projects while continually expanding my skills in web
            development.
          </div>

          <Button
            // go to contact me zone
            onClick={() => {
              setPointX(-100);
              setPointY(550);
              setScale(1);
            }}
            variant="outlined"
            color="primary"
            style={{ position: "absolute", top: "-160px", left: "0" }}
          >
            contect
          </Button>

          <MyProjects />
          <ContactMe />
          <Social />
          <MyCertificate left={"-50px"} top={"700px"} />
          <Resume left={"-950px"} top={"430px"} />

          <section className={`${styles.MySkills} ${styles.zone}`}>
            Skills
          </section>
          <div
            className={styles.skills}
            style={{ top: "200px", left: "330px" }}
          >
            <FrontendSkills />
          </div>
          <div
            className={styles.skills}
            style={{ top: "300px", left: "330px" }}
          >
            <BackendSkills />
          </div>
          <div
            className={styles.skills}
            style={{ top: "400px", left: "330px" }}
          >
            <ProgrammingSkills />
          </div>
          <div
            className={styles.skills}
            style={{ top: "500px", left: "330px" }}
          >
            <VCS_Skills />
          </div>
          <svg
            className={`${styles.node}`}
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
            <path
              d={`M-125,-120 c100,90 40,-150 160,-50`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />

            {/* node: contect button ----to---- contect zone */}
            <path
              d={`M90,-110 C250,100 300,-500 380,-430`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
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
              d={`M-430, 180 c120,280 -200,100 -160,360`}
              fill="none"
              stroke="white"
              strokeWidth="4"
            />
            {/* Node: skills bracket ---to--- certificats zone */}
            <path
              d={`M260,460 c-800,0 -210,150 -220, 230`}
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
