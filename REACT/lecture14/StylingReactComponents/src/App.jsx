import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Alert } from "./Alert";
import { NewButton } from "./newbutton";
function App() {
  return (
    <div>
      <NewButton></NewButton>
      <Alert>changes have been save</Alert>
    </div>
  );
}

export default App;
