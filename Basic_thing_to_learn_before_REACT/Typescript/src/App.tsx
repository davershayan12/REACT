import './App.css'
import { Person } from './Person'
function App() {
  return (
    <>
      <Person name={"David"} age={19} isMarried={false} />{""}
      <Person name={"Jhon"} age={18} isMarried={true} />{""}
    </>
  );
}

export default App
