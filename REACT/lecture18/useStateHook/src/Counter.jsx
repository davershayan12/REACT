import { useState } from "react";
export const Counter =()=>{
    const [count ,setCount]=useState(()=>{
        console.log("initail function call")
        //only starting the it will print it 
        return 0 
    })
    //current Value ,setterFunction useState(initial value OR FUNCTION)
    
    const handleCLick=()=>{
        setCount(count+1);
         
    }
    return <button onClick={handleCLick} >count:{count} </button>

}