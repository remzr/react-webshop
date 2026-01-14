function Cartitem({ item, cartContent, setCartContent }) {

    function deleteFromCart() {
        console.log(setCartContent);
        setCartContent(prev =>
            prev.filter(e => e.id !== item.id)
        );
    }

    return (
        <li className="flex m-4 items-center bg-zinc-800 rounded-lg">
        {cartContent.length > 0 && (
        <>  
            <img className="w-15 rounded-l-lg"src={item.image}></img>
            <span className="pl-8 font-default text-zinc-200 text-lg">{item.amount}</span>
            <span className="pl-8 font-default text-zinc-200 text-lg">{item.name}</span>
            <button onClick={deleteFromCart}>
                Delete
            </button>
        </>
        )}
        </li>
  )
}

export default Cartitem
