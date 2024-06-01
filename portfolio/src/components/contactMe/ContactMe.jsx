import React, { useRef, useState, useEffect } from "react";
import { useMovement } from "../../context/movement";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./contactMe.module.css";

// SVGs
import antenna from "../icons/antenna.svg";

const ContactMe = ({ left, top }) => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const { setNotInsideAnyElement } = useMovement();
  const [antennaAnimation, setAntennaAnimation] = useState(false);
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const messageRef = useRef(null);
  if (state.succeeded) {
    nameRef.current.value = "";
    mailRef.current.value = "";
    messageRef.current.value = "";
  }
  // useEffect(() => {
  //   setAntennaAnimation(false);
  // }, [state.succeeded]);

  return (
    <section className={`${styles.contactMeSection}`} style={{ left, top }}>
      <span>Contect me</span>
      <p style={{ fontSize: "18px", textAlign: "center", padding: " 10px" }}>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>

      <form
        method="POST"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "visible",
        }}
      >
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
          onClick={() => nameRef.current.focus()}
          ref={nameRef}
          className={styles.inputs}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          onClick={() => mailRef.current.focus()}
          ref={mailRef}
          className={styles.inputs}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          required
          id="message"
          name="message"
          placeholder="Message"
          onClick={() => messageRef.current.focus()}
          ref={messageRef}
          className={styles.inputs}
          onMouseEnter={() => setNotInsideAnyElement(false)}
          onMouseOut={() => setNotInsideAnyElement(true)}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className={styles.sendBtn}
          onClick={() => {
            if (
              nameRef.current.value.length &&
              mailRef.current.value.length &&
              messageRef.current.value.length
            ) {
              setAntennaAnimation(true);
            }
          }}
        >
          Submit
          <br />
          <span style={{ color: "rgb(100, 255, 60)" }}>
            {state.succeeded && "Submited Successfully"}
          </span>
        </button>
        <div
          onMouseOver={() => setAntennaAnimation(true)}
          onMouseLeave={() => setAntennaAnimation(false)}
        >
          <svg
            className={
              (antennaAnimation ? styles.antennaSvg : " ") +
              " " +
              styles.antennaSvgPosition
            }
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M149.245 104.248C81.9148 221.504 205.983 311.565 310.669 252.026"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M160.38 254.701C104.271 307.734 153.458 304.819 183.363 259.998"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M160.216 107.72C220.701 143.14 268.514 196.678 314.141 248.914"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M231.971 153.127C288.747 138.119 269.299 136.041 255.052 182.946"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={antennaAnimation ? styles.antennaSignal : " "}
              style={{ animationDelay: "0s" }}
              d="M287.522 133.181C282.79 129.868 279.937 125.658 277.106 121.608"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={antennaAnimation ? styles.antennaSignal : " "}
              style={{ animationDelay: "0.2s" }}
              d="M315.298 119.293C309.776 109.319 300.669 102.185 292.151 94.9893"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={antennaAnimation ? styles.antennaSignal : " "}
              style={{ animationDelay: "0.4s" }}
              d="M328.029 92.6744C320.667 90.8189 316.782 85.6555 311.826 81.1011"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className={styles.baseAntennaSvgPosition}
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // style={{
            //   overflow: "visible",
            //   position: "absolute",
            // }}
          >
            <path
              d="M113.923 320.669C123.278 281.161 159.195 281.161 163.688 317.118"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M226.184 325.629C175.203 324.332 111.184 327.346 63 326.182"
              stroke="#ffffff"
              strokeOpacity="0.9"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <ValidationError errors={state.errors} />
      </form>
      {/* <button
        onClick={() => {
          setAntennaAnimation(!antennaAnimation);
        }}
      >
        toggal animation
      </button> */}
    </section>
  );
};

export default ContactMe;
