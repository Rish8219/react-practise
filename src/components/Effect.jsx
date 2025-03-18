import React from 'react';
import { useEffect, useState } from 'react';
const Effect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        alert("rendering before every rerender")

    },[count])

    return (
        <div>
            <h1>2. useEffect Hook</h1>
            <h1>This is a example of without any dependency </h1>
            <h2>Value:{count}</h2>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <h3>
                useEffect is a hook which is used to perform all the asynchronous operations like fetching an API etc. it allows us to use lifecylce of class component in functonial component and also is used to
                add side-effects to any component and incase one want to manipulate Dom directly on an event.It have three parameters 
                <ol style={{listStyleType:"1"}}>
                    <li>Call-back function (equivalent to mounting phase)</li>
                    <li>return function (equivalent to unmounting phase)</li>
                    <li>Array dependency seperated by , (equivalent to updating phase)</li>
                </ol>
            </h3>
            <h3>It also have various use cases :-
                <ol style={{listStyleType:"1"}}>
                    <li>Without dependency [] runs before first render and every re-render</li>
                    <li>With empty dependency [] it runs before first render</li>
                    <li>With a single dependency [count] parameter runs before the stated parameter updates</li>
                    <li>With a mutliple dependency [count,name] parameters runs before any of the stated parameter gets updated</li>
                </ol>
            </h3>

        </div>
    );
}

export default Effect;
