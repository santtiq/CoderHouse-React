import { useContext } from "react";
import { contexto } from "../CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {

    const { totalProductos } = useContext(contexto);

    return (
        <div className="cart-btn">
            <div className="nav-icon">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            {totalProductos > 0 ? <div className="cart-items">{totalProductos}</div> : null}
        </div>
    )
}

export default CartWidget;