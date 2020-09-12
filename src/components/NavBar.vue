<template>
  <nav class="navbar navbar-expand-lg navbar-light col-12 col-sm-12">
    <a class="navbar-brand" href="#">Navbar</a>
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
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-for="(item, index) in features" :key="index">
          <router-link class="nav-link" :to="{ path: item.routerPath }">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="center-right">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item center-right">
          <!-- <router-link class="nav-link" to="/login">登入</router-link> -->
          <a href="#" class="nav-link" @click="$emit('login')">登入</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import GlobalVue from "../config/Global.vue";
export default {
  data() {
    return {
      features: GlobalVue.features,
      navbarStatus: {
        isFix: false,
        offsetTop: 0,
        marginTop: 0,
      },
    };
  },
};
</script>

<style scoped>
#login {
  margin: 0px auto;
}
#loginText {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 10px;
  color: aliceblue;
}
nav {
  background-color: #e5c1c5;
}
</style>
