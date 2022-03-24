import NavBar from "./components/layout/NavBar"
import ItemListContainer from "./components/pages/ItemListContainer"
import ItemDetailContainer from "./components/pages/ItemDetailContainer"
import Carrito from "./components/pages/Carrito"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MiProvider from "./components/CartContext"

function App() {
    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/categoria/:id" element={<ItemListContainer />} />
                    <Route path="/accesorios/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Carrito />} />
                </Routes>
            </ BrowserRouter>
        </MiProvider>
    )
}

export default App