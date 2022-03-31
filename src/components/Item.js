import { Link } from "react-router-dom"


const Item = ({ producto }) => {
    const { productos, id } = producto;

    return (
        <section className="card-container">
            {<div className="card-body">
                <div className="img">
                    <img src={productos.image} alt="" />
                </div>
                <div className="card-text">
                    <p className="tittle-card">{productos.title}</p>
                    <p>Precio: $ {productos.price}</p>
                    <button>
                        <Link to={`/item/${id}`}>Detalle</Link>
                    </button>
                </div>
            </div>}

        </section>

    )

}

export default Item