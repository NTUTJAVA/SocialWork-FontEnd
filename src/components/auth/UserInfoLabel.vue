<template>
  <div class="container">
    <form v-if="isRegister || isEdit">
      <div class="form-group">
        <label for="username"
          >帳號<span class="errorMsg" v-show="usernameError"
            >&nbsp;&nbsp;&nbsp;&nbsp;{{ usernameErrorMsg }}</span
          >
        </label>
        <input
          type="text"
          class="form-control"
          v-model="username"
          :readonly="!isRegister"
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
          ref="password"
        />
      </div>
      <div class="form-group">
        <label for="email"
          >email<span class="errorMsg" v-show="emailError"
            >&nbsp;&nbsp;&nbsp;&nbsp;{{ emailErrorMsg }}</span
          ></label
        >
        <input type="email" class="form-control" v-model="email" ref="email" />
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
          ref="nickname"
        />
      </div>
    </form>
    <div class="inline container-btn">
      <button
        class="btn btn-secondary"
        v-if="!isRegister && isEdit"
        @click="$emit('changemodal', false)"
      >
        取消
      </button>
      &nbsp;&nbsp;&nbsp;
      <button class="btn btn-primary" v-if="isRegister" @click="submit">
        送出
      </button>
      <button class="btn btn-primary" v-if="isEdit" @click="saveEdit">
        儲存
      </button>
    </div>
    <div v-if="!isRegister && !isEdit">
      <div class="inline show-only">帳號：{{ username }}</div>
      <div class="inline show-only">暱稱：{{ nickname }}</div>
      <div class="inline show-only">E-mail：{{ email }}</div>
      <button
        class="btn btn-primary"
        v-if="!isEdit && showEditBtn"
        @click="toEdit"
      >
        編輯
      </button>
    </div>
  </div>
  <Confirm
    :show="showConfirm"
    @close="showConfirm = false"
    :callback="callback"
    :showOkBtn="true"
  >
    <template v-slot:title
      ><h3 style="color: #42b983; font-size: 50px" v-if="!confirmError">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-check-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
          />
        </svg>
        {{ getConfirmTitle }}
      </h3>
      <h3 class="inline" style="color: #e24e60; font-size: 50px" v-else>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-x-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
        請填寫空白欄位
      </h3></template
    >
  </Confirm>
</template>

<style scoped>
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
.show-only {
  text-align: left;
  font-size: 30px;
}
.readonly-text {
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
.container-btn {
  display: flex;
  justify-content: center;
}
</style>

<script>
import req from "../../apis/http";
import Confirm from "../global/Confirm";
export default {
  props: {
    isRegister: {
      type: Boolean,
      default: false,
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
    userInfo: {},
  },
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
      showConfirm: false,
      showEditBtn: false,
      confirmError: false,
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
      const isText = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
      if (!isText.test(this.nickname)) {
        this.nicknameError = true;
        this.nicknameErrorMsg = "請勿包含特殊字元";
      } else if (this.username.length > 15) {
        this.nicknameError = true;
        this.nicknameErrorMsg = "請勿超過15個字";
      } else {
        this.nicknameError = false;
      }
    },
    userInfo: function () {
      this.email = this.userInfo.email;
      this.username = this.$route.params.username;
      this.nickname = this.userInfo.nickname;
      if (!this.isEdit) {
        this.showEditBtn = this.userInfo.canEdit;
      }
    },
  },
  methods: {
    submit() {
      if (this.checkinput()) {
        req("post", "/auth/register", {
          username: this.username,
          password: this.password,
          email: this.email,
          nickname: this.nickname,
        })
          .then(() => {
            this.showConfirm = true;
          })
          .catch((error) => {
            this.usernameError = true;
            this.usernameErrorMsg = error.response.data;
            this.$refs.username.focus();
          });
      }
    },
    checkinput() {
      let checkData = [
        {
          name: "username",
          data: this.username,
          isError: this.usernameError,
          msg: this.usernameErrorMsg,
        },
        {
          name: "password",
          data: this.password,
          isError: this.passwordError,
          msg: this.passwordErrorMsg,
        },
        {
          name: "email",
          data: this.email,
          isError: this.emailError,
          msg: this.emailErrorMsg,
        },
        {
          name: "nickname",
          data: this.nickname,
          isError: this.nicknameError,
          msg: this.nicknameErrorMsg,
        },
      ];
      let count = 0;
      for (let index in checkData) {
        if (!checkData[index].isError && checkData[index].data.length > 0) {
          count++;
        }
      }
      return count == checkData.length;
    },
    callback() {
      if (this.confirmError) {
        this.showConfirm = false;
        this.showConfirm = false;
        return;
      }
      if (this.isRegister) {
        this.showConfirm = false;
        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      } else {
        this.showConfirm = false;
        this.$emit("changemodal", false);
      }
    },
    toEdit() {
      this.$emit("changemodal", true);
    },
    saveEdit() {
      if (this.checkinput()) {
        this.confirmError = false;
        req("post", "/user/saveEdit", {
          userId: this.$store.getters.getUserId,
          username: this.username,
          password: this.password,
          email: this.email,
          nickname: this.nickname,
        })
          .then((resp) => {
            this.showConfirm = true;
            this.$store.dispatch("updateUser", {
              nickname: resp.data.nickname,
            });
          })
          .catch((error) => {
            this.usernameError = true;
            this.usernameErrorMsg = error.response.data;
            this.$refs.username.focus();
          });
      } else {
        this.confirmError = true;
        this.showConfirm = true;
      }
    },
  },
  computed: {
    getConfirmTitle() {
      return this.isRegister ? "註冊成功" : "儲存完成";
    },
  },
  components: {
    Confirm,
  },
};
</script>