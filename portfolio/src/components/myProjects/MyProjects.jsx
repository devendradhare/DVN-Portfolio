import React from "react";
// images
import TicTacToeScreenshort from "./projectImgs/tic_tac_toe_screenshort.png";
import LiveBusScreenshort from "./projectImgs/LiveBus.png";
import MyPortfolio from "./projectImgs/MyPortfolio.png";
import currencyExchange from "./projectImgs/currencyExchange.jpg";
// Styles
import Style from "./myProjects.module.css";

const Project = ({ tital, discription, image, usedTech, style_ }) => {
  return (
    <div className={Style.projectsDiv_dvn} style={{ ...style_, width:"500px" }}>
      <span className={Style.projectTital} style={{minWidth:"100%"}}>{tital}</span>
      <div className={Style.imgDiv}>
        <img src={image} alt="toc-tac-toe-screenshort.jpg" />
      </div>
      <div>
        <p >
          {discription}
          <div className={Style.usedTech}>
            {usedTech.map((techName, index) => (
              <div key={index}>{techName}</div>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};
const MyProjects = ({ top, left }) => {
  const baseStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    border: "1px solid green",
  };
  return (
    <section
      className={Style.projectSection}
      style={{
        top,
        left,
        background: "red",
        width: "10px",
        height: "10px",
        // position:"relative"
        overflow: "visible",
      }}
    >
      <div
        style={{
          background: "lightblue",
          width: "1px",
          height: "1px",
          position: "relative",
          overflow: "visible",
        }}
      >
        <span
          style={{
            ...baseStyle,
            top: "0px",
            left: "-70px",
            whiteSpace: "nowrap",
            fontSize:"28px",
            fontWeight:"bold",
          }}
        >
          My projects
        </span>
        <p style={{ ...baseStyle, top: "60px",left:"-50px", width:"500px" }}>
          I'd like to showcase a few projects that I've personally created. Each
          project represents a culmination of my efforts and skills, reflecting
          a diverse range of accomplishments.
        </p>
        <Project
          style_={{ ...baseStyle, top: "500px", left: "-900px" }}
          tital={"currency exchange rates"}
          image={currencyExchange}
          discription={
            "This React and CSS project tracks real-time exchange rates for all global currencies. It features an interactive world map that shows current exchange rates when you hover over any country. Ideal for monitoring global currency trends effortlessly."
          }
          usedTech={["react", "css", "svg maps", "currency exchange API"]}
        />

        <Project
          style_={{ ...baseStyle, top: "500px", left: "-300px" }}
          tital={"Live Bus Tracker"}
          image={LiveBusScreenshort}
          discription={
            "The College Bus Tracking Web App is a sophisticated real-time trackingsystem designed to enhance the safety and convenience of college bustransportation. This application allows users, including students andbus drivers, to effortlessly monitor the precise location of collegebuses and track the whereabouts of individual students."
          }
          usedTech={["react", "css", "node", "express"]}
          />
        <Project
          style_={{ ...baseStyle, top: "500px", left: "300px" }}
          tital={"My Portfolio"}
          image={MyPortfolio}
          discription={
            "this the my portfolio website you are currently visiting in, Inspiredby the functionality of Google Maps, my portfolio provides a uniqueuser experience. Similar to navigating Google Maps, users can zoom inand out on the page. By scrolling up, you can zoom out to get anoverview, and then zoom in on the specific content you wish toexplore."
          }
          usedTech={["react", "css", "contextAPI"]}
          />
        <Project
          style_={{ ...baseStyle, top: "500px", left: "900px" }}
          tital={"Smart Tic-Tac-Toi"}
          image={TicTacToeScreenshort}
          discription={
            "Implemented the classic game of Tic-Tac-Toe using the C programminglanguage. This project demonstrates proficiency in algorithmicthinking and logic implementation. The game is designed to run in a console environment, providing a simple yet effective demonstration ofcoding skills in C."
          }
          usedTech={["c programming"]}
        />
      </div>
      {/* <div
        className={Style.projectsDiv}
        style={{ left: "-250px", top: "400px" }}
        >
        <div
        style={{
          // position: "absolute",
          width: "500px",
            left: "130px",
            top: "-50px",
          }}
        >
          
        </div>
        <img
          src={LiveBusScreenshort}
          alt="LiveBusScreenshort.jpg"
          className={Style.discription}
          style={{
            width: "300px",
            // position: "absolute",
            left: "-145px",
            // border: "1px solid gray",
          }}
        />
        <p
          style={{
            // position: "absolute",
            left: "190px",
            width: "380px",
            fontSize: "18px",
            // mixBlendMode: "difference",
            // textShadow: "0px 0px 5px black",
          }}
          onMouseOver={() => {}}
        >

        </p>
      </div>
      <div
        style={{
          // position: "absolute",
          left: "-400px",
          top: "680px",
          overflow: "visible",
        }}
      >
        <div></div>
        <img
          src={MyPortfolio}
          alt="toc-tac-toe-screenshort.jpg"
          className={Style.discription}
          style={{
            left: "320px",
            top: "-30px",
            width: "500px",
            // position: "absolute",
            top: "50px",
            border: "1px solid gray",
          }}
        />
        <p
          style={{
            width: "500px",
            fontSize: "18px",
            // position: "absolute",
            left: "0",
            top: "120px",
          }}
        >
          
        </p>
      </div> */}
    </section>
  );
};

export default MyProjects;
