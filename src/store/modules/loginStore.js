import router from '@/router';
import axios from 'axios';

const loginStore = {
    // 로그인 상태 및 사용자 정보를 저장
    state: {
        isSignin: false,
    },

    // Vuex 모듈의 state에 접근하는 getter 함수
    getters: {
        getIsSignin(state) {
            return state.isSignin;
        },
    },

    // Vuex 모듈의 state를 변경하는 함수
    mutations: {
        // 로그인
        signin(state, payload) {
            state.isSignin = true;
            router.push({ name: 'Mainpage' });
        },
        // 로그아웃
        logout(state) {
            state.isSignin = false;
            router.push({ name: 'Mainpage' });
        },
    },

    // 로그인, 로그아웃 등의 비동기 로직을 처리하는 함수
    actions: {
        // 로그인
        signin({ commit }, payload) {
            commit('signin');

            /*axios.post('https://api.example.com/signin', payload)
                .then((response) => {
                    if (response.data.result === 'success') {
                        commit('signin');
                    } else {
                        alert('로그인에 실패했습니다.');
                    }
                })
                .catch((error) => {
                    console.error(error);
                });*/
        },
        // 로그아웃
        logout({ commit }) {
            commit('logout');
        },

    },
}

export default loginStore;