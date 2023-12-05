import githubIcon from "../icons/github.svg";
import gitIcon from "../icons/git.svg";
const VCS_Skills = () => {
  return (
    <>
      <h3 style={{ width: "120px" }}>TOOLS : </h3>
      {/* git */}
      <div style={{ display: "flex", margin: "0 20px" }}>
        <img src={gitIcon} alt="git icon" />
        <div style={{ margin: "0 30px" }}>
          <div>GIT</div>
          <div>20%</div>
        </div>
      </div>
      {/* github */}
      <div style={{ display: "flex", margin: "0 20px" }}>
        <img src={githubIcon} alt="" />
        <div style={{ margin: "0 15px" }}>
          <div>GITHUB</div>
          <div>60%</div>
        </div>
      </div>
    </>
  );
};

export default VCS_Skills;
