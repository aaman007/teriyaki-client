import React from "react";

import * as urls from '../urls';
import BaseLayout from '../components/layouts/Base';
import AuthLayout from '../components/layouts/Auth';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Order = React.lazy(() => import('../pages/Orders'));
const OrderDetails = React.lazy(() => import('../pages/OrderDetails'));
const ProductDetails = React.lazy(() => import('../pages/ProductDetails'));
const Cart = React.lazy(() => import('../pages/Cart'));


// Route configuration with unique name identifiers
const routes =  [
    {
        name: 'Home',
        component: Home,
        path: urls.home(),
        layout: BaseLayout
    },
    {
        name: 'Login',
        component: Login,
        path: urls.login(),
        layout: AuthLayout,
        redirectIfLoggedIn: false
    },
    {
        name: 'Orders',
        component: Order,
        path: urls.orders(),
        layout: BaseLayout,
        isProtected: false
    },
    {
        name: 'OrderDetails',
        component: OrderDetails,
        path: urls.orderDetails(),
        layout: BaseLayout,
        isProtected: false
    },
    {
        name: 'ProductDetails',
        component: ProductDetails,
        path: urls.productDetails(),
        layout: BaseLayout
    },
    {
        name: 'Cart',
        component: Cart,
        path: urls.cart(),
        layout: BaseLayout
    }
];

export default routes;