import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from '@/router';
import store from '@/store/index.js';
import Navbar from '@/components/common/Navbar.vue';
import Footer from '@/components/common/Footer.vue';

const app = createApp(App);
app.component('navbar-component', Navbar);
app.component('footer-component', Footer);
app.use(router);
app.use(store);
app.mount('#app');
