
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


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
    })


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
                <label htmlFor="">Usernames</label> <br />
                <input type="text" value={inputData.name} onChange={e => setinputData({ ...inputData, name: e.target.value })} /> <br />
                <label htmlFor="">Email</label><br />
                <input type="email" value={inputData.email} onChange={e => setinputData({ ...inputData, email: e.target.value })} /> <br />
                <button>Adds</button>
            </form>
        </div>
    )
}

export default UpDate;