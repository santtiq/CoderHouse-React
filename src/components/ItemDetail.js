
function ItemDetail(props) {

    return (
        <>
            <section className="detail-container">
                <h1 className="tittle" >Detail Container</h1>
                <div className="detail-card-container">
                    <div className="img-container">
                        <img src={props.products.img} />
                    </div>
                    <div className="detail-caract">
                        <p><strong>Nombre:</strong> {props.products.name}</p>
                        <p><strong>Precio:</strong> $ {props.products.price}</p>
                        <p><strong>Categoria:</strong> {props.products.cat}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail