<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.c-page-body {
  background: #fff;
}
.login_label {
  font-size: 0.24rem;
  margin-top: 0.1rem;
  // text-align: center;
}
.login ,.yzm_login{
  padding: 0.15rem;
}
input {
  padding: 0.15rem 0;
  border: 0;
  width: 79%;
}
li {
  padding:1px 0;
  @include flexbox;
  // border-bottom: 1px solid #f4f4f4;
  @include border-bottom();

  .flex-main{
    flex:1;
  }
}
ul {
  margin: 0.2rem 0;
}
.send{
color:$color-primary; display: inline-block;margin: auto;
}
</style>
<template>
  <div class="record-page page">
    <c-header theme="transparent"></c-header>
    <div class="c-page-body header-pd">
      <div class="login" v-if="panel === '1'">
        <p class="login_label">登录</p>
        <ul>
          <li>
            <input class="flex-main" v-model="phone" placeholder="请输入手机号">
          </li>
          <li>
            <input class="flex-main" v-model="password" type="password" placeholder="请输入密码" @keypress.enter="login('password')">
            <router-link to="/reset-password" style="color:#999; display: inline-block;margin: auto;">忘记密码?</router-link>
          </li>
        </ul>
        <c-button @click="login('password')">登录</c-button>
        <div style="padding:0.2rem 0rem;color:#848484;display:flex;justify-content: space-between;">
          <!-- <p @click="panel = '2'">验证码登录</p> -->
          <router-link tag="span" to="/register">新用户注册</router-link>
        </div>
      </div>
      <!-- 验证码登录 -->
        <div class="yzm_login" v-if="panel === '2'">
           <p class="login_label">验证码登录</p>
        <ul>
          <li>
            <input class="flex-main" v-model="phone" placeholder="请输入手机号">
          </li>
          <li>
            <input class="flex-main" v-model="smsCode" placeholder="请输入验证码" style="width:74%" @keypress.enter="login('password')">
            <span class="send" style="">发送验证码</span>
          </li>
        </ul>
        <c-button @click="login('smsCode')">完成</c-button>
        <div style="padding:0.2rem 0rem;color:#848484;display:flex;justify-content: space-between;">
          <p @click="panel = '1'">账号密码登录</p>
          <router-link tag="span" to="/register">新用户注册</router-link>
        </div>
        </div>
      <!--  -->
    </div>
  </div>
</template>
<script>
import services from '@/services';

export default {
  data() {
    return {
      phone:'',
      password:'',
      smsCode:'',
      panel:'1',
    };
  },
  methods: {
    async login(){
      try {
        let { phone,password } = this;
        this.$showLoading();
        let res = await services.login({
          phone,
          password
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.$toast(res.message);
        
        services.$setToken(res.data.token);
        setTimeout(() => {
          this.$router.back();
        }, 1000);
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  },
  created() {}
};
</script>

