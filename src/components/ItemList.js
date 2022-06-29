import Item from "./Item";

const ItemList = ({ products, isDark }) => {
    return (
        <>
            {products.map((productos) => {
                return <Item key={productos.id} producto={productos} isDark={isDark} />
            })}
        </>
    )

}

export default ItemList