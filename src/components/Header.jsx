import { Link, NavLink } from "react-router";
import { GiAbstract005 } from "react-icons/gi";

function Header() {
    return(
        <header className="flex w-full justify-between px-8 py-4 bg-zinc-200">
                <div className="w-20 flex-none">
                    <Link className="flex justify-between items-center" to="/">
                        <GiAbstract005 size={40} className="flex-none text-green-500"/>
                        <a className="font-default text-3xl pl-2 pt-1 font-medium inline">Necrons</a>
                    </Link>
                </div>
                <nav className="w-80">
                    <ul className="flex auto w-full h-full items-center justify-end gap-8">
                        <li className="w-full">
                            <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                `font-default text-lg transition
                                hover:font-medium hover:text-green-500
                                ${isActive ? "font-bold" : ""}
                                ${isPending ? "opacity-70" : ""}`
                            }>
                            Home
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/shop" 
                            className={({ isActive, isPending }) => 
                                `font-default text-lg transition
                                hover:font-medium hover:text-green-500
                                ${isActive ? "font-bold" : ""}
                                ${isPending ? "opacity-70" : ""}`
                            }>
                            Shop
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/cart" 
                            className={({ isActive, isPending }) => 
                                `font-default text-lg transition
                                hover:font-medium hover:text-green-500
                                ${isActive ? "font-bold" : ""}
                                ${isPending ? "opacity-70" : ""}`
                            }>
                            Cart
                            </NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;