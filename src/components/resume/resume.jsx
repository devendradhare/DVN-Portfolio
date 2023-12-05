import myResume from "./Devendra-dhare-resume.pdf";
// import tieIcon from "../icons/resume_tie.svg";
import tieIcon from "../icons/resume.svg";
const Resume = ({ left, top }) => {
  return (
    <>
      <section
        style={{
          left,
          top,
          position: "absolute",
          fontSize: "30px",
          cursor: "pointer",
          margin: "0 10px",

          // background: "RED",

          display: "flex",
        }}
      >
        <a
          href={myResume}
          style={{
            margin: "0 8px",
          }}
          download
        >
          Download Reseme
        </a>
        <img src={tieIcon} alt="Resume Icon" style={{ width: "40px" }} />
      </section>
    </>
  );
};

export default Resume;
