import CartContainer from "../CartContainer"
import { contexto } from "../CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Cart = ({ isDark }) => {
    const { carrito } = useContext(contexto)

    return (
        <>
            <div className={isDark ? "cartBackground dark-mode-bckg dark-mode-text" : "cartBackground light-mode-bckg light-mode-text"}>
                {carrito.length > 0
                    ? <CartContainer isDark={isDark} />
                    : <div className="backStore">
                        <div className="empty-cart">No hay productos en el carrito</div>
                        <div className="b-back-store">
                            <Link to="/shop"><button>VOLVER A LA TIENDA</button></Link>
                        </div>
                    </div>}
            </div>
        </>
    )



}

export default Cart;