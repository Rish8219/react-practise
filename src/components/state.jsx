import { useState } from "react"
export const State=()=>{
const [count , setCount]=useState(0)
    return(
        <>
        <h1> 1. useState Hook</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>+VE</button>
        <button onClick={()=>setCount(count-1)}>-VE</button>

        <h3>useState is a hook in react js which allows us to manage state of a functional component it allows us 
            to create a state variable and returns a initial value and a setter funciton.
        </h3>
        </>
    )
}