<script>
const webName = "助人者的休息小舖-test";
const version = "test";
const features = [
  {
    name: "簡介",
    introduction: "這是『簡介』",
    needLogin: false,
    routerPath: "/1",
  },
  {
    name: "會員資料",
    introduction: "這是『會員資料』",
    needLogin: true,
    routerPath: "/2",
  },
  {
    name: "留言板",
    introduction: "這是『留言板』",
    needLogin: false,
    routerPath: "/3",
  },
];
export default {
  webName,
  version,
  features, //網頁功能
};
</script>