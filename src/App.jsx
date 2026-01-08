import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
    /*children: [
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],*/
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
