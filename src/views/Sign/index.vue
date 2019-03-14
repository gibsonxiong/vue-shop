<style scoped lang="scss">
@import "~@/css/var";
.wrap {
  text-align: center;
  padding: 0.3rem;
}

.success-icon {
  font-size: 0.8rem;
  color: $color-success;
}

.title {
  font-size: 0.18rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
}
</style>

<template>
  <div class="pay-result-page page">
    <c-header :title="'每日签到'">
    </c-header>
    <div class="c-page-body header-pd">
     
      <div style="text-align: center;
    margin-top: 0.5rem;">
       <i class="iconfont icon-jianshe-" style="font-size: 0.8rem;"></i>
    <p>功能还在开发中，敬请期待</p>
    
    </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
