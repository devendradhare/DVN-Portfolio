import React from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import ProgrammingSkills from "./ProgrammingSkills";
import VCS_Skills from "./VCS_Skills";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div>
      <section className={`${styles.MySkills} ${styles.zone}`}>Skills</section>
      <div className={styles.skills} style={{ top: "200px", left: "330px" }}>
        <FrontendSkills />
      </div>
      <div className={styles.skills} style={{ top: "300px", left: "330px" }}>
        <BackendSkills />
      </div>
      <div className={styles.skills} style={{ top: "400px", left: "330px" }}>
        <ProgrammingSkills />
      </div>
      <div className={styles.skills} style={{ top: "500px", left: "330px" }}>
        <VCS_Skills />
      </div>
    </div>
  );
};

export default Skills;
