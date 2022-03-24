import ItemCount from "./ItemCount"

function ItemDetail({ products }) {

    const onAdd = (e) => {
        const cantidadDeProductos = e
    }

    return (
        <>
            <section className="detail-container">
                <h1 className="detail-title"> {products.title}</h1>
                <div className="detail-card-container">
                    <div className="img-container">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="detail-caract">
                        <p><strong>Nombre:</strong> {products.title}</p>
                        <p><strong>Precio:</strong> {products.price}</p>
                        <p><strong>Categoria:</strong> {products.category}</p>
                        <ItemCount stock={10} onAdd={onAdd} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail