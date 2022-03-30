import { useContext } from "react";
import { contexto } from "../CartContext";
import { Link } from "react-router-dom"


const Carrito = () => {

    const { carrito, totalPrecio, limpiarCarrito, borrarDelCarrito, totalProductos } = useContext(contexto);



    return (
        <>
            {carrito.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Precio: $ {item.price}</p>
                    <p>Descripcion: {item.description}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Total: $ {item.price * item.cantidad}</p>
                    <button onClick={() => borrarDelCarrito(item)}>borrar</button>
                </div>
            ))}
            {
                totalProductos > 0 ? <div>TOTAL CARRITO: $ {totalPrecio.toFixed(2)}</div> : <div>No hay productos en el carrito</div>
            }
            {
                totalProductos > 0 ? <button onClick={() => limpiarCarrito()}>BORRAR TODO EL CARRITO</button> : <Link to="/">Volver a la tienda</Link>
            }
        </>
    )
}

export default Carrito;