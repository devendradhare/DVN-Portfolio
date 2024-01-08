import React from "react";
// images
import TicTacToeScreenshort from "./projectImgs/tic_tac_toe_screenshort.png";
import LiveBusScreenshort from "./projectImgs/LiveBus.jfif";
import MyPortfolio from "./projectImgs/MyPortfolio.png";
// Styles
import Style from "./myProjects.module.css";
const MyProjects = () => {
  return (
    <section
      className={Style.projectSection}
      style={{ top: "550px", left: "-650px" }}
    >
      <span>My projects</span>
      <div
        className={Style.projectsDiv}
        style={{ left: "-400px", top: "100px" }}
      >
        <div>Smart Tic-Tac-Toi</div>
        <img
          src={TicTacToeScreenshort}
          alt="toc-tac-toe-screenshort.jpg"
          className={Style.discription}
          style={{ left: "320px", top: "-30px" }}
        />
        <span style={{ fontSize: "24px" }}>Used techonlogys: C language</span>
        <p style={{ width: "500px", fontSize: "18px" }}>
          Implemented the classic game of Tic-Tac-Toe using the C programming
          language. This project demonstrates proficiency in algorithmic
          thinking and logic implementation. The game is designed to run in a
          console environment, providing a simple yet effective demonstration of
          coding skills in C.
        </p>
      </div>
      <div
        className={Style.projectsDiv}
        style={{ left: "-250px", top: "400px" }}
      >
        <img
          src={LiveBusScreenshort}
          alt="LiveBusScreenshort.jpg"
          className={Style.discription}
          style={{
            width: "300px",
            position: "absolute",
            left: "-145px",
            // border: "1px solid gray",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "500px",
            left: "130px",
            top: "-50px",
          }}
        >
          Live Bus Tracker
        </div>
        <p
          style={{
            position: "absolute",
            left: "190px",
            width: "380px",
            fontSize: "18px",
            // mixBlendMode: "difference",
            // textShadow: "0px 0px 5px black",
          }}
          onMouseOver={() => {}}
        >
          The College Bus Tracking Web App is a sophisticated real-time tracking
          system designed to enhance the safety and convenience of college bus
          transportation. This application allows users, including students and
          bus drivers, to effortlessly monitor the precise location of college
          buses and track the whereabouts of individual students.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: "-400px",
          top: "680px",
          overflow: "visible",
        }}
      >
        <div>My Portfolio</div>
        <img
          src={MyPortfolio}
          alt="toc-tac-toe-screenshort.jpg"
          className={Style.discription} 
          style={{
            left: "320px",
            top: "-30px",
            width: "500px",
            position: "absolute",
            top: "50px",
            border: "1px solid gray",
          }}
        />
        <p
          style={{
            width: "500px",
            fontSize: "18px",
            position: "absolute",
            left: "0",
            top: "120px",
          }}
        >
          this the my portfolio website you are currently visiting in, Inspired
          by the functionality of Google Maps, my portfolio provides a unique
          user experience. Similar to navigating Google Maps, users can zoom in
          and out on the page. By scrolling up, you can zoom out to get an
          overview, and then zoom in on the specific content you wish to
          explore.
        </p>
      </div>
    </section>
  );
};

export default MyProjects;
