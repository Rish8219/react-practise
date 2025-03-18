import React from 'react';
import { useContext } from 'react';
import {Valchange} from "./Parent"
import Child2 from './Child2';
const Child1 = () => {
    const {count,handleCount}=useContext(Valchange)
    return (
        <div>
            <h1 > 1. Iam Child 1 </h1>
            <h1>Count {count}</h1>
            <button onClick={handleCount}>Click Me</button>
            <Child2/>
        </div>
    );
}

export default Child1;
