
export default {
    namespace: true,
    state: {
        token: '',
        isLogin: false,
        nickname: 'before',
        userId: 0,
        username: '',
        features: [
            {
                name: "簡介",
                introduction: "這是『簡介』",
                needLogin: false,
                routerPath: "/1",
            },
            {
                name: "會員資料",
                introduction: "這是『會員資料』",
                needLogin: true,
                routerPath: "/2",
            },
            {
                name: "留言板",
                introduction: "這是『留言板』",
                needLogin: false,
                routerPath: "/3",
            },
        ],
    },
    mutations: {
        SET_AUTH(state, options) {
            state.token = options.token,
                state.isLogin = options.isLogin,
                state.nickname = options.nickname,
                state.userId = options.userId,
                state.username = options.username,
                state.features[1].routerPath = '/userinfo/' + options.username
        },
        UPDATE_USER(state, options) {
            state.nickname = options.nickname;
        },
        LOG_OUT(state, options) {
            state.token = options.token,
                state.isLogin = options.isLogin,
                state.nickname = options.nickname,
                state.userId = options.userId
        },
        CLEAN_TOKEN(state, options) {
            state.token = options.token;
        },
        UPDATE_TOKEN(state, options) {
            state.token = options.token;
        },
    },
    actions: {
        setAuth(context, options) {
            context.commit('SET_AUTH', options);
        },
        updateUser(context, options) {
            context.commit('UPDATE_USER', options);
        },
        logout(context) {
            window.localStorage.removeItem("vuex");
            context.commit('LOG_OUT', { isLogin: false, token: '', nickname: '', userId: 0 })
        },
        cleanToken(context) {
            context.commit('CLEAN_TOKEN', { token: '' });
        },
        updateToken(context, options) {
            context.commit('UPDATE_TOKEN', options);
        }
    },
    getters: {
        getNickname: state => {
            return state.nickname;
        },
        getIsLogin: state => {
            return state.isLogin;
        },
        getUserId: state => {
            return state.userId;
        },
        getFeatures: state => {
            return state.features;
        }

    }
}