
export default {
    namespace: true,
    state: {
        token: '',
        isLogin: false,
        nickname: 'before',
    },
    mutations: {
        SET_AUTH(state, options) {
            state.token = options.token,
                state.isLogin = options.isLogin,
                state.nickname = options.nickname
        },
        LOG_OUT(state, options) {
            state.token = options.token,
                state.isLogin = options.isLogin,
                state.nickname = options.nickname
        },
    },
    actions: {
        setAuth(context, options) {
            context.commit('SET_AUTH', options);
        },
        logout(context) {
            console.log(`in action`);
            window.localStorage.removeItem("vuex");
            context.commit('LOG_OUT', { isLogin: false, token: '', nickname: '' })
        }
    },
    getters: {
        getNickname: state => {
            return state.nickname;
        },
        getIsLogin: state => {
            return state.isLogin;
        }
    }
}