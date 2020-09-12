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
                <label class="col-sm-3 col-md-3 col-lg-3">User Name</label>
                <input
                  class="col-sm-9 col-md-9 col-lg-9"
                  type="text"
                  required
                />
              </div>
              <div class="inline">
                <label class="col-sm-3 col-md-3 col-lg-3">Password</label>
                <input
                  class="col-sm-9 col-md-9 col-lg-9"
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
            <button type="button" class="btn btn-info">Log In</button>
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
}
.login-form > div > input {
  width: 60%;
}
</style>
