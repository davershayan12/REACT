import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { NameList } from "./NameList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>names</h1>
      <NameList></NameList>
    </>
  );
}

export default App;
