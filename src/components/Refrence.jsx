import React from 'react';
import { useRef } from 'react';
const Refrence = () => {
    const val = useRef()
    console.log(useRef);
    console.log(val);
    return (

        <div>
          <button ref={val}></button>
        </div>
    );
}

export default Refrence;
