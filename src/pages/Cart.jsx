import Button from "../components/Button"
import Header from "../components/Header"

function Cart({cartContent}) {

  const cartList = cartContent.map(item =>

    <li key={item.id} className="flex m-4 items-center bg-zinc-800 rounded-lg">
      {cartContent.length > 0 && (
      <>  
        <img className="w-15 rounded-l-lg"src={item.image}></img>
        <span className="pl-8 font-default text-zinc-200 text-lg">{item.amount}</span>
        <span className="pl-8 font-default text-zinc-200 text-lg">{item.name}</span>
      </>
      )}
    </li>
  )

  return (
    <>
    <Header cartContent={cartContent} />
    <main className="p-8 bg-black">
      <h1 className="pb-8 font-default text-zinc-200 text-6xl font-bold">
        Shoppingcart
      </h1>
      <div className="flex w-full">
        <ul className="w-2/3 pr-16">{cartList}</ul>
        <aside>
          <h2></h2>
          <Button callToAction="Go to checkout"/>
        </aside>
      </div>
    </main>
    </>
  )
}

export default Cart
