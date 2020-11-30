<template>
  <h1>加入會員</h1>
  <UserInfoLabel :isRegister="true"/>
</template>

<style scoped>
h1 {
  margin-top: 20px;
  font-size: 50px;
}
</style>

<script>
import UserInfoLabel from "./UserInfoLabel";
export default {
  components: {
    UserInfoLabel,
  },
};
</script>


