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
            return state

    }
}
export const CounterWithIn=()=>{
    const [count,dispatch]= useReducer(reducer,intialState)
    return (
        <div>
            <p>counter: {count}</p>
            <button onClick={()=> dispatch("increment")}>increment</button>
            <button onClick={()=>{dispatch("decrement")}}>decrement</button>
            <button onClick={()=>{dispatch("reset")}}>reset</button>
        </div>
    )
}