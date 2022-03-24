import { useContext } from "react";
import { contexto } from "../CartContext";


const Carrito = () => {

    const resultado = useContext(contexto);
    const carrito = resultado.carrito

    const handleBorrar = () => {
        console.log("borrar")
    }

    return (
        <>
            <div>Carrito</div>
            {carrito.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.descripcion}</p>
                    <p>Total: $ {item.price * item.cantidad}</p>
                    <button onClick={handleBorrar}>borrar</button>
                </div>
            ))}
        </>
    )
}

export default Carrito;