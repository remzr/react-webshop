function Cartitem({ item, cartContent }) {

    return (
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
}

export default Cartitem
