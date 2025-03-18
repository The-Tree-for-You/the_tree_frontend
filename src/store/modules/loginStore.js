import router from '@/router';
import axios from 'axios';

const loginStore = {
    // 로그인 상태 및 사용자 정보를 저장
    state: {
        isSignin: false,
        access_token: '',
        refresh_token: '',
        user_info: {
            'email': '',
            'name': '',
        },
    },

    // Vuex 모듈의 state에 접근하는 getter 함수
    getters: {
        getIsSignin(state) {
            return state.isSignin;
        },
        getUser(state) {
            return state.user_info;
        },
    },

    // Vuex 모듈의 state를 변경하는 함수
    mutations: {
        // 로그인
        signin(state, payload) {
            state.isSignin = true;
            state.access_token = payload.jwt_token;
            state.refresh_token = payload.refresh_token;
            state.user_info.email = payload.user.email;
            state.user_info.name = payload.user.name;
            router.replace({ name: 'Mainpage' });
        },
        // 로그아웃
        logout(state) {
            // 로그아웃 시 로컬 스토리지에 저장된 정보 삭제
            state.isSignin = false;
            state.access_token = '';
            state.refresh_token = '';
            state.user_info.email = '';
            state.user_info.name = '';
            localStorage.removeItem('vuex');
            window.location.reload();
        },
    },

    // 로그인, 로그아웃 등의 비동기 로직을 처리하는 함수
    actions: {
        // 로그인
        signin({ commit }, provider) {
            if (provider === undefined) {
                console.error('payload is undefined');
                return;
            }
            else if (provider === 'google') {
                const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
                const redirectURI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
                const responseType = 'code';
                const scope = 'profile email';
                const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=${responseType}&scope=${scope}`;
                window.location.replace(url);
            }
        },
        async signinCallback({ commit }, payload) {
            if (payload === undefined) {
                if (payload.code === undefined) console.error('code is undefined');
                if (payload.provider === undefined) console.error('provider is undefined');
                return;
            }
            else if (payload.provider === "google") {
                const url = import.meta.env.VITE_GOOGLE_OAUTH2_TOKEN_URL;
                const grantType = 'authorization_code';
                await axios.post(url, {
                    code: payload.code,
                    grant_type: grantType,
                })
                .then((response) => {
                    payload = response.data;
                    commit('signin', payload);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        },
        // 로그아웃
        logout({ commit }) {
            commit('logout');
        },
    },
}

export default loginStore;