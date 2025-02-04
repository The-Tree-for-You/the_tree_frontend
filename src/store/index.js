import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import loginstore from './modules/loginStore';

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
        loginstore,
    },
    plugins: [
        createPersistedState({
            paths: ['loginStore'],
        }),
    ]
});
