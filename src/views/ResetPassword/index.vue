<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.c-page-body {
  background: #fff;
}
.register_label {
  font-size: 0.24rem;
  margin-top: 0.1rem;
  // text-align: center;
}
.register {
  padding: 0.15rem;
}
input {
  padding: 0.15rem 0;
  border: 0;
  // width: 74%;
  //   height: 100%;
  @include flex;
}
li {
  border-bottom: 1px solid #f4f4f4;
}
ul {
  margin: 0.2rem 0;
}
.fu {
  color: $color-primary;
}

.sms-btn {
  color: #848484;
  display: inline-block;
  margin: auto;
  border: none;
  background: transparent;
}

.flexbox{
  @include flexbox;
}
</style>
<template>
  <div class="record-page">
    <c-header theme="transparent"></c-header>
    <div class="c-page-body header-pd">
      <div class="register">

        <p class="register_label">重置密码</p>
        <ul>
          <li>
            <input v-model="phone" placeholder="请输入手机号">
          </li>
          <li class="flexbox">
            <input v-model="smsCode" placeholder="请输入验证码">
            <button v-if="timer>0" class="c-btn btn-primary" disabled="disabled" style="width:100px;">{{timer}}s后重发</button>
            <button v-else class="c-btn btn-primary" @click="getSmsCode" style="width:100px;">发送验证码</button>
          </li>
          <li>
            <input v-model="password" placeholder="6-14位密码">
          </li>
        </ul>
        <c-button @click="register">确定</c-button>
      </div>
    </div>
  </div>
</template>
<script>
import services from "@/services";

export default {
  data() {
    return {
      timer: 0,

      phone: "",
      smsCode: "",
      password: ""
    };
  },
  methods: {
    countdown(num) {
      if (num) {
        this.timer = num;
      }

      setTimeout(() => {
        if (this.timer > 0) {
          this.timer--;
          this.countdown();
        }
      }, 1000);
    },

    async getSmsCode() {
      try {
        let { phone } = this;
        let res = await services.getSmsCode({
          phone
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);
        this.countdown(60);
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async register() {
      try {
        let { phone, smsCode, password } = this;
        let res = await services.register({
          phone,
          smsCode,
          password
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);

        setTimeout(() => {
          this.$router.back();
        }, 1000);
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {}
};
</script>

