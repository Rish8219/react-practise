import React from 'react';
import Child1 from './Child1';
import { useState,createContext } from 'react';
let Valchange=createContext()
const Parent = () => {
    const [count ,setCount]=useState(0)
    const [val, setVal] = useState(false)
    function handleCount(){
        setCount(count+1)
    }
    function handleTheme(){
        setVal(!val)
    }
  
    return (
        <div style={{backgroundColor:!val?"yellow":"black", color:!val?"black":"white"}}>
            <h1>3. useContext Hook</h1>
            <h2>useContext hook is used to manage the state globally and to overcome the problem of prop-drilling. 
                "PROP-DRILLING":- is a concept in react where data in react in case of nested components if we want to transfer the data to last component then we have to manually pass this.props
                to every nested parent this is a inefficient way to share data so useContext hook is a way to overcome this
            </h2>
            <h3>This can by done by :- 
                <ol style={{listStyleType:"1 "}}>
                    <li>Step 1 : By creating a global context variable in the parent component by using create context</li>
                    <li>Step 2 : Wrapping the nested components in a contextProvider </li>
                    <li>Step 3 : By consuming the provided context using useContext </li>

<button onClick={handleTheme}></button>
                </ol>
            </h3>
            <Valchange.Provider value={{count,handleCount ,val,handleTheme}}>
            <Child1/> </Valchange.Provider>
           
        </div>
    );
}

export default Parent;
export {Valchange}
