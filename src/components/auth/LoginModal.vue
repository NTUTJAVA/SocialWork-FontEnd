<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div v-if="showData">
          <div class="modal-container">
            <div class="modal-header">
              <h3>登入</h3>
            </div>

            <div class="modal-body-self">
              <form class="login-form">
                <div class="inline">
                  <label class="col-sm-4 col-md-4 col-lg-4"
                    >帳號
                    <span v-show="usernameError" class="text-danger"
                      >查無此帳號</span
                    ></label
                  >
                  <input
                    v-model="loginData.username"
                    class="col-sm-8 col-md-8 col-lg-8"
                    type="text"
                    ref="username"
                    required
                  />
                </div>
                <div class="inline" style="padding-bottom: 10 px">
                  <label class="col-sm-4 col-md-4 col-lg-4"
                    >密碼
                    <span v-show="passwordError" class="text-danger"
                      >密碼錯誤</span
                    ></label
                  >
                  <input
                    v-model="loginData.password"
                    class="col-sm-8 col-md-8 col-lg-8"
                    type="password"
                    required
                  />
                </div>
                <router-link
                  class="inline"
                  to="register"
                  @click="$emit('close')"
                  >加入會員</router-link
                >
              </form>
            </div>

            <div class="modal-footer">
              <button class="btn btn-secondary" @click="closeModal">
                取消
              </button>
              <button type="button" class="btn btn-success" @click="login">
                登入
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-body-self {
  margin: 10px 0;
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-body-self {
  margin: 10px;
}
.modal-container {
  width: 30%;
  margin: 0px auto;
  margin-bottom: 15%;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-active {
  transition: opacity 1.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.login-form > div > label {
  margin-right: 30px;
  text-align: left;
  font-size: 20px;
}
.login-form > div > input {
  width: 60%;
}
span {
  font-size: 12px;
  position: absolute;
  bottom: 0px;
  right: 0px;
}
</style>

<script>
import auth from "../../apis/auth";
export default {
  props: {
    showData: Boolean,
  },
  data() {
    return {
      loginData: {
        username: "",
        password: "",
      },
      usernameError: false,
      passwordError: false,
    };
  },
  methods: {
    login() {
      this.usernameError = false;
      this.passwordError = false;
      auth
        .login(this.loginData)
        .then((response) => {
          let res = response.data;
          this.$store.dispatch("setAuth", {
            token: res.jwtToken,
            nickname: res.usernickname,
            isLogin: true,
            userId: res.userId,
            username: res.username,
          });
          this.loginData.username = "";
          this.loginData.password = "";
          this.$emit("close");
        })
        .catch((error) => {
          this.loginData.password = "";
          let errorMsg = error.response.data;
          if (errorMsg == "使用者不存在") {
            this.usernameError = true;
          }
          if (errorMsg == "密碼錯誤") {
            this.passwordError = true;
          }
        });
    },
    closeModal() {
      this.loginData.username = "";
      this.loginData.password = "";
      this.$emit("close");
    },
  },
  mounted() {
    let self = this;
    window.addEventListener("keyup", function (event) {
      // If ESC key was pressed...
      if (event.keyCode === 27) {
        self.$emit("close");
      }
    });
    window.addEventListener("keyup", function (event) {
      // If enter key was pressed...
      if (event.keyCode === 13) {
        self.login();
      }
    });
  },
};
</script>