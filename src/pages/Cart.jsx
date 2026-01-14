import Button from "../components/Button"
import Cartitem from "../components/Cartitem";
import Header from "../components/Header"

function Cart({cartContent, setCartContent}) {

  const totalPrice = cartContent.reduce(
        (sum, item) => sum + (item.id * item.amount),
        0
    );

  //Empty cart output
  const emptyCart = <li className="text-zinc-200 text-lg">No items in cart</li>;

  const cartList = cartContent.map(item =>
    <Cartitem key={item.id} item={item} cartContent={cartContent} setCartContent={setCartContent} />
  )

  return (
    <>
    <Header cartContent={cartContent} />
    <main className="p-25 bg-black min-h-dvh">
      <div className="flex w-full">
        
        <div className="w-2/3">
          <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
            Cart
          </h1>
          <ul className="pr-16">
            {(cartContent.length != 0) ? cartList : emptyCart}
          </ul>
        </div>

        <aside>
          <h2 className="pb-8 font-default text-zinc-200 text-3xl font-bold">
            Checkout information
          </h2>
          <p className="font-default text-zinc-200 text-xl">
            Total price:
          </p>
          <p className="pb-12 font-default text-zinc-200 text-3xl font-bold">
            CHF {totalPrice}
          </p>
          <Button callToAction="Go to checkout"/>
        </aside>

      </div>
    </main>
    </>
  )
}

export default Cart
