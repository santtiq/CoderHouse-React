import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Spinner from "../widgets/Spinner";

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const { id } = useParams();


    useEffect(() => {

        const pedido = fetch(`https://fakestoreapi.com/products/${id}`)

        pedido
            .then((resultado) => {
                return resultado.json()
            })
            .then((producto) => {
                setProducts(producto)
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [])


    return (
        <>
            <main className="item-container">
                {loading ? <Spinner /> : <ItemDetail products={products} />}
                {error ? <h2>Ocurrió un error intentando cargar la página</h2> : null}
            </main>

        </>
    );
}

export default ItemDetailContainer;