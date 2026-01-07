import Header from "../components/Header"

function Cart() {

  return (
    <>
    <Header />
    <main>
      <h1 className="text-3x1 font-bold underline">
        Shoppingcart
      </h1>
      <p className="text-3x1">
        You have these items in your Cart
      </p>
      <button>Checkout</button>
    </main>
    </>
  )
}

export default Cart
