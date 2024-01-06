import "./App.css";
import { MovementProvider } from "./context/movement.jsx";

// components
import AppStructure from "./components/AppStructure";

function App() {
  return (
    <>
      <MovementProvider>
        <AppStructure />
      </MovementProvider>
    </>
  );
}

export default App;
