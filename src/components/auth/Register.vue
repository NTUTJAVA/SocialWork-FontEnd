<template>
  <h1>加入會員</h1>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="username"
          >帳號<span class="errorMsg" v-show="usernameError"
            >&nbsp;&nbsp;&nbsp;&nbsp;{{ usernameErrorMsg }}</span
          ></label
        >
        <input
          type="text"
          class="form-control"
          v-model="username"
          maxlength="15"
          ref="username"
        />
      </div>
      <div class="form-group">
        <label for="password"
          >密碼<span class="errorMsg" v-show="passwordError"
            >&nbsp;&nbsp;&nbsp;&nbsp;{{ passwordErrorMsg }}</span
          ></label
        >
        <input
          type="password"
          class="form-control"
          v-model="password"
          maxlength="15"
        />
      </div>
      <div class="form-group">
        <label for="email"
          >email<span class="errorMsg" v-show="emailError"
            >&nbsp;&nbsp;&nbsp;&nbsp;{{ emailErrorMsg }}</span
          ></label
        >
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label for="nickname"
          >使用者暱稱<span class="errorMsg" v-show="nicknameError"
            >&nbsp;&nbsp;&nbsp;&nbsp;{{ nicknameErrorMsg }}</span
          ></label
        >
        <input
          type="nickname"
          class="form-control"
          maxlength="15"
          v-model="nickname"
        />
      </div>
    </form>
    <button class="btn btn-primary" @click="submit">送出</button>
  </div>
</template>

<style scoped>
h1 {
  margin-top: 20px;
  font-size: 50px;
}
.container {
  margin-top: 15px;
  margin-bottom: 0px;
  padding: 10px;
  border-radius: 10px;
  border-style: solid;
  border-color: #c3e2dd;
}
label {
  float: left;
  font-size: 30px;
}
.form-group {
  margin-top: 20px;
}

.errorMsg {
  font-size: 15px;
  color: red;
}
</style>

<script>
import req from "../../apis/http";
export default {
  data() {
    return {
      username: "",
      usernameError: false,
      usernameErrorMsg: "",
      password: "",
      passwordError: false,
      passwordErrorMsg: "",
      email: "",
      emailError: false,
      emailErrorMsg: "",
      nickname: "",
      nicknameError: false,
      nicknameErrorMsg: "",
      cansubmit: false,
    };
  },
  watch: {
    username: function () {
      const isText = /^[a-zA-Z0-9]+$/;
      if (!isText.test(this.username)) {
        this.usernameError = true;
        this.usernameErrorMsg = "請勿包含特殊字元";
      } else if (this.username.length < 3) {
        this.usernameError = true;
        this.usernameErrorMsg = "請勿少於3個字";
      } else if (this.username.length > 15) {
        this.usernameError = true;
        this.usernameErrorMsg = "請勿超過15個字";
      } else {
        this.usernameError = false;
      }
    },
    password: function () {
      const isText = /^[a-zA-Z0-9]+$/;
      const include = /^(?=.*\d)(?=.*[a-zA-Z]).{3,15}$/;
      if (!isText.test(this.password)) {
        this.passwordError = true;
        this.passwordErrorMsg = "請勿包含特殊字元";
      } else if (this.password.length < 3) {
        this.passwordError = true;
        this.passwordErrorMsg = "請勿少於3個字";
      } else if (this.password.length > 15) {
        this.passwordError = true;
        this.passwordErrorMsg = "請勿超過15個字";
      } else if (!include.test(this.password)) {
        this.passwordError = true;
        this.passwordErrorMsg = "至少包括一個英文字母及數字";
      } else {
        this.passwordError = false;
      }
    },
    email: function () {
      const isMail = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (!isMail.test(this.email)) {
        this.emailError = true;
        this.emailErrorMsg = "email格式錯誤";
      } else {
        this.emailError = false;
      }
    },
    nickname: function () {
      const isText = /^[a-zA-Z0-9]+$/;
      if (!isText.test(this.nickname)) {
        this.nicknameError = true;
        this.nicknameErrorMsg = "請勿包含特殊字元";
      } else if (this.username.length > 10) {
        this.nicknameError = true;
        this.nicknameErrorMsg = "請勿超過10個字";
      } else {
        this.nicknameError = false;
      }
    },
  },
  methods: {
    submit() {
      if (
        !(this.usernameError && this.passwordError && this.emailError,
        this.nicknameError)
      ) {
        req("post", "/auth/register", {
          username: this.username,
          password: this.password,
          email: this.email,
          nickname: this.nickname,
        })
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            this.usernameError = true;
            this.usernameErrorMsg = error.response.data;
            this.$refs.username.focus();
          });
      } else {
        this.$refs.username.focus();
      }
    },
  },
};
</script>