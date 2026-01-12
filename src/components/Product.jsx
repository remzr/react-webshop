import { useState } from "react";

function Product({
    setCartContent,    
    product,
    productImg = "src/assets/placeholder.png", 
    productAlt = "", 
    productName = "Item loading", 
    productPrice = "Price on demand"
}) {

    const [cartAmount, setCartAmount] = useState(1);    

    //Make first letter of item name upercase
    const itemName = productName.charAt(0).toUpperCase() + productName.slice(1);

    //Push product to cart
    function pushToCart() {
        setCartContent(prev => {
            //Check if item id is aleady in cartContent
            const existing = prev.find(item => item.id === product.id);

            //If id exists, return a new array with new item
            if(existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? {
                            ...item,
                            amount: item.amount + cartAmount
                        }
                    : item
                );
            }

            return [
                ...prev,
                {
                    ...product,
                    amount: cartAmount,
                }
            ];
        });    
    }

    return (
       <div className="w-1/7 min-w-full rounded-lg mb-4 bg-zinc-900">
        <div>
            <div className="w-full rounded-t-lg overflow-hidden">
                <img 
                    className="w-full object-cover" 
                    src={productImg} 
                    alt={productAlt}>
                </img>
            </div>
            <h2 className="text-2xl pl-2 pt-2 font-bold text-zinc-200">
                {itemName}
            </h2>
            <p className=" text-lg pl-2 text-zinc-200">
                CHF {productPrice}
            </p>
        </div>
        <div className="flex items-stretch p-2 w-full mt-2">
            <button 
                className="w-2/3 h-10 bg-emerald-400 px-2 py-1 rounded-l-md cursor-pointer"
                onClick={pushToCart}
                >
                Add to cart
            </button>
            <input 
                className="w-1/3 h-10 bg-zinc-800 border-solid border-emerald-400 border-2 rounded-r-md text-center text-zinc-200"
                onChange={e => setCartAmount(Number(e.target.value))}
                type="number"
                value={cartAmount}
                name="cartAmount"
                id="cartAmount"/>         
        </div>
       </div>
  )
}

export default Product
