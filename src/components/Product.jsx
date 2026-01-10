import { useState } from "react";

function Product({
    productImg = "src/assets/placeholder.png", 
    productAlt = "", 
    productName = "Item loading", 
    productPrice = "Price on demand"
}) {

    const [cartAmount, setCartAmount] = useState(1);    

    return (
       <div className="w-1/7 min-w-full mb-4 sm:min-w-52">
        <div>
            <img src={productImg} alt={productAlt}></img>
            <h2 className="text-2xl font-bold text-zinc-200">
                {productName}
            </h2>
            <p className=" text-lg text-zinc-200">
                {productPrice}
            </p>
        </div>
        <div className="flex items-stretch w-full mt-2">
            <button 
                className="w-2/3 h-10 bg-emerald-400 px-2 py-1 rounded-xs"
                onClick=""
                >
                Add to cart
            </button>
            <input 
                className="w-1/3 h-10 bg-zinc-800 border-solid border-emerald-400 border-2 rounded-xs text-zinc-200 pl-4"
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
