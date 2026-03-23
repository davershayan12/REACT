import { UserContext } from "./UserContextProvider";
import { useContext } from "react";
interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

enum Countries{
  Pakistan="Pakistan",
  Iran="Iran",
  Afghanistan="Afghanistan",


} 
export const User = (props: Props) => {

  return (
    <div>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>This Person: {props.isMarried ? "is married" : "is single"}</p>
    </div>
  );
};
