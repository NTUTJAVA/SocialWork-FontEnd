import req from './http';

const auth = {
    login(params) {
        return req('post', '/auth/login', {
            username: params.username,
            password: params.password
        });
    }
}



export default auth;