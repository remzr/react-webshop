import { Link, NavLink } from "react-router";
import { GiAbstract005 } from "react-icons/gi";

function Header() {
    return(
        <header className="flex w-full justify-between px-8 py-4 bg-zinc-900">
                <div className="w-20 flex-none">
                    <Link className="p-2 flex justify-between items-center" to="/">
                        <GiAbstract005 size={50} className="flex-none rounded-sm text-white bg-emerald-500"/>
                        <a className="font-default text-2xl/6 pl-2 font-medium text-zinc-200 inline"><strong>Trazyn's</strong><br />Vault</a>
                    </Link>
                </div>
                <nav className="w-80">
                    <ul className="flex auto w-full h-full items-center justify-end gap-8">
                        <li className="w-full">
                            <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                `font-default text-lg text-zinc-200 transition
                                hover:font-medium hover:text-emerald-500
                                ${isActive ? "font-bold" : ""}
                                ${isPending ? "opacity-70" : ""}`
                            }>
                            Home
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/shop" 
                            className={({ isActive, isPending }) => 
                                `font-default text-lg text-zinc-200 transition
                                hover:font-medium hover:text-emerald-500
                                ${isActive ? "font-bold" : ""}
                                ${isPending ? "opacity-70" : ""}`
                            }>
                            Shop
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to="/cart" 
                            className={({ isActive, isPending }) => 
                                `font-default text-lg text-zinc-200 transition
                                hover:font-medium hover:text-emerald-500
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