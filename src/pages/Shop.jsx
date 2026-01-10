import Header from "../components/Header"
import Product from "../components/Product"

function Shop({inventoryData}) {

  return (
    <>
    <Header />
    <main className="p-8 bg-black">
        <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
            Shop
        </h1>
        <div className="w-full flex gap-4 flex-wrap">
          {inventoryData.length > 0 && (
            <Product     
              productName={inventoryData[0].name}
              productPrice ="Price on demand" />
          )}
        </div>
    </main>
    </>
  )
}

export default Shop