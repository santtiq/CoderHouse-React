import { useContext } from "react";
import { contexto } from "../CartContext";
import { Link } from "react-router-dom"
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const Carrito = () => {

    const { carrito, totalPrecio, limpiarCarrito, borrarDelCarrito, totalProductos } = useContext(contexto);

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
                    {carrito.map(item => (
                        <div key={item.id} className="cart-item-container">
                            <div className="cart-item">
                                <div className="cart-item-img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="cart-item-descr">
                                    <h3>{item.title}</h3>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <p>Total: $ {(item.price * item.cantidad).toFixed(1)}</p>
                                    <button onClick={() => borrarDelCarrito(item)}>BORRAR PRODUCTO</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    {
                        totalProductos > 0 ? <div>TOTAL CARRITO: $ {totalPrecio.toFixed(2)}</div> : <div className="empty-cart">No hay productos en el carrito</div>
                    }
                    {
                        totalProductos > 0 ? <button onClick={() => limpiarCarrito()}>BORRAR TODO EL CARRITO</button> : <div className="b-back-store"><Link to="/"><button>VOLVER A LA TIENDA</button></Link></div>
                    }
                    {
                        totalProductos > 0 ? <button onClick={terminarCompra}>Terminar Compra</button> : null
                    }
                </div>
            </div>
        </>
    )
}

export default Carrito;