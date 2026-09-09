import { useState } from "react";
export const Counter =()=>{
    const [count ,setCount]=useState(0)
    //current Value ,setterFunction useState(initial value)
    
    const handleCLick=()=>{
        setCount(count+1);
         
    }
    return <button onClick={handleCLick} >count:{count} </button>

}