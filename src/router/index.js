import { createRouter, createWebHistory } from 'vue-router';
import Mainpage from '@/views/Mainpage.vue';
import Signinpage from '@/views/Signinpage.vue';

const routes = [
    {
        path: '/',
        name: 'Mainpage',
        component: Mainpage,
    },
    {
        path: '/signin',
        name: 'Signinpage',
        component: Signinpage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;