import Widget from "../widgets/CartWidget";
import brandLogo from "../img/logo_transparent-small.png";
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="nav-container">
            <NavLink to="/"><img src={brandLogo} className="brandLogo" /></NavLink>
            <nav className="links-container">
                <ul>
                    <li>
                        <p>Ropa</p>
                        <ul className="list-option">
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