function Header() {
    return(
        <header>
                <div>
                    <a href="">Icon</a>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header;