import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Shop from './pages/Shop'

function App() {

  //Hooks and variables
  const [inventoryData, setInventoryData] = useState([]);
  const [cartContent, setCartContent] = useState([]);

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
    element: <Home 
      cartContent={cartContent}/>,
  },
  {
    path: "shop",
    element: <Shop 
      inventoryData={inventoryData}
      cartContent={cartContent}/>,
  },
  {
    path: "cart",
    element: <Cart 
    cartContent={cartContent}/>,
  }
])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
