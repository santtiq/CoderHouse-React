import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
            <main className="item-container">
                <h1> Bienvenido {props.greeting}</h1>
            </main>
            <ItemCount stock={10} />
        </>
    );
}

export default ItemListContainer;