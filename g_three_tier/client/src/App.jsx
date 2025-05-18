import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddUser from './AddUser'
import EditUser from './EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/update/:id' element={<EditUser />} />
      </Routes>

    </>
  )
}

export default App
