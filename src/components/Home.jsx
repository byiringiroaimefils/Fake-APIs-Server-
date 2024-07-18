import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


function Home() {
  const [data, setData] = useState({})
  const [Loading, setLoading] = useState(true)
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/Data")
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
                      <button onClick={(event) => handleDelete(d.id)}>Delete</button>
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
  function handleDelete(id) {
    const confirm = window.confirm("Do you want to Delete")
    if (confirm) {
      axios.delete("http://localhost:3000/Data/" + id)
        .then(() => {
          alert("Record Deleted")
          Navigate("/")
        })

    }
  }
}

export default Home;