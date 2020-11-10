<template>
  <div id="bodyBlock container-fluidr">
    <div
      v-for="(item, index) in getRenderList"
      :key="index"
      v-bind:class="index % 2 == 0 ? classType.left : classType.right"
      class="jumbotron center col-12 col-md-12 col-sm-12"
    >
      <h1 class="display-4">{{ item.name }}</h1>
      <hr class="my-4" />
      <p class="lead">
        {{ item.introduction }}
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Go!</a>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  margin-top: 15px;
  margin-bottom: 0px;
  background-color: #ffffff;
  border-radius: 30px;
  border-style: solid;
  border-color: #c3e2dd;
}
.leftSide {
  text-align: left;
}
.rightSide {
  text-align: right;
}
</style>
<script>
import GlobalVue from "../config/Global.vue";
export default {
  data() {
    return {
      classType: {
        left: `leftSide`,
        right: `rightSide`,
      },
    };
  },
  computed: {
    getIsLogin() {
      return this.$store.getters.getIsLogin;
    },
    getRenderList() {
      const result = GlobalVue.features.filter(
        (target) =>
          target.needLogin === false || (target.needLogin && this.getIsLogin)
      );
      return result;
    },
  },
};
</script>
