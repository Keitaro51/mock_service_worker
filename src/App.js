import './App.css'
import {useEffect, useState} from 'react'
import axios from 'axios'

const fetchUser = async () => {
  const res = await axios.get('http://localhost:8000/api/user')
  const data = await res.data
  return data
}

function App() {
  const [user, setUser] = useState('')
  useEffect(() => {
    fetchUser().then((data) => {
      setUser(data.firstName)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{user}</p>
      </header>
    </div>
  )
}

export default App
