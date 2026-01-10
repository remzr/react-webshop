import Button from "./Button"

function Product({productImg = "src/assets/placeholder.png", productAlt = "", productName = "Item loading", productPrice = "Price on demand"}) {

    return (
       <div>
        <div>
            <img src={productImg} alt={productAlt}></img>
            <h2>{productName}</h2>
            <p>{productPrice}</p>
        </div>
        <Button />
       </div>
  )
}

export default Product
