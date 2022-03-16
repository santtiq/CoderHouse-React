import NavBar from "./components/layout/NavBar"
import ItemListContainer from "./components/pages/ItemListContainer"
import ItemDetailContainer from "./components/pages/ItemDetailContainer"
import Carrito from "./components/pages/Carrito"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="catalogo" element={<ItemListContainer />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/plataforma/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Carrito />} />
            </Routes>
        </ BrowserRouter>
    )
}

export default App