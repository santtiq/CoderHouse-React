import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

let producto = { id: 1, stock: 10, name: "Mate Imperial Marrón", img: "/img/imperial1.jpg", cat: "Mate", price: 4499 }

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => { res(producto) }, 2000)
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
                {loading ? <Spinner /> : <ItemDetail products={producto} />}
                {error ? <h2>Ocurrió un error intentando cargar la página</h2> : null}
            </main>

        </>
    );
}

export default ItemDetailContainer;