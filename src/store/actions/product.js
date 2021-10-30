import { BASE_URL } from "../../constants";
import { productActions } from "../slices/product";
import { uiActions } from "../slices/ui";

export const fetchProducts = () => async dispatch => {
    const sendRequest = async () => {
        const response = await fetch(`${BASE_URL}/product/v1/products/`);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();
        dispatch(productActions.fetchProducts(data));
    }

    try {
        dispatch(productActions.setLoading({}));
        await sendRequest();
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            status: 'failed',
            title: 'Couldn\'t load products!',
            description: error.message
        }));
    }
    finally {
        dispatch(productActions.clearLoading({}));
    }
};

export const fetchProduct = productId => dispatch => {
    // fetch()
};