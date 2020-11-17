<template>
  <h1>
    <strong>會員資料</strong>
  </h1>
  <UserInfoLabel
    :userInfo="userInfo"
    :isEdit="isEdit"
    :isRegister="false"
    @changemodal="setEdit"
  />
</template>

<style scoped>
h1 {
  margin-top: 20px;
  font-size: 50px;
}
strong {
  color: #42b983;
}
</style>

<script>
import req from "../../apis/http";
import UserInfoLabel from "./UserInfoLabel.vue";
export default {
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      let username = this.$route.params.username;
      let url = "/user/info/" + username;
      this.isEdit = false;
      req("get", url)
        .then((resp) => {
          this.userInfo = resp.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
    setEdit(edit) {
      this.isEdit = edit;
    },
  },
  data() {
    return {
      userInfo: {},
      username: this.$route.params.username,
      isEdit: false,
    };
  },
  watch: {
    $route: "getUserInfo",
  },
  components: {
    UserInfoLabel,
  },
};
</script>