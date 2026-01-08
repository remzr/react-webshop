import { Link } from "react-router";

function Header() {
    return(
        <header className="flex w-full justify-between px-8 py-4 bg-zinc-200">
                <div className="w-15 flex-none">
                    <Link to="/">Icon</Link>
                </div>
                <nav className="w-85">
                    <ul className="flex auto w-full justify-end gap-8">
                        <li className="w-full"><Link to="/" className="font-default text-lg hover:font-medium">Home</Link></li>
                        <li className="w-full"><Link to="/shop" className="font-default text-lg hover:font-medium">Shop</Link></li>
                        <li className="w-full"><Link to="/cart" className="font-default text-lg hover:font-medium">Cart</Link></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;