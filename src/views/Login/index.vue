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
.login ,.yzm_login{
  padding: 0.15rem;
}
input {
  padding: 0.15rem 0;
  border: 0;
  width: 79%;
}
li {
  border-bottom: 1px solid #f4f4f4;
}
ul {
  margin: 0.2rem 0;
}
.send{
color:$color-primary; display: inline-block;margin: auto;
}
</style>
<template>
  <div class="record-page">
    <c-header theme="transparent"></c-header>
    <div class="c-page-body header-pd">
      <div class="login" v-if="show">
        <p class="login_label">登录</p>
        <ul>
          <li>
            <input v-model="phone" placeholder="请输入手机号">
          </li>
          <li>
            <input v-model="password" type="password" placeholder="请输入密码">
            <router-link to="/reset-password" style="color:#999; display: inline-block;margin: auto;">忘记密码?</router-link>
          </li>
        </ul>
        <c-button @click="login">登录</c-button>
        <div style="padding:0.2rem 0rem;color:#848484;display:flex;justify-content: space-between;">
          <p @click="yzm_login()">验证码登录</p>
          <router-link tag="span" to="/register">新用户注册</router-link>
        </div>
      </div>
      <!-- 验证码登录 -->
        <div class="yzm_login" v-if="show2">
           <p class="login_label">验证码登录</p>
        <ul>
          <li>
            <input v-model="phone" placeholder="请输入手机号">
          </li>
          <li>
            <input v-model="password" placeholder="还未发送验证码" style="width:74%">
            <span class="send" style="">发送验证码</span>
          </li>
        </ul>
        <c-button @click="login()">完成</c-button>
        <div style="padding:0.2rem 0rem;color:#848484;display:flex;justify-content: space-between;">
          <p @click="zm_login()">账号密码登录</p>
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
      show:true,
      show2:false
    };
  },
  methods: {
    async login(){
      try {
        let { phone,password } = this;
        let res = await services.login({
          phone,
          password
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);
        
        services.$setToken(res.data.token);
        setTimeout(() => {
          this.$router.back();
        }, 1000);
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    yzm_login(){
     this.show = !this.show;
     this.show2 = !this.show2;
    },
    zm_login(){
      this.show2 = !this.show2;
      this.show = !this.show;
    }
  },
  created() {}
};
</script>

