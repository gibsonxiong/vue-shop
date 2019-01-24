<style lang="scss" scoped>
.c-mine {
}
</style>

<template>
  <div class="c-mine">
    <c-header :title="'我的'" :backType="0" :theme="'white'">
    </c-header>
    <div class="c-page-body header-pd tab-pd">
      <router-link to="/order">我的订单</router-link>
    </div>
  </div>
</template>


<script>
export default {
};
</script>
