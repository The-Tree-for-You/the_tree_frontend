import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import loginStore from './modules/loginStore';

export default createStore({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        login: loginStore,
    },
    plugins: [
        createPersistedState({
            paths: ['login.isSignin', 'login.access_token', 'login.refresh_token', 'login.user_info'],
        }),
    ]
});
