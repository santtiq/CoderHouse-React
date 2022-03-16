import Widget from "../widgets/CartWidget";
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <header className="nav-container">
            <NavLink to="/"><h1>Brand</h1></NavLink>
            <nav className="links-container">
                <NavLink to="catalogo" className="nav-link">Catálogo</NavLink>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link">Categoría</NavLink>
                        <ul>
                            <li><NavLink to="categoria/MMORPG">MMORPG</NavLink></li>
                            <li><NavLink to="categoria/MOBA">MOBA</NavLink></li>
                            <li><NavLink to="categoria/ARPG">ARPG</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="/" className="nav-link">Plataforma</NavLink>
                        <ul>
                            <li><NavLink to="plataforma/PC (Windows)">PC</NavLink></li>
                            <li><NavLink to="plataforma/Web Browser">WEB</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <NavLink to="carrito"><Widget /></NavLink>

            </nav>
        </header>
    )
}

export default Header;