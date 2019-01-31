<style lang="scss" scoped>
@import "~@/css/var";
.c-page-body {
  background: #fff;
}
.login_label {
  font-size: 0.24rem;
  margin-top: 0.1rem;
  // text-align: center;
}
.login{
    padding:0.15rem;
}
input {
  padding: 0.15rem 0;
  border: 0;
  width: 79%;
//   height: 100%;
}
li {
  border-bottom: 1px solid #f4f4f4;
}
ul {
  margin: 0.2rem 0;
}
</style>
<template>
  <div class="record-page">
    <c-header theme="transparent"></c-header>
    <div class="c-page-body header-pd">
      <div class="login">
        <!-- 注册 -->
        <p class="login_label">登录</p>
        <ul>
           <li>
            <input placeholder="请输入手机号">
          </li>
          <li>
            <input placeholder="请输入密码">
            <span style="color:#999; display: inline-block;margin: auto;">忘记密码</span>
          </li>
        </ul>
        <c-button :title="'登录'"></c-button>
        <div style="padding:0.2rem 0rem;color:#848484;display:flex;justify-content: space-between;">
          <!-- <p>验证码登录</p> -->
          <router-link tag="span" to="/register">新用户注册</router-link>
        </div>
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

