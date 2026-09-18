import { useState } from "react";
ToDoList = () => {
  const [item, setItem] = useState([
    { id: 1, text: "win ha " },
    { id: 2, text: "learn ha" },
  ]);
  return(
    <div>
        <ul>
            {item.map((item)=>{
                return <li key={item.id}>{item.text}</li>
            })}
        </ul>
    </div>
  )
};
