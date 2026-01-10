import Header from "../components/Header"
import Product from "../components/Product"

function Shop({inventoryData, cartContent, setCartContent}) {

  return (
    <>
    <Header cartContent={cartContent} />
    <main className="p-25 bg-black min-h-dvh">
        <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
            Shop
        </h1>
        <div className="w-full flex gap-4 flex-wrap">
          {inventoryData.length > 0 && (

            <Product
              cartContent={cartContent}
              setCartContent={setCartContent}
              product={inventoryData[0]}     
              productName={inventoryData[0].name}
              productPrice ={inventoryData[0].id}
              productImg={inventoryData[0].image}
              productAlt={inventoryData[0].name}
            />
          )}
        </div>
    </main>
    </>
  )
}

export default Shop