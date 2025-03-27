import React from 'react';
import { useReducer } from 'react';


const Reducer = () => {

    const initialState = 0
const reducer = (state, action) => {
    console.log(action);
    console.log(state);
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            return state
    }
}

   

  const[count ,dispatch]=  useReducer(reducer, initialState)
    return (
        <div>
            
            <h1>Reducer</h1>
            <p>Use the useReducer hook to manage state in your application. It is a alternate to useState.Used basically to manage complex states</p>
            <h1>count :{count}</h1>
            <button id='btn' onClick={()=>dispatch("increment")}>click +ve</button>
            <button onClick={()=>dispatch("decrement")}>click -ve</button>

        </div>
    );
}

export default Reducer;
