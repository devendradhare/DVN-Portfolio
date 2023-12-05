// MUI components
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// css
import "./navbar.css";
// context api
import { useMovement } from "../../context/movement.jsx";

const NavBar = () => {
  const { setPointX, setPointY, setScale } = useMovement();
  return (
    <nav className="navbar-section">
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
    </nav>
  );
};

export default NavBar;
