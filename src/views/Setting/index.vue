<style scoped lang="scss">
.setting-page {
}
</style>

<template>
  <div class="setting-page page">
    <c-header :title="'设置'"></c-header>
    <div class="c-page-body header-pd">
      <c-cell-list style="margin-top:0.15rem;">
        <c-cell
          name="用户协议"
        ></c-cell>
        <c-cell
          name="意见反馈"
        ></c-cell>
      </c-cell-list>
      <div v-if="isLogin" style="text-align:center;padding: 0 0.1rem;">
        <c-button @click="logout">退出登录</c-button>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    logout() {
      services.$removeToken();
      this.$router.back();
    }
  },
  created(){
    this.isLogin = services.$isLogin();
  }
};
</script>
