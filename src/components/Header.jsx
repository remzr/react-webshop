import { Link } from "react-router";
import { GiAbstract005 } from "react-icons/gi";

function Header() {
    return(
        <header className="flex w-full justify-between px-8 py-4 bg-zinc-200">
                <div className="w-20 flex-none">
                    <Link className="w-full flex" to="/">
                        <GiAbstract005 className="text-large color-green-200"/>
                        <a className="font-default text-lg font-medium inline">Necrons</a>
                    </Link>
                </div>
                <nav className="w-80">
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