import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';
import ShopPage from '../views/home/ShopPage.vue';
// import ProductList from '@/views/ProductList.vue';
// import ProductDetail from '@/views/ProductDetail.vue';
// import Cart from '@/views/Cart.vue';
// import Checkout from '@/views/Checkout.vue';

const routes = [
    {
        path: '/HomePage.vue',
        name: 'home',
        component: HomePage
    },
    {
        path: '/ShopPage.vue',
        name: 'shop',
        component: ShopPage
    },
    // { path: '/products/:id', component: ProductDetail },
    // { path: '/cart', component: Cart },
    // { path: '/checkout', component: Checkout },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
