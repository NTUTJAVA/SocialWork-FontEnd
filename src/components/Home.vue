<template>
  <div id="bodyBlock container-fluidr">
    <div
      v-for="(item, index) in features"
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
#bodyBlock {
  background-color: #f2eee5;
}
.jumbotron {
  margin-top: 15px;
  background-color: #c3e2dd;
  margin-bottom: 0px;
  border-radius: 30px;
}
.leftSide {
  text-align: left;
}
.rightSide {
  text-align: right;
}
</style>
<script>
import GlobalVue from '../config/Global.vue';
export default {
  data() {
    return {
      features: GlobalVue.features,
      classType: {
        left: `leftSide`,
        right: `rightSide`,
      },
    };
  },
};
</script>
