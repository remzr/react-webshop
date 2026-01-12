import Header from "../components/Header"
import Product from "../components/Product"

function Shop({inventoryData, cartContent, setCartContent}) {

  //Create productcards from inventoryData
  const cardsList = inventoryData.map(item =>

    <li key={item.id}>
      {inventoryData.length > 0 && (

        <Product
          setCartContent={setCartContent}
          product={item}     
          productName={item.name}
          productPrice ={item.id}
          productImg={item.image}
          productAlt={item.name}
        />
      )}
    </li>
  )

  return (
    <>
    <Header cartContent={cartContent} />
    <main className="p-8 md:p-25 bg-black min-h-dvh">
        <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
            Shop
        </h1>
        <ul className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardsList}
        </ul>
    </main>
    </>
  )
}

export default Shop