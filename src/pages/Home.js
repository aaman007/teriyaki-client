import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/actions/product";
import Container from "../components/ui/Container";
import ProductList from "../components/products/ProductList";
import Button from "../components/ui/Button";
import Loader from "../components/ui/Loader";

const Home = () => {
    const dispatch = useDispatch();
    const { items: products, next, loading } = useSelector(state => state?.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <Container>
            <ProductList products={products} />
            { next && <Button> Load More </Button> }
        </Container>
    );
};

export default Home;