<template>
  <div id="app">
    <navbar />
    <div id="picBlock"><img class="center" src="https://placem.at/people?w=2000&h=500" /></div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Home/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/NavBar.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  
  components: {
    // HelloWorld,
    Navbar,
    Home
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#picBlock {
        background-color: aquamarine;
        background-size: cover;
    }
</style>
