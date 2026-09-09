import { useState } from "react"
export const DashBoard=({isPremium})=>{
    const [credits,setCredits]=useState(100)
    if (isPremium){
    return <div>upgrade to primium</div>    
    }
    
    return<>
    <p>credits: {credits}</p></>
}