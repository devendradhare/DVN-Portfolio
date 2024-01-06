import React from 'react';
import TicTacToeScreenshort from "./projectImgs/tic_tac_toe_screenshort.png";
import LiveBusScreenshort from "./projectImgs/LiveBus.jfif";
// Styles
import Style from "./myProjects.module.css";
const MyProjects = () => {
  return (
    <section
      style={{
        top: "550px",
        left: "-650px",
        position: "absolute",
        fontSize: "40px",
        overflow: "visible",
        textAlign: "center",
      }}
    >
      <span>My projects</span>
      <div
        style={{
          position: "absolute",
          left: "-400px",
          top: "100px",
          overflow: "visible",
        }}
      >
        <div>Smart Tic-Tac-Toi</div>
        <img
          src={TicTacToeScreenshort}
          alt="toc-tac-toe-screenshort.jpg"
          style={{
            width: "400px",
            position: "absolute",
            zIndex: "-1",
            left: "320px",
            top: "-30px",
            border: "1px solid gray",
          }}
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
        style={{
          position: "absolute",
          left: "-250px",
          top: "400px",
          overflow: "visible",
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.9) , rgba(255, 255, 255, 0))",
        }}
      >
        <div> Live Bus Tracker</div>
        <img
          src={LiveBusScreenshort}
          alt="LiveBusScreenshort.jpg"
          className={Style.discription}
          style={{
            width: "300px",
            position: "absolute",
            border: "1px solid gray",
          }}
        />
        <p
          style={{
            width: "500px",
            fontSize: "18px",
            // mixBlendMode: "difference",
            textShadow: "2px 2px 2px #000000",
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
      <div style={{ position: "absolute", left: "-400px", top: "680px" }}>
        <div>Todo App</div>
        <p style={{ width: "500px", fontSize: "18px" }}>
          Implemented the classic game of Tic-Tac-Toe using the C programming
          language. This project demonstrates proficiency in algorithmic
          thinking and logic implementation. The game is designed to run in a
          console environment, providing a simple yet effective demonstration of
          coding skills in C.
        </p>
      </div>
    </section>
  );
};

export default MyProjects;
