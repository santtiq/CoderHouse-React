import Item from "./Item";

const ItemList = (props) => {

    return (
        <>
            {props.products.map((productos) => {
                return <Item key={productos.id}
                    id={productos.id}
                    name={productos.name}
                    price={productos.price}
                    category={productos.cat}
                    stock={productos.stock}
                    img={productos.img} />
            })}
        </>
    )

}

export default ItemList