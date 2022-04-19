import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const CartItem = (props) => {
    const { borrarDelCarrito } = useContext(contexto);

    return (
        <div key={props.item.id} className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-img">
                    <Link to={`/item/${props.item.id}`}><img src={props.item.image} alt={props.item.title} /></Link>
                </div>
                <div className="cart-item-descr">
                    <Link to={`/item/${props.item.id}`}><h3>{props.item.title}</h3></Link>
                    <p>Cantidad: {props.item.cantidad}</p>
                    <p>Total: $ {(props.item.price * props.item.cantidad).toFixed(1)}</p>
                </div>
                <div className="cart-item-button">
                    <button onClick={() => borrarDelCarrito(props.item)}>BORRAR PRODUCTO</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
