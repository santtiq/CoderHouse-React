import Widget from "./CartWidget";

function Header() {
    return (
        <header className="nav-container">
            <h1>Brand</h1>
            <nav className="links-container">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">Shop</a>
                <a href="#" className="nav-link">About</a>
                <Widget />
            </nav>
        </header>
    )
}

export default Header;