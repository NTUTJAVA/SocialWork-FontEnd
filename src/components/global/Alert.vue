<template>
  <transition name="fade">
    <div class="modal-mask" v-show="show">
      <div class="modal-confirm">
        <h2 class="confirm-header">
          <i class="iconfont icon-questioncircle"></i>
          <slot name="title"></slot>
        </h2>
        <div class="confirm-content">
          <slot name="content"></slot>
        </div>
        <div class="confirm-btns">
          <button class="btn" v-if="showCancelBtn" @click="$emit('close')">
            取 消
          </button>
          <button class="btn btn-primary" v-if="showOkBtn" @click="callback">
            確 定
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(31, 30, 30, 0.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-confirm {
  width: 400px;
  box-sizing: border-box;
  margin-bottom: 15%;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 6px;
}
@media only screen and (max-width: 640px) {
  .modal-confirm {
    width: 100%;
    margin: 0 20px;
    padding: 10px 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      //   required: true,
    },
    showOkBtn: {
      type: Boolean,
      default: false,
      required: true,
    },
    showCancelBtn: {
      type: Boolean,
      default: false,
      required: false,
    },
    callback: {
      type: Function,
      require: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>