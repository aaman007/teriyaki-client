export const login = () => {
    return '/login';
};

export const home = () => {
    return '/home';
};

export const productDetails = (productId = ':productId') => {
    return `/products/${productId}`;
};

export const orders = () => {
    return '/orders';
};

export const orderDetails = (orderId = ':orderId') => {
    return `/orders/${orderId}`;
};

export const cart = () => {
    return '/cart';
}