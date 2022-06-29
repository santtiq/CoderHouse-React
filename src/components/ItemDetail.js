
import ItemCount from "./ItemCount"

function ItemDetail({ products, isDark }) {
    const onAdd = (e) => {
        return e
    }

    return (
        <>
            <div className={isDark ? "detail-container dark-mode-bckg dark-mode-text" : "detail-container light-mode-bckg light-mode-text"}>
                <div className="detail-card-container">
                    <div className="img-container">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="detail-caract">
                        <div className="detail-title-section">
                            <p className={isDark ? "detail-category dark-mode-text" : "detail-category light-mode-blue-text"}>{products.category}</p>
                            <h1>{products.title}</h1>
                        </div>
                        <p className={isDark ? "detail-price-section dark-mode-text" : "detail-price-section light-mode-blue-text"}>US$ {products.price}</p>
                        <ItemCount stock={products.stock} onAdd={onAdd} products={products} />
                    </div>
                </div>
                <div className="detail-description">
                    <p className="detail-description-title"><strong>Descripción</strong></p>
                    <p>{products.description}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail