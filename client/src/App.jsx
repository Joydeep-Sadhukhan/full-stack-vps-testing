
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
    .catch((err) => {
      console.error("Error fetching message", err);
      
    })
  }, [])
  

  return (
    <>
      <section id="center">
        
        <h1>Welcome to Chaicode frontend</h1>
        <h2>Data {message} </h2>
        
      </section>
      
    </>
  )
}

export default App
