import "./App.css";
import { User } from "./Person";
function App() {
  return (
    <>
      <User name={"David"} age={19} isMarried={false} />
      {""}
      <User name={"Jhon"} age={18} isMarried={true} />
      {""}
    </>
  );
}

export default App;
