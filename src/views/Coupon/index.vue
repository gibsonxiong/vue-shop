<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
@import "~@/css/common";
.coupon_page {
    box-sizing: border-box;
  .header_r{
      i{
          font-size: pxTorem(44);
      }
  }
  .coupon_wrap{
    display: flex;
    flex-direction: column;
    height: 100%;
    .coupon_til{
        background: #fff;
        padding: pxTorem(6) pxTorem(3);
        display: flex;
        .til_list{
            padding: pxTorem(19) pxTorem(20);
            font-weight: bold;
        }
        .til_list_active{
            color: #FE5455;
            @include border-bottom(#FE5455,2px);
        }
    }
    .coupon_lists{
        flex: 1;
        overflow: auto;
        background: #EFEFF4;
    }
  }
}
</style>

<template>
  <div class="coupon_page">
    <c-header :title="'优惠券领取中心'" :backType="1">
      <div slot="right" class="header_r">
          <i class="iconfont icon-my_light"></i>
      </div>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="coupon_wrap">
          <div class="coupon_til">
            <div class="til_list til_list_active">
                全部优惠券
            </div>
          </div>
          <div class="coupon_lists">

          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      
    };
  },
  created() {},
  methods: {
    
  }
};
</script>
