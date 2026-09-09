
import { useState } from "react"
export const LoginCard=()=>{
    const [isLoggedIn,setIsLoggedin]=useState(false)
    const [msg,setMsg]=useState("")
    const handleLogin=()=>{
        setIsLoggedin(!isLoggedIn)
    }
    const handleChange=(event)=>{
    setMsg(event.target.value)
    }
    return<>
    <button onClick={handleLogin}>{isLoggedIn ? "logout":"login"}</button>
    <input type="text" placeholder="type msg" value={msg} onChange={handleChange} />
    
    <p>{msg}</p>
    <p>{setMsg}</p>
</>}