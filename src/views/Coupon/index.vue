<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
@import "~@/css/common";
.coupon_page {
  box-sizing: border-box;
  .header_r {
    i {
      font-size: pxTorem(44);
    }
  }
  .coupon_wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    .coupon_til {
      background: #fff;
      padding: pxTorem(6) pxTorem(3);
      display: flex;
      .til_list {
        padding: pxTorem(19) pxTorem(20);
        font-weight: bold;
      }
      .til_list_active {
        color: #fe5455;
        @include border-bottom(#fe5455, 2px);
      }
    }
    .coupon_lists {
      flex: 1;
      overflow: auto;
      background: #efeff4;
      padding: pxTorem(30) pxTorem(20);
      .list_box {
        .list_item {
          display: flex;
          justify-content: center;
          border-radius: 4px;
          overflow: hidden;
          padding-bottom: pxTorem(30);
          .item_l {
            width: 26%;
            background: #fe5455;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: pxTorem(30) 0rem;
            color: #fff;
            .num {
              font-size: 12px;
              span {
                font-size: pxTorem(38);
                font-weight: bold;
              }
            }           
          }
          .item_r {
            flex: 1;
            background: #fff;
            padding: pxTorem(26) pxTorem(30) pxTorem(18) pxTorem(18);
            .r_til{
                font-size: pxTorem(34);
            }
            .r_des{
                color: #666666;
            }
            .r_surplus{
                color: #B3B3B3;
                font-weight: 600;
            }
            .r_footer{
                color: #999999;
            }
          }
        }
      }
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
          <div class="til_list til_list_active">全部优惠券</div>
        </div>
        <div class="coupon_lists">
          <ul class="list_box">
            <li class="list_item" v-for="(val,index) in 10" :key="index">
              <div class="item_l chen_center_absolute_column">
                <p class="num">￥
                  <span>20</span>
                </p>
                <p class="des">无金额门槛</p>
              </div>
              <div class="item_r">
                  <p class="r_til">双十活动抵扣券</p>
                  <p class="r_des">消费任意金额立减20</p>
                  <p class="r_surplus">剩余<span>1</span>/<span>0</span>张</p>
                  <div class="chen_center_absolute r_footer">
                      <div>即领取日一天内有效</div>
                      <div>已发完</div>
                  </div>
              </div>
            </li>
          </ul>
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
  created() {},
  methods: {}
};
</script>
