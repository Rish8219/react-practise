import React from 'react';
import { State } from './components/state';
import Effect from './components/Effect';
import Parent from './components/context/Parent';
import Refrence from './components/Refrence';
const App = () => {
  const [val, setVal] = useState(false)


  function handleTheme(){
    setVal(!val)
}
  return (
    <div style={{backgroundColor:!val?"yellow":"black", color:!val?"black":"white"}}>
      <h1>Hooks are predefined funcitons in react which allow us to hook into functional component and use state and other react feature in functional component</h1>
       <State />
      <Effect/>
      <Parent/>
      <Refrence/> 
      <button onClick={handleTheme}></button>
      
    </div>
  );
}

export default App;
