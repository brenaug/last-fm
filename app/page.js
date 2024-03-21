'use client'

import styles from "./page.module.css";
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState("")
  const [data, setData] = useState("")

  const handleUsername = async () => {
    console.log(username)
    const response = await fetch('/api/getUserInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username})
    })
    const responseData = await response.json()
    setData(responseData)
  }
  if(data != ""){
    console.log(data)
  }

  return (
    <main className={styles.main}>
      
      <input 
        placeholder="Insira o username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    
      <button onClick={handleUsername}>Fazer o role</button>

    </main>
  );
}
