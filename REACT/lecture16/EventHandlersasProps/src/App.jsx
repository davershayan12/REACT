import "./App.css";
import { ActionButton } from "./ActionButton";
import { Contact } from "./Contact";
import { Newslatter } from "./NewsLatter";
import { Menu } from "./Menu";
function App() { 
  return (
    <div>
      <Menu/>
      <Newslatter />
      <Contact />
    </div>
  );
}

export default App;
