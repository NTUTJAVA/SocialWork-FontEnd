<template>
  <nav class="navbar navbar-expand-lg navbar-light col-12 col-sm-12">
    <router-link class="navbar-brand nav-link" to="/">Home</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li
          class="nav-item"
          v-for="(item, index) in getRenderList"
          :key="index"
        >
          <router-link class="nav-link" :to="{ path: item.routerPath }">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="center-right">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item center-right">
          <a
            href="javascript:;"
            class="nav-link"
            @click="showLoginModal = true"
            v-if="!getIsLogin"
            >登入</a
          >
          <span class="nav-link" v-if="getIsLogin">{{ getNickname }}</span>
        </li>
        <li class="nav-item center-right">
          <router-link class="nav-link" v-if="!getIsLogin" to="/register"
            >加入會員</router-link
          >
        </li>
        <li v-if="getIsLogin">
          <a href="#" class="nav-link" @click="logout()">登出</a>
        </li>
      </ul>
    </div>
  </nav>
  <LoginModal
    v-show="showLoginModal"
    @close="showLoginModal = false"
    :show-Data="showLoginModal"
  />
</template>

<script>
import GlobalVue from "../config/Global.vue";
import LoginModal from "./auth/LoginModal";

export default {
  data() {
    return {
      showLoginModal: false,
      features: GlobalVue.features,
      navbarStatus: {
        isFix: false,
        offsetTop: 0,
        marginTop: 0,
      },
    };
  },
  computed: {
    getNickname() {
      return this.$store.getters.getNickname;
    },
    getIsLogin() {
      return this.$store.getters.getIsLogin;
    },
    getRenderList() {
      const result = GlobalVue.features.filter(
        (target) => target.needLogin ===false || ( target.needLogin && this.getIsLogin)
      );
      return result;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: {
    LoginModal,
  },
};
</script>

<style scoped>
nav {
  box-shadow: 1px 1px 1px 1px #cccccc;
}
#login {
  margin: 0px auto;
}
#loginText {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
}
</style>
