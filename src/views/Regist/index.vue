<style lang="scss" scoped>
@import "~@/css/var";
.c-page-body {
//   padding: 0.15rem;
  // margin-top: 0.2rem;
}
.regist_label {
  font-size: 0.25rem;
  margin-top: 0.2rem;
  // text-align: center;
}
.regist{
    padding:0.15rem;
}
input {
  padding: 0.15rem 0;
  border: 0;
  width: 74%;
//   height: 100%;
}
li {
  border-bottom: 1px solid #f4f4f4;
}
ul {
  margin: 0.2rem 0;
}
.fu{
color: $color-primary;
}
</style>
<template>
  <div class="record-page">
    <c-header></c-header>
    <div class="c-page-body header-pd">
      <div class="regist">
        <!-- 注册 -->
        <p class="regist_label">注册</p>
        <ul>
          <li>
            <input placeholder="请输入手机号">
            <span style="color:#848484; display: inline-block;margin: auto;">发送验证码</span>
          </li>
          <li>
            <input placeholder="还未发送验证码">
          </li>
          <li>
            <input placeholder="6-4位密码">
          </li>
        </ul>
        <c-button :title="'立即注册'"></c-button>
        <p style="padding:0.2rem 0.1rem;color:#c4c4c4;">
          继续注册表示已经阅读并同意
          <span class="fu">《服务条款》</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

