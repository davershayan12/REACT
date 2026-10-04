import { useState } from "react";

export function ToDoList() {
  const [items, setItems] = useState([
    { id: 1, text: "win ha ", done: false, },
    { id: 2, text: "learn ha", done: false, },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "learn hogaya",
      done: false,
    };
    setItems(items.concat(newItem));
  };
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const toggleDone = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      }),
    );
  };
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
              <li key={item.id}>
                <span style={{textDecoration: item.done ? "line-through" : "none"}}>
                  {item.text}
                </span>
                <button onClick={()=>toggleDone(item.id)}>{item.done ? "undone":"done"}</button>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </li>
          )
        })}
      </ul>
      <button onClick={addItem}>add item</button>
    </div>
  );
}
