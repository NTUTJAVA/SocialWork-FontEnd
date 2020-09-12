<template>
  <footer>
    <div class="copyright text-center">
      Copyright © {{ year }} EZfit Eat 版權所有 All Rights Reserved
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
.copyright {
  margin-top: 10px;
  /* background-color: #e5c1c5; */
}
</style>
