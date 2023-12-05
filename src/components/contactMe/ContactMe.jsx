import { useRef } from "react";
import { useMovement } from "../../context/movement";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./contactMe.module.css";

const ContactMe = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_KEY);
  const { setNotInsideAnyElement } = useMovement();

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const messageRef = useRef(null);

  if (state.succeeded) {
    nameRef.current.value = "";
    mailRef.current.value = "";
    messageRef.current.value = "";
  }

  return (
    <section
      className={`${styles.contactMeSection}`}
      style={{ left: "400px", top: "-475px" }}
    >
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
        >
          Submit
          <br />
          {state.succeeded && "Submited Successfully"}
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
};

export default ContactMe;
