import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom"
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const Carrito = () => {

    const { carrito, totalPrecio, limpiarCarrito, totalProductos } = useContext(contexto);

    const terminarCompra = () => {
        const orden = {
            buyer: {
                name: "Juan",
                phone: "123456789",
                email: "example@hotmail.com"
            },
            items: carrito,
            date: serverTimestamp(),
            total: totalPrecio

        }
        const ordenesCollection = collection(db, "ordenes")
        addDoc(ordenesCollection, orden)
        limpiarCarrito()
    }

    return (
        <>
            <div className="cart-container">
                <div className="cart-products-container">
                    {carrito.map(item => (<CartItem item={item} key={item.id} />))}
                </div>
                <div className="cart-total">
                    <CartCheckout />
                </div>
            </div>
        </>
    )
}

export default Carrito;