import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 class="text-3x1 font-bold underline">
        Webshop
      </h1>
      <p class="text-3x1">
        This is some text
      </p>
    </>
  )
}

export default App
