import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { UserDetails } from "./UserDetail";
function App() {
  return (
    <div>
      <UserDetails name={"daver"} isOnline={false} />
    </div>
  );
}

export default App;
