import { Valchange } from './Parent';
import { useContext } from 'react';

const Child2 = () => {
    const {  count,handleCount,val,handleTheme } = useContext(Valchange)

    return (
        <div style={{backgroundColor:!val?"green":"black"}}>
            <h1>Iam child {count} haha bro</h1>
            <button onClick={handleCount}>Click me</button>
           <button onClick={handleTheme}></button>
        </div>
    );
}

export default Child2;
