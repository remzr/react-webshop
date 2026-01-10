function Product({productImg = "src/assets/placeholder.png", productAlt = "", productName = "Item loading", productPrice = "Price on demand"}) {

    return (
       <div className="w-1/7 min-w-full mb-4 sm:min-w-52">
        <div>
            <img src={productImg} alt={productAlt}></img>
            <h2 className="text-2xl font-bold text-zinc-200">{productName}</h2>
            <p className=" text-lg text-zinc-200">{productPrice}</p>
        </div>
        <button className="bg-emerald-400 px-2 py-1 rounded-xs mt-2">Add to cart</button>
       </div>
  )
}

export default Product
