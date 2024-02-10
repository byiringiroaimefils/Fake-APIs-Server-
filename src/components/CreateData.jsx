// This is All dependencies I am going to use in this page.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
//  This is function contain diferrernt function of Post new data in Db.json file 

function CreateData() {
  const [inputData, setinputData] = useState({
    name: '',
    email: ''
  })

  const Navigate = useNavigate()
  
  const HandlEvent = (event) => {
    event.preventDefault()
    axios.post("http://localhost:3030/Data", inputData)
      .then(() => {
        alert("Data Successful Added ")
        Navigate('/')
      })
  }


  return (
    <div>
      <form onSubmit={HandlEvent}>
        <label htmlFor="">Username</label> <br />
        <input type="text" onChange={e => setinputData({ ...inputData, name: e.target.value })}  required /> <br />
        <label htmlFor="">Email</label><br />
        <input type="email" onChange={e => setinputData({ ...inputData, email: e.target.value })} required /> <br />
        <button>Add</button>
      </form>
    </div>
  )
}

export default CreateData;