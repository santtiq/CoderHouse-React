import Contador from "./ItemCount"

const Item = (props) => {

    return (
        <section className="card-container">
            <div className="card-body">
                <div className="img">
                    <img src={props.img} />
                </div>
                <div className="card-text">
                    <h1>{props.name}</h1>
                    <p>Price: $ {props.price}</p>
                    <Contador stock={props.stock} />
                </div>
            </div>

        </section>

    )

}

export default Item