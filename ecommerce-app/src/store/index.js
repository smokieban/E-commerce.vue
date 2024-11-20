import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        products: [],
        cart: [],
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        ADD_TO_CART(state, product) {
            state.cart.push(product);
        },
        REMOVE_FROM_CART(state, productId) {
            state.cart = state.cart.filter(item => item.id !== productId);
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            const response = await axios.get('https://api.example.com/products');
            commit('SET_PRODUCTS', response.data);
        },
        addToCart({ commit }, product) {
            commit('ADD_TO_CART', product);
        },
    },
});

export default store;
