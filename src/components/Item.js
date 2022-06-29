import { Link } from "react-router-dom"


const Item = ({ producto, isDark }) => {
    const { productos, id } = producto;

    return (
        <Link to={`/item/${id}`}>
            <section className="card-container">
                {<div className="card-body">
                    <div className="imgContainer">
                        <img className="imgCard" src={productos.image} alt="" />
                    </div>
                    <div className={isDark ? "card-text dark-mode-elmnt dark-mode-text" : "card-text light-mode-elmnt light-mode-text"}>
                        <p className="tittle-card">{productos.title}</p>
                        <p className={isDark ? "price-card dark-mode-text" : "price-card light-mode-blue-text"}>US$ {productos.price}</p>
                    </div>
                </div>}

            </section>
        </Link>
    )

}

export default Item