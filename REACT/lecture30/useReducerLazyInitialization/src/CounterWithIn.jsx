import { useReducer } from "react"
const intialState=0
const reducer=(state,action)=>{

    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1
        case "reset":
            return state=0
        default:
            return intialState  


        }
}
const init = (intialState) =>{
    console.log("init func is called")
    const savedCount=localStorage.getItem("count")
    if(savedCount !== null){ 
        console.log("found saved",savedCount)
        return parseInt(savedCount)
    }
    console.log("no saved file using initialvalue",intialState)
    return intialState
}
export const CounterWithIn=()=>{ 
    const [count,dispatch]= useReducer(reducer,intialState,init)
    return (
        <div>
            <p>counter: {count}</p>
            <button onClick={()=> dispatch("increment")}>increment</button>
            <button onClick={()=>{dispatch("decrement")}}>decrement</button>
            <button onClick={()=>{dispatch("reset")}}>reset</button>
        </div>
    )
}