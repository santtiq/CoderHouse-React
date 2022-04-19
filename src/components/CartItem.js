import { useContext } from "react";
import { contexto } from "./CartContext";

const CartItem = (props) => {
    const { borrarDelCarrito } = useContext(contexto);

    return (
        <div key={props.item.id} className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-img">
                    <img src={props.item.image} alt={props.item.title} />
                </div>
                <div className="cart-item-descr">
                    <h3>{props.item.title}</h3>
                    <p>Cantidad: {props.item.cantidad}</p>
                    <p>Total: $ {(props.item.price * props.item.cantidad).toFixed(1)}</p>
                    <button onClick={() => borrarDelCarrito(props.item)}>BORRAR PRODUCTO</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
