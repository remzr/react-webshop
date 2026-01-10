import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

//Hooks and variables
const inventoryData = [];

//Fetch shop data
fetch("https://api.open5e.com/monsters/")
  .then(res => res.json())
  .then(data => console.log(data));


const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop inventoryData={inventoryData}/>,
  },
  {
    path: "cart",
    element: <Cart />,
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
