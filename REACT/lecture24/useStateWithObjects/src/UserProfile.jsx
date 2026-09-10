import { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wane",
    age: 10,
    email: "daver@gmail.com",
  });
  return <div>
    <h3>{user.name}</h3>
    <h3>{user.age}</h3>
    <h3>{user.email}</h3>
  </div>;
};
