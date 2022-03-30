import { useContext } from "react";
import { contexto } from "../CartContext";

const CartWidget = () => {

    const { totalProductos } = useContext(contexto);

    return (
        <div className="cart-btn">
            <div className="nav-icon">
                <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="cart-items">{totalProductos}</div>
        </div>
    )
}

export default CartWidget;