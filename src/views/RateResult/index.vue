<style scoped lang="scss">
@import '~@/css/var';
.wrap {
  text-align: center;
  padding: 0.3rem;
}

.success-icon {
  font-size: 0.8rem;
  color: $color-success;
}

.title{
  font-size: 0.18rem;
  font-weight: 500;
  margin-bottom:0.2rem;
}
</style>

<template>
  <div class="pay-result-page page">
    <c-header :title="'评价成功'" :backType="0">
      <!-- <router-link slot="right" to="/order">完成</router-link> -->
    </c-header>
    <div class="c-page-body header-pd">
      <div class="wrap">
        <i class="iconfont icon-wancheng success-icon"></i>
        <div class="title">评价成功</div>
        <button class="c-btn btn-primary" @click="$router.back()">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
    
  }
};
</script>
