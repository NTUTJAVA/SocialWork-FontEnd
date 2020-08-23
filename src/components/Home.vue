<template>
  <div id="bodyBlock">
       
    <div v-for="(item, index) in features" :key="index" v-bind:class="index%2==0?classType.left:classType.right" class="jumbotron">
      <h1 class="display-4">{{ item }}</h1>
      <hr class="my-4" />
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Go!</a>
    </div>

  </div>
</template>

<style scoped>
#bodyBlock {
  margin-top: 50px;
}
.leftSide {
  text-align: left;
}
.rightSide {
  text-align: right;
}
</style>
<script>
export default {
    data(){
    return {
      classType:{
        left:`leftSide`,
        right:`rightSide`
        },
      features:["簡介", "會員資料","留言板"]
    }
  }
}
</script>