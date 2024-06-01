import React from "react";
// import FrontendSkills from "./FrontendSkills";
// import BackendSkills from "./BackendSkills";
import VCS_Skills from "./VCS_Skills";
import styles from "./skills.module.css";

// svg
import reactLogo from "./svg/reactLogo.svg";
import htmlLogo from "./svg/htmlLogo.svg";
import cssLogo from "./svg/cssLogo.svg";
import nodeLogo from "./svg/nodeLogo.svg";
import cLanguageLogo from "./svg/cLanguageLogo.svg";
import cppLogo from "./svg/cppLogo.svg";

import githubIcon from "../icons/github.svg";
import gitIcon from "../icons/git.svg";

const SubSkills = ({ top, left, subTitle, skillArr }) => {
  return (
    <div className={styles.skills} style={{ top, left }}>
      <h3>{subTitle} : </h3>
      {skillArr.map((skill) => {
        return (
          <div style={{ display: "flex", margin: "0 20px" }}>
            <img src={skill.logo} alt="react logo" />
            <div style={{ margin: "0 15px" }}>
              <div>{skill.name}</div>
              <div>{skill.per}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Skills = () => {
  return (
    <section className={` ${styles.MySkillsSection}`}>
      <h2 className={styles.skills} style={{ top: "100px", left: "-50px" }}>
        Skills
      </h2>
      <SubSkills
        subTitle={"FRONTEND"}
        skillArr={[
          { name: "react", logo: reactLogo, per: "45%" },
          { name: "html", logo: htmlLogo, per: "70%" },
          { name: "css", logo: cssLogo, per: "69%" },
        ]}
        top={"-50px"}
        left={"130px"}
      />
      <SubSkills
        subTitle={"BACKEND"}
        skillArr={[{ name: "node js", logo: nodeLogo, per: "45%" }]}
        top={"-50px"}
        left={"130px"}
      />
      <SubSkills
        subTitle={"PROGRAMMING"}
        skillArr={[
          { name: "C", logo: cLanguageLogo, per: "40%" },
          { name: "C++", logo: cppLogo, per: "40%" },
        ]}
        top={"-50px"}
        left={"130px"}
      />
      <SubSkills
        subTitle={"VCS"}
        skillArr={[
          { name: "git", logo: gitIcon, per: "20%" },
          { name: "github", logo: githubIcon, per: "60%" },
        ]}
        top={"-50px"}
        left={"130px"}
      />
    </section>
  );
};

export default Skills;
