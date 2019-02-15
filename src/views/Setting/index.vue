<style scoped lang="scss">
.setting-page {
}
</style>

<template>
  <div class="setting-page">
    <c-header :title="'设置'"></c-header>
    <div class="c-page-body header-pd">
      <div style="text-align:center;">
        <c-button @click="logout">退出登录</c-button>
      </div>
    </div>
  </div>
</template>

<script>
import services from '@/services';
export default {
  data() {
    return {};
  },
  methods: {
    logout(){
      services.$removeToken();
    }
  }
};
</script>
