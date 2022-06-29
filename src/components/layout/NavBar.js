import Widget from "../widgets/CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom"

function Header({ handleDarkMode, isDark }) {

    return (
        <header className={isDark ? "nav-container dark-mode-elmnt dark-mode-text" : "nav-container light-mode-elmnt light-mode-text"}>
            <NavLink to="/shop" className={isDark ? "dark-mode-text" : "light-mode-blue-text"}><h3>SHIRTY</h3></NavLink>
            <nav className={isDark ? "links-container dark-mode-elmnt dark-mode-text" : "links-container light-mode-elmnt light-mode-blue-text"}>
                <ul>
                    <li>
                        <p>Ropa</p>
                        <ul className={isDark ? "list-option dark-mode-text" : "list-option light-mode-blue-text"}>
                            <li className={isDark ? "dark-mode-elmnt" : "light-mode-elmnt"}><NavLink to="categoria/men's clothing" className={isDark ? "list-option dark-mode-text" : "list-option light-mode-blue-text"}>Hombre</NavLink></li>
                            <li className={isDark ? "dark-mode-elmnt" : "light-mode-elmnt"}><NavLink to="categoria/women's clothing" className={isDark ? "list-option dark-mode-text" : "list-option light-mode-blue-text"}>Mujer</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <NavLink to="accesorios/jewelery" className={isDark ? "nav-link dark-mode-text" : "nav-link light-mode-blue-text"}>Joyeria</NavLink>
                <NavLink to="accesorios/electronics" className={isDark ? "nav-link dark-mode-text" : "nav-link light-mode-blue-text"}>Electrónica</NavLink>

                <NavLink to="cart" className={isDark ? "dark-mode-text" : "light-mode-blue-text"}><Widget /></NavLink>
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} onClick={() => handleDarkMode()} />
            </nav>
        </header>
    )
}

export default Header;