import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = (props) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    const borrarDelCarrito = (id) => { }

    const agregarAlCarrito = (producto, cantidad) => {
        if (isInCart()) {
            const item = carrito.find(item => item.id === producto.id)
            item.cantidad += cantidad
            setTotal(total + (producto.price * cantidad))
        } else {
            setCarrito([...carrito, { ...producto, cantidad }])
            setTotal(total + (producto.price * cantidad))
        }
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const isInCart = (id) => {
        if (carrito.find(item => item.id === id)) {
            return true
        } else {
            return false
        }
    }

    const contextValue = {
        total: total,
        carrito: carrito,
        borrarDelCarrito: borrarDelCarrito,
        agregarAlCarrito: agregarAlCarrito,
        limpiarCarrito: limpiarCarrito
    }

    return (
        <Provider value={contextValue}>
            {props.children}
        </Provider>
    )
}

export default MiProvider