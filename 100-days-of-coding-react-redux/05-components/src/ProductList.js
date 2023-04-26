import Product from "./Product";

function ProductList() {
    return <div style={{
        display: "flex",
        gap: "20px"
    }}>
        <Product />
        <Product />
        <Product />
    </div>
}

export default ProductList;