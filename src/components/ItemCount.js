import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext";

function ItemCount(props) {
    const { agregarAlCarrito } = useContext(contexto);

    const [contador, setContador] = useState(1);

    const plus = () => {
        if (contador < props.stock) {
            setContador(contador + 1)
        }
    }

    const minus = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const [agregado, setAgregado] = useState(true)

    const confirm = () => {
        props.onAdd(contador);
        setAgregado(false);
    }


    return (
        <>
            <div className="card-stock">
                <p><strong>Cantidad:</strong></p>
                <i className="fa-solid fa-plus" onClick={plus}></i>
                <p>{contador}</p>
                <i className="fa-solid fa-minus" onClick={minus}></i>
            </div>
            <div className="button">
                {agregado ? <button disabled={contador === 0} onClick={confirm}>Confirmar selección</button>
                    : <button className="link-button" onClick={() => agregarAlCarrito(props.products, contador)}><Link to="/cart">Terminar mi compra</Link></button>}
            </div>
        </>
    )
}

export default ItemCount;