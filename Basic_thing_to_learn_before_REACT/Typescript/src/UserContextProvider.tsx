import { useEffect, useState } from "react";
import React, { createContext } from "react";
import { User } from "./Person";
import { useFormState } from "react-dom";
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
export const UserContext = createContext<UserContextType>(contextInitailValue);
interface Props {
  children: React.ReactNode;
}

export const UserProvider = (props: any) => {
  const [users, setUser] = useState<User[] | null>(null);
  useEffect(() => {
    setUser([{ name: "david", age: 19, isMarried: true }]);
  }, []);
  const addUser = (user: User) => null;
  const updateUser = (id: string) => null;
  const DeleteUser = (id: string) => null;

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, DeleteUser }}>
      {props.childern}
    </UserContext.Provider>
  );
};
