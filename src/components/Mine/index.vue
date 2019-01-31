<style lang="scss" scoped>
.c-mine {
  a{
    width: 100%;
    padding: 5px 0px;
    display: block;
    text-align: center;
  }
}
</style>

<template>
  <div class="c-mine">
    <c-header :title="'我的'" :backType="0">
    </c-header>
    <div class="c-page-body header-pd tab-pd">
      <router-link to="/order">我的订单</router-link>
      <router-link to="/footprint">我的足迹</router-link>
      <router-link to="/mylove">我的关注</router-link>
      <router-link to="/shippingaddress">收货地址管理</router-link>
      <router-link to="/recharge">充值</router-link>
      <router-link to="/rechargerecord">充值记录</router-link>
      <router-link to="/regist">注册</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/coupon">优惠券领取中心</router-link>
    </div>
  </div>
</template>


<script>
export default {
};
</script>
