
export default {
    namespace: true,
    state: {
        token: '',
        isLogin: false,
        nickname: 'before',
    },
    mutations: {
        SET_AUTH(state, options) {
            console.log(options.nickname)
            state.token = options.token,
                state.isLogin = options.isLogin,
                state.nickname = options.nickname
        }
    },
    actions: {
        setAuth(context, options) {
            context.commit('SET_AUTH', options);
        }
    },
    getters: {
        getLoginText: state => {
            return state.isLogin?state.nickname+ " 歡迎回來":"登入";
            // return state.nickname;
        }
    }
}