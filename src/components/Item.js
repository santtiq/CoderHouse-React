import { Link } from "react-router-dom"


const Item = ({ producto }) => {
    return (
        <section className="card-container">
            {<div className="card-body">
                <div className="img">
                    <img src={producto.image} alt="" />
                </div>
                <div className="card-text">
                    <p className="tittle-card">{producto.title}</p>
                    <p>Precio: $ {producto.price}</p>
                    <button>
                        <Link to={`/item/${producto.id}`}>Detalle</Link>
                    </button>
                </div>
            </div>}

        </section>

    )

}

export default Item