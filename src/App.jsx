import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

function App() {

  //Hooks and variables
  const [inventoryData, setInventoryData] = useState([]);

  //Fetch shop data
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment")
      .then(res => res.json())
      .then(json => {
        setInventoryData(json.data);
    });
  }, []);

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

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
