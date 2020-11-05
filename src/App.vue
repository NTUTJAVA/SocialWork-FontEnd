<template>
  <div id="app">
    <h1 id="title" class="text-left">{{ webName }}</h1>
    <navbar @login="showModal = true" />

    <LoginModal v-if="showModal" @close="showModal = false" />
    <router-view />
    <div id="picBlock">
      <span style="height=500;">&nbsp;</span>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import GlobalVue from "./config/Global.vue";
import LoginModal from "./components/auth/LoginModal";

export default {
  name: "App",
  data() {
    return {
      webName: GlobalVue.webName,
      showModal: false,
    };
  },
  components: {
    Navbar,
    Footer,
    LoginModal,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2eee5;
  margin-top: 60px;
}

#picBlock {
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
}

#title {
  margin: 10px;
}
</style>
