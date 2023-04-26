import "./Product.css";

function Product(props) {
    const { title, description, price } = props;

    return (
        <div className="panel">
            <img src="https://picsum.photos/200" alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    )
}

export default Product;