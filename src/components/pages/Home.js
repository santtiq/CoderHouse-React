import { NavLink } from "react-router-dom"
import transparent3 from "../img/logo_transparent7.png"
import transparent4 from "../img/logo_transparent8.png"

function Home({ isDark }) {

    return (
        <>
            <div className={isDark ? "background-home dark-mode-bckg dark-mode-text" : "background-home light-mode-bckg light-mode-text"}>
                <div className="home-container">
                    <div className="home-img-container">
                        <img src={isDark ? transparent3 : transparent4} alt="brandlogo" />
                    </div>
                    <NavLink to={`/shop`}><button className={isDark ? "dark-mode-elmnt dark-mode-text" : "light-mode-elmnt light-mode-blue-text"}>BIENVENIDO</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Home