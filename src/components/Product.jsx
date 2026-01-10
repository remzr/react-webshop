import { useState } from "react";

function Product({
    cartContent,
    setCartContent,    
    product,
    productImg = "src/assets/placeholder.png", 
    productAlt = "", 
    productName = "Item loading", 
    productPrice = "Price on demand"
}) {

    const [cartAmount, setCartAmount] = useState(1);    

    //Push product to cart
    function pushToCart() {

        //Add cart amount
        product.amount = product.amount + cartAmount;

        setCartContent({
            ...cartContent,
            product
        })
        console.log(`${product.name} has been added to cart ${product.amount} times.`);
    }

    return (
       <div className="w-1/7 min-w-full rounded-lg mb-4 bg-zinc-900 sm:min-w-52">
        <div>
            <img className="rounded-t-lg" src={productImg} alt={productAlt}></img>
            <h2 className="text-2xl pl-2 pt-2 font-bold text-zinc-200">
                {productName}
            </h2>
            <p className=" text-lg pl-2 text-zinc-200">
                {productPrice}
            </p>
        </div>
        <div className="flex items-stretch p-2 w-full mt-2">
            <button 
                className="w-2/3 h-10 bg-emerald-400 px-2 py-1 rounded-l-md"
                onClick={pushToCart}
                >
                Add to cart
            </button>
            <input 
                className="w-1/3 h-10 bg-zinc-800 border-solid border-emerald-400 border-2 rounded-r-md text-center text-zinc-200"
                onChange={e => setCartAmount(e.target.value)}
                type="number"
                value={cartAmount}
                name="cartAmount"
                id="cartAmount"/>         
        </div>
       </div>
  )
}

export default Product
