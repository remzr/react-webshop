import Header from "../components/Header"
import Product from "../components/Product"

function Shop() {

  return (
    <>
    <Header />
    <main>
        <h1 className="p-8 text-3x1 font-bold underline">
            Shop
        </h1>
        <div className="w-full p-8 flex gap-4 flex-wrap">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
    </main>
    </>
  )
}

export default Shop
