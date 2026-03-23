import { createContext } from "react";
import { User } from "./Person";
export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}
interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updateUser: (id: string) => void;
  DeleteUser: (id: string) => void;
}
const contextInitailValue = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  DeleteUser: () => null,
};
const UserContext = createContext<UserContextType>(contextInitailValue);
