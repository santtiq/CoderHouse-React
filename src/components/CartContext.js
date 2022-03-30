import { createContext, useState } from "react"

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = (props) => {

    const [carrito, setCarrito] = useState([])
    const [totalPrecio, setTotalPrecio] = useState(0)
    const [totalProductos, setTotalProductos] = useState(0)

    const borrarDelCarrito = (producto) => {
        setCarrito(carrito.filter(item => item.id !== producto.id))
        setTotalPrecio(totalPrecio - producto.price * producto.cantidad)
        setTotalProductos(totalProductos - producto.cantidad)
    }

    const agregarAlCarrito = (producto, cantidad) => {
        if (isInCart(producto)) {
            const item = carrito.find(item => item.id === producto.id)
            item.cantidad += cantidad
            setTotalPrecio(totalPrecio + (producto.price * cantidad))
            setTotalProductos(totalProductos + cantidad)
            console.log("estoy en el carrito")
        } else {
            setCarrito([...carrito, { ...producto, cantidad }])
            setTotalPrecio(totalPrecio + (producto.price * cantidad))
            setTotalProductos(totalProductos + cantidad)
            console.log("no estoy en el carrito")
        }
    }

    const limpiarCarrito = () => {
        setCarrito([])
        setTotalPrecio(0)
        setTotalProductos(0)
    }

    const isInCart = (producto) => {
        if (carrito.find(item => item.id === producto.id)) {
            return true
        } else {
            return false
        }
    }

    const contextValue = {
        totalPrecio,
        totalProductos,
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