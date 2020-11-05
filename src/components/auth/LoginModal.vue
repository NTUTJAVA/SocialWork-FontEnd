<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>登入</h3>
          </div>

          <div class="modal-body">
            <form class="login-form">
              <div class="inline">
                <label class="col-sm-4 col-md-4 col-lg-4">帳號  <span v-show="usernameError" class="text-danger">查無此帳號</span></label>
                <input
                  v-model="loginData.username"
                  class="col-sm-8 col-md-8 col-lg-8"
                  type="text"
                  required
                />
              </div>
              <div class="inline">
                <label class="col-sm-4 col-md-4 col-lg-4">密碼 <span v-show="passwordError" class="text-danger">密碼錯誤</span></label>
                <input
                  v-model="loginData.password"
                  class="col-sm-8 col-md-8 col-lg-8"
                  type="password"
                  required
                />
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" @click="$emit('close')">
              取消
            </button>
            <button type="button" class="btn btn-info" @click="login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
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

.modal-container {
  width: 30%;
  margin: 0px auto;
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

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
  position:absolute;
  bottom:0px;
  right: 0px;
}
</style>

<script>
import auth from '../../apis/auth';
// import req from '../../apis/http';
export default {
  data(){
    return {
      loginData:{
        username:'',
        password:''
      },
      usernameError: false,
      passwordError: false,
    }
  },
  methods: {
    login(){
      this.usernameError = false;
      this.passwordError = false;
      auth.login(this.loginData)
                .then((response) => {
                    let res = response.data;
                    this.$store.dispatch('setAuth', {token:res.token, nickname:res.usernickname, isLogin: true});
                    this.$emit('close');
                }).catch( error=>{
                  // console.log(`1. ${error}`)
                  // console.log(`2. ${error.response}`)
                  // console.log(`3. ${error.response.data}`)
                  let errorMsg = error.response.data;
                  if(errorMsg == '使用者不存在'){
                    this.usernameError = true;
                  }
                  if(errorMsg == '密碼錯誤'){
                    this.passwordError = true;
                  }
                });
      // this.$store.dispatch('setAuth', this.auth)
    }
  }
}
</script>