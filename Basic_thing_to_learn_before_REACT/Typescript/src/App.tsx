import "./App.css";
import { User,Countries } from "./Person";
function App() {
  return (
    <>
      <User name={"David"} age={19} isMarried={false} country={Countries.Afghanistan}/>
      {""}
      <User name={"Jhon"} age={18} isMarried={true} country={Countries.Afghanistan} />
      {""}
    </>
  );
}

export default App;
