import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Spinner from "../widgets/Spinner";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    const pedido = fetch("/api/games?platform=all&sort-by=release-date")
    useEffect(() => {

        if (id) {
            pedido
                .then((RtaApi) => {
                    return RtaApi.json()
                }).then((juegos) => {
                    juegos.filter(p => {
                        if (p.genre == id) {
                            setProductos(juegos.filter(p => p.genre == id))
                        } else if (p.platform == id) {
                            setProductos(juegos.filter(p => p.platform == id))
                        }
                    })
                }).catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            pedido
                .then((RtaApi) => {
                    return RtaApi.json()
                }).then((juegos) => {
                    setProductos(juegos)
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [id])

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