function Product({productImg = "src/assets/placeholder.png", productAlt = "", productName = "Item loading", productPrice = "Price on demand"}) {

    return (
       <div className="w-1/7">
        <div>
            <img src={productImg} alt={productAlt}></img>
            <h2>{productName}</h2>
            <p>{productPrice}</p>
        </div>
        <button>Add to cart</button>
       </div>
  )
}

export default Product
