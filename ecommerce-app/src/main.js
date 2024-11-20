import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//import css files in local directory
import '@/assets/css/bootstrap.css';
import '@/assets/css/bootstrap-grid.css';
import '@/assets/css/bootstrap-reboot.css';
import '@/assets/bootstrap/bootstrap-icons-1.11.3/font/bootstrap-icons.css';
import '@/assets/css/global.css';
import '@/assets/lib/owlcarousel/assets/owl.carousel.css';
import '@/assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '@/assets/lib/owlcarousel/assets/owl.theme.default.css';
import '@/assets/lib/owlcarousel/assets/owl.theme.default.min.css';
import '@/assets/lib/owlcarousel/assets/owl.theme.green.css';
import '@/assets/lib/owlcarousel/assets/owl.theme.green.min.css';
import '@/assets/lib/animate/animate.min.css';

// import js files in local directory
import '@/assets/js/main.js';
import '@/assets/lib/easing/easing.js';
import '@/assets/bootstrap/bootstrap.js';
import '@/assets/bootstrap/bootstrap.bundle.js';
import '@/assets/bootstrap/bootstrap.esm.js';
// import '@/assets/lib/owlcarousel/owl.carousel.js';
// import $ from 'jquery'; // Import jQuery
// window.$ = $;           // Make jQuery globally accessible

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');

/*
import { createApp } from 'vue'
import './global.css'
import App from './App.vue'

createApp(App).mount('#app')
*/
