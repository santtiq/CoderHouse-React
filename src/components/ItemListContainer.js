import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

let productos = [
    { id: 1, stock: 10, name: "Mate Imperial Marrón", img: "../../public/img/imperial1.jpg", cat: "Mate", price: 4499 },
    { id: 2, stock: 7, name: "Mate Imperial Clásico", img: "../../public/img/imperial2.jpg", cat: "Mate", price: 5999 },
    { id: 3, stock: 3, name: "Mate Imperial Artesanal", img: "../../public/img/imperial3.jpg", cat: "Mate", price: 5599 },
    { id: 4, stock: 5, name: "Mate Imperial Blanco", img: "../../public/img/imperial4.jpg", cat: "Mate", price: 5599 }
]

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => { res(productos) }, 2000)
        })

        PromiseTest
            .then((res) => {
                setProducts(products);
            })
            .catch((rej) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [])


    return (
        <>
            <main className="item-container">
                {loading ? <Spinner /> : <ItemList products={productos} />}
                {error ? <h2>Ocurrió un error intentando cargar la página</h2> : null}
            </main>

        </>
    );
}

export default ItemListContainer;