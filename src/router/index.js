import { createRouter, createWebHistory } from 'vue-router';
import Mainpage from '@/views/Mainpage.vue';
import Signinpage from '@/views/Signinpage.vue';
import OAuth2CallbackGoogle from '@/views/OAuth2CallbackGoogle.vue';
import TellYourStoryPage from '@/views/TellYourStoryPage.vue';
import Errorpage from '@/views/Errorpage.vue';

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
    {
        path: '/oauth2/callback/google',
        name: 'OAuth2CallbackGoogle',
        component: OAuth2CallbackGoogle,
    },
    {
        path: '/tell-your-story',
        name: 'TellYourStoryPage',
        component: TellYourStoryPage,
    },
    {
        path: '/error/:errorType',
        name: 'Errorpage',
        component: Errorpage,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Errorpage', params: { errorType: '404' } },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;