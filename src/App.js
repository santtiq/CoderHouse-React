import NavBar from "./components/layout/NavBar"
import ItemListContainer from "./components/pages/ItemListContainer"
import ItemDetailContainer from "./components/pages/ItemDetailContainer"
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/pages/Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MiProvider from "./components/CartContext"
import Home from "./components/pages/Home"

function App() {

    const [isDark, setIsDark] = useState(false)

    const handleDarkMode = () => {
        setIsDark(!isDark)
    }

    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar handleDarkMode={handleDarkMode} isDark={isDark} />
                <Routes>
                    <Route path="/" element={<Home isDark={isDark} />}></Route>
                    <Route path="/shop" element={<ItemListContainer isDark={isDark} />} />
                    <Route path="/categoria/:id" element={<ItemListContainer />} />
                    <Route path="/accesorios/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer isDark={isDark} />} />
                    <Route path="/cart" element={<Cart isDark={isDark} />} />
                </Routes>
                <ToastContainer />
            </ BrowserRouter>
        </MiProvider>
    )
}

export default App