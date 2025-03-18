import {useState} from "react"
export default function Form() {

const [fname,setFname]=useState("")
const [lname,setLname]=useState("")
  
  function handleFirstNameChange(fnameValue) {
    setFname(fnameValue)
   
  }

  function handleLastNameChange(lnameValue) {
   setLname(lnameValue)
  }

  function handleReset() {
    setFname("");
    setLname("");
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={fname}
        onChange={(e)=>handleFirstNameChange(e.target.value)}
      />
      <input
        placeholder="Last name"
        value={lname}
        onChange={(e)=>handleLastNameChange(e.target.value)}
      />
      <h1>Hi, {fname} {lname}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}