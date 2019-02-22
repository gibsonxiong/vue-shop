<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
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
          margin-bottom: pxTorem(30);
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
            .r_til {
              font-size: pxTorem(34);
            }
            .r_des {
              color: #666666;
            }
            .r_surplus {
              color: #b3b3b3;
              font-weight: 600;
            }
            .r_footer {
              color: #999999;
              .coupon_receive{
                  padding: .03rem .13rem;
                  background: $color-primary-disabled;
                  color: #fff;
                  overflow: hidden;
                  border-radius: .05rem;
                  transition: all .3s ease-in-out;
                  &:active{
                    background: #666666;
                  }
              }
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
      
    </c-header>
    <div class="c-page-body header-pd">
      <div class="coupon_wrap">
        <!-- <div class="coupon_til">
          <div class="til_list til_list_active">全部优惠券</div>
        </div>-->
        <div class="coupon_lists">
          <ul class="list_box">
            <li class="list_item" v-for="(val,index) in list" :key="index">
              <div class="item_l chen_center_absolute_column">
                <p class="num">￥{{val.deductPrice}}</p>
                <p class="des">{{ val.deductPrice == 0 ? '无门槛' : `满${val.deductPrice}使用`}}</p>
              </div>
              <div class="item_r">
                <p class="r_til">{{val.name}}</p>
                <p class="r_des">{{val.desc}}</p>
                <p class="r_surplus">
                  剩余
                  <span>{{ val.quantity - val.sendQuantity}}</span>/
                  <span>{{val.quantity}}</span>张
                </p>
                <div class="chen_center_absolute r_footer">
                  <div>即领取日一天内有效</div>
                  <div class="coupon_receive" v-if="val.sendQuantity < val.quantity" 
                  @click="gainCoupon(val.id)"
                  >领取</div>
                  <div v-else>已发完</div>
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
import services from "@/services";

export default {
  data() {
    return {
      list: []
    };
  },
  computed: {},
  watch: {},
  created() {
    this.fetchCouponList();
  },
  methods: {
    async fetchCouponList() {
      try {
        let res = await services.fetchCouponList();

        if (services.$isError(res)) throw new Error(res.message);

        this.list = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async gainCoupon(couponId) {
      console.log(couponId);
      try {
        let res = await services.gainCoupon({
          couponId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  }
};
</script>
