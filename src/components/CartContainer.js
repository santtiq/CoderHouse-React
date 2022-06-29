import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import { useContext } from "react";
import { contexto } from "./CartContext";


const Carrito = ({ isDark }) => {

    const { carrito } = useContext(contexto);


    return (
        <>
            <div className={isDark ? "cart-container dark-mode-text" : "cart-container light-mode-text"}>
                <div className="cart-products-container">
                    {carrito.map(item => (<CartItem item={item} key={item.id} isDark={isDark} />))}
                </div>
                <div className="cart-total">
                    <CartCheckout />
                </div>
            </div>
        </>
    )
}

export default Carrito;