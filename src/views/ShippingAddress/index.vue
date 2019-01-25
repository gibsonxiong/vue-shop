<style scoped lang="scss">
.c-page-body {
  background: #f3f3f3;
}
.shippingaddress_con{
  padding: 0.1rem;
  background: #fff;
  margin-top: 0.1rem;
}
.shippingaddress_con div:first-of-type{
  border-bottom:1px solid #f4f4f4;
  padding-bottom: 0.1rem;
}
.shippingaddress_con div:last-of-type{
  display: flex;
  align-items: center;
  padding-top: 0.1rem;
  color: #666;
}
.shippingaddress_con div:first-of-type p:last-of-type{
  color: #666;
}

i{
  padding-right: 0.02rem;
}
</style>

<template>
  <div class="shippingaddress-page">
    <c-header :title="'收货地址'"></c-header>
    <div class="c-page-body header-pd">
      <div class="shippingaddress_con">
          <!--  -->
          <div>
            <p>
              <span>王伊</span>
              <span>18570414200</span>
            </p>
            <p>
              <span>广东省深圳市宝安区</span>
              <span>观澜街道</span>
              <span>招商观园18-6A</span>
            </p>
          </div>
          <!--  -->
          <div>
            <p style="width:65%">设置默认</p>
            <p style="width:35%;text-align:right;">
              <i class="iconfont icon-post"></i><span style="padding-right:0.1rem;">编辑</span>
              <i class="iconfont icon-delete_light"></i><span>删除</span>
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
