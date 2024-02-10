import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
import CreateData from "./components/CreateData"
import UpDate from "./components/UpDate"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateData" element={<CreateData />} />
          <Route path="/UpDate/:id" element={<UpDate />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;