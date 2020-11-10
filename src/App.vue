<template>
  <div id="app">
    <h1 id="title" class="text-left title">{{ webName }}</h1>
    <navbar @login="showModal = true" />
    <router-view />
    <div id="picBlock">
      <span style="height=500;">&nbsp;</span>
    </div>
    <Footer v-bind:style="{minHeight: Height+'px'}" />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import GlobalVue from "./config/Global.vue";

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
  },
};
</script>

<style>
.title {
  font-weight:bold;
}
html, body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
