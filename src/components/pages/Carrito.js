import { useContext } from "react";
import { contexto } from "../CartContext";


const Carrito = () => {

    const { carrito, total, limpiarCarrito, borrarDelCarrito } = useContext(contexto);

    return (
        <>
            <div>Carrito</div>
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
            <div>TOTAL CARRITO: $ {total.toFixed(2)}</div>
            <button onClick={() => limpiarCarrito()}>BORRAR TODO EL CARRITO</button>
        </>
    )
}

export default Carrito;