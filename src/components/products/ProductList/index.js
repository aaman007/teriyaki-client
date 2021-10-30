import classes from './ProductList.module.css';
import ProductItem from "../ProductItem";

const ProductList = ({ products }) => {
    return (
        <div className={classes.productList}>
            {products.map(product => (
                <ProductItem product={product} key={product.sku} />
            ))}
        </div>
    )
};

ProductList.defaultProps = {
    products: []
};

export default ProductList;