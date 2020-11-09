<template>
  <footer>
    <div class="copyright text-center">
      Copyright © {{ year }} {{webName}} 版權所有 All Rights Reserved
    </div>
  </footer>
</template>

<script>
import GlobalVue from "../config/Global";
export default {
  data() {
    return {
      webName: GlobalVue.webName,
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
.copyright {
  margin-top: 10px;
}
</style>
