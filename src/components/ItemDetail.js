import Contador from "./ItemCount"
function ItemDetail({ products }) {

    return (
        <>
            <section className="detail-container">
                <h1 className="detail-title"> {products.title}</h1>
                <div className="detail-card-container">
                    <div className="img-container">
                        <img src={products.thumbnail} alt="" />
                    </div>
                    <div className="detail-caract">
                        <p><strong>Nombre:</strong> {products.title}</p>
                        <p><strong>Fecha de lanzamiento:</strong> {products.release_date}</p>
                        <p><strong>Categoria:</strong> {products.genre}</p>
                        <Contador stock={10} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail