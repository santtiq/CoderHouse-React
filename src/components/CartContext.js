import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = (props) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const borrarDelCarrito = (producto) => {
        setCarrito(carrito.filter(item => item.id !== producto.id))
        setTotal(total - producto.price * producto.cantidad)
    }

    const agregarAlCarrito = (producto, cantidad) => {
        if (isInCart(producto)) {
            const item = carrito.find(item => item.id === producto.id)
            item.cantidad += cantidad
            setTotal(total + (producto.price * cantidad))
            console.log("estoy en el carrito")
        } else {
            setCarrito([...carrito, { ...producto, cantidad }])
            setTotal(total + (producto.price * cantidad))
            console.log("no estoy en el carrito")
        }
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const isInCart = (producto) => {
        if (carrito.find(item => item.id === producto.id)) {
            return true
        } else {
            return false
        }
    }

    const contextValue = {
        total,
        carrito,
        borrarDelCarrito,
        agregarAlCarrito,
        limpiarCarrito
    }

    return (
        <Provider value={contextValue}>
            {props.children}
        </Provider>
    )
}

export default MiProvider