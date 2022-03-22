import Widget from "../widgets/CartWidget";
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="nav-container">
            <NavLink to="/"><h1>Brand</h1></NavLink>
            <nav className="links-container">
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link">Ropa</NavLink>
                        <ul>
                            <li><NavLink to="categoria/men's clothing">Hombre</NavLink></li>
                            <li><NavLink to="categoria/women's clothing">Mujer</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <NavLink to="accesorios/jewelery" className="nav-link">Joyeria</NavLink>
                <NavLink to="accesorios/electronics" className="nav-link">Electrónica</NavLink>

                <NavLink to="cart"><Widget /></NavLink>

            </nav>
        </header>
    )
}

export default Header;