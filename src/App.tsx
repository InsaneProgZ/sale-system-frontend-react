import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function Button() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
}

function Header(){
  return(
    <div>
      
    </div>
  )
}

function App() {

  return <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <Button />
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>

}

export default App
