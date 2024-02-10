// This is All dependencies I am going to use in this page.
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

// This is function that contains all data like to fetch data from db.json and Display them with
//Api 

function Home() {

  const [data, setData] = useState({})
  const [Loading, setLoading] = useState(true)

  const Navigate = useNavigate();
  // We are going to Hooks this Data with APIs
  useEffect(() => {
    axios.get("http://localhost:3030/Data")
      .then(res => {
        setData(res.data);
        setLoading(false);
      })

      .catch(err => {
        console.log('Err', err)
        setLoading(false)
      })


  }, [])

  return (
    <div>
      {
        Loading ? (
          <p>Loading....</p>
        ) : (
          <div>
            <Link to="/CreateData">Add+</Link>
            <table>
              <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>
                     <button> <Link to={`/UpDate/${d.id}`}>Edit</Link></button>
                      <button onClick={ e => handleDelete(d.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  )
  // This function is go used to Delete records according to its id fo data and also by using Delete method

  function handleDelete(id) {
    const confirm = window.confirm("Do you want to Delete")
    if (confirm) {
      axios.delete("http://localhost:3030/Data/" +id)
        .then(() => {
          alert("Record Deleted")
          Navigate("/")
        })

    }
  }
}

export default Home;