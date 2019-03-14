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
}
li {
  padding: 1px 0;
  @include flexbox;
  // border-bottom: 1px solid #f4f4f4;
  @include border-bottom();

  .flex-main {
    flex: 1;
  }
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

.flexbox {
  @include flexbox;
}
</style>
<template>
  <div class="record-page page">
    <c-header theme="transparent"></c-header>
    <div class="c-page-body header-pd">
      <div class="register">
        <!-- 注册 -->
        <p class="register_label">注册</p>
        <ul>
          <li>
            <input  class="flex-main" v-model="phone" placeholder="请输入手机号">
          </li>
          <li class="flexbox">
            <input class="flex-main" v-model="smsCode" placeholder="请输入验证码">
            <button v-if="timer>0" class="c-btn btn-primary" disabled="disabled" style="width:100px;">{{timer}}s后重发</button>
            <button v-else class="c-btn btn-primary" @click="showGT" style="width:100px;">发送验证码</button>
          </li>
          <li>
            <input class="flex-main" v-model="password" type="password" @keypress.enter="register" placeholder="请输入密码（6-16位字母，数字，下划线）">
          </li>
        </ul>
        <c-button @click="register">立即注册</c-button>
        <p style="padding:0.2rem 0.1rem;color:#c4c4c4;">
          继续注册表示已经阅读并同意
          <span class="fu">《服务条款》</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import services from "@/services";
import validate from "@/validate";
import "@/js/gt";

function initGeetestPromise(options) {
  return new Promise((resolve, reject) => {
    try {
      initGeetest(options, function(captchaObj) {
        resolve(captchaObj);
      });
    } catch (err) {
      reject(err);
    }
  });
}

export default {
  data() {
    return {
      captchaObj: null,
      timer: 0,

      phone: "",
      smsCode: "",
      password: ""
    };
  },
  methods: {
    async initGT() {
      try {
        this.$showLoading();
        let { data } = await services.gtRegister();

        let captchaObj = await initGeetestPromise({
          // 以下 4 个配置参数为必须，不能缺少
          gt: data.gt,
          challenge: data.challenge,
          offline: !+data.success, // 表示用户后台检测极验服务器是否宕机
          new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
          product: "bind", // 产品形式，包括：float，popup
          width: "300px"
        });
        captchaObj.onSuccess(() => {
          this.getSmsCode();
        });
        this.captchaObj = captchaObj;
        this.$hideLoading();
      } catch (err) {
        console.log(err);
        this.$hideLoading();
        return this.$toast("生成滑块失败");
      }
    },
    async showGT() {
      let { phone } = this;
      if (!phone) return this.$toast("手机号不能为空");

      if (!validate.isMobile(phone)) return this.$toast("手机号不正确");

      if (!this.captchaObj) {
        await this.initGT();
      }
      setTimeout(() => {
        this.captchaObj.verify();
      }, 200);
    },
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
        let result = this.captchaObj.getValidate();
        if (!result) {
          return this.toast("滑块验证失败");
        }

        this.$showLoading();
        let { phone } = this;
        let res = await services.getSmsCode({
          phone,
          type: "register",
          geetest_challenge:result.geetest_challenge,
          geetest_validate:result.geetest_validate,
          geetest_seccode:result.geetest_seccode
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.$toast(res.message);
        this.countdown(60);
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    async register() {
      try {
        this.$showLoading();
        let { phone, smsCode, password } = this;
        let res = await services.register({
          phone,
          smsCode,
          password
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.$toast(res.message);

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

