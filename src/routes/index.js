import React from "react";

import * as urls from '../urls';
import BaseLayout from '../components/layouts/Base';
import AuthLayout from '../components/layouts/Auth';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Order = React.lazy(() => import('../pages/Orders'));
const OrderDetails = React.lazy(() => import('../pages/OrderDetails'));
const ProductDetails = React.lazy(() => import('../pages/ProductDetails'));


// Route configuration with unique name identifiers
const routes =  [
    {
        name: 'Home',
        component: Home,
        path: urls.home(),
        layout: BaseLayout,
        isProtected: false
    },
    {
        name: 'Login',
        component: Login,
        path: urls.login(),
        layout: AuthLayout,
        isProtected: false,
        redirectIfLoggedIn: true
    },
    {
        name: 'Orders',
        component: Order,
        path: urls.orders(),
        layout: BaseLayout,
        isProtected: true
    },
    {
        name: 'Orders Details',
        component: OrderDetails,
        path: urls.orderDetails(),
        layout: BaseLayout,
        isProtected: true
    },
    {
        name: 'Product Details',
        component: ProductDetails,
        path: urls.productDetails(),
        layout: BaseLayout,
        isProtected: false
    }
];

export default routes;