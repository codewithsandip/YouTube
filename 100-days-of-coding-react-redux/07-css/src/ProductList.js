import Product from "./Product";

import "./ProductList.css";

function ProductList() {
    return <div className="container">
        <Product title="Product One"
            description="Product One Desc"
            price="20" />
        <Product title="Product Two"
            description="Product Two Desc"
            price="200" />
        <Product title="Product Three"
            description="Product Three Desc"
            price="99" />
    </div>
}

export default ProductList;