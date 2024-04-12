// This is All dependencies I am going to use in this page.
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


//This is UpDate function that contain Hook and  function 
// In Hook contain Api that is going to fetch data according to its id them display them as value to each input
// This is function contain Api that   update   new records updated on to the ID 
function UpDate() {
    const [inputData, setinputData] = useState({
        name: '',
        email: ''
    })

    const Navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/Data/${id}`)
            .then(res => {
                setinputData(res.data)
            })
            .catch(err => {
                console.log("error", err)
            })
    }, [])


    const HandlEvent = (event) => {
        event.preventDefault()
        axios.put(`http://localhost:3000/Data/${id}`, inputData)
            .then(res => {
                alert("Data Successful Added", res)
                Navigate('/')
            })
    }




    return (

        <div>
            <form onSubmit={HandlEvent}>
                <label htmlFor="">Username</label> <br />
                <input type="text" value={inputData.name} onChange={e => setinputData({ ...inputData, name: e.target.value })} /> <br />
                <label htmlFor="">Email</label><br />
                <input type="email" value={inputData.email} onChange={e => setinputData({ ...inputData, email: e.target.value })} /> <br />
                <button>Add</button>
            </form>
        </div>
    )
}

export default UpDate;