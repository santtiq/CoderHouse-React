import ItemCount from "./ItemCount"

function ItemDetail({ products }) {

    const onAdd = (e) => {
        const cantidadDeProductos = e
    }

    return (
        <>
            <section className="detail-container">
                <div className="detail-card-container">
                    <div className="img-container">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="detail-caract">
                        <p className="detail-category">{products.category}</p>
                        <h1>{products.title}</h1>
                        <p>US$ {products.price}</p>
                        <ItemCount stock={10} onAdd={onAdd} products={products} />
                    </div>
                </div>
                <div className="detail-description">
                    <p className="detail-description-title"><strong>Descripción</strong></p>
                    <p>{products.description}</p>
                </div>
            </section>
        </>
    )
}

export default ItemDetail