// MUI components
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// css
import styles from "./navbar.module.css";
// context api
import { useMovement } from "../../context/movement.jsx";
import Slider from "@mui/material/Slider";

const NavBar = () => {
  const { setPointX, setPointY, setScale, scale } = useMovement();
  return (
    <nav className={styles.navbarSection}>
      <Button
        onClick={() => {
          setPointX(1100);
          setPointY(350);
          setScale(1);
        }}
        sx={{ margin: "0 5px" }}
        variant="outlined"
        color="primary"
        endIcon={<HomeOutlinedIcon />}
      >
        home
      </Button>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            setPointX(1000);
            setPointY(200);
            setScale(1.5);
          }}
          sx={{ margin: "0 5px" }}
          variant="outlined"
          color="primary"
        >
          about
        </Button>
        <Button
          onClick={() => {
            setPointX(100);
            setPointY(-50);
            setScale(1);
          }}
          sx={{ margin: "0 5px" }}
          variant="outlined"
          color="primary"
        >
          skills
        </Button>
        <Button
          onClick={() => {
            setPointX(1100);
            setPointY(-340);
            setScale(0.7);
          }}
          sx={{ margin: "0 5px" }}
          variant="outlined"
          color="primary"
        >
          project
        </Button>
        <Button
          onClick={() => {
            setPointX(-100);
            setPointY(550);
            setScale(1);
          }}
          sx={{ margin: "0 5px" }}
          variant="outlined"
          color="primary"
        >
          contect
        </Button>
        <Button
          onClick={() => {
            setPointX(3000);
            setPointY(-1100);
            setScale(3);
          }}
          sx={{ margin: "0 5px" }}
          variant="outlined"
          color="primary"
        >
          resume
        </Button>
      </div>
      <div className={styles.sliderDiv}>
        <span className={styles.zoomSpan}>ZOOM </span>
        <Slider
          size="small"
          defaultValue={1}
          value={scale * (100 / 2.5)}
          min={10}
          max={100}
          aria-label="Small"
          valueLabelDisplay="auto"
          onChange={(e, value) => setScale((value / 100) * 2.5)}
        />
      </div>
    </nav>
  );
};

export default NavBar;
