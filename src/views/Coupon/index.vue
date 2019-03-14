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
    
    .coupon_lists {
      flex: 1;
      overflow: auto;
      padding: pxTorem(30) pxTorem(20);
    }
  }
  .r_surplus {
    color: #777;
    font-size: 0.12rem;
  }
  .receive-btn {
    padding: 0.015rem 0.13rem;
    background: transparent;
    border: 1px solid $color-primary;
    color: $color-primary;
    overflow: hidden;
    border-radius: 0.2rem;
    transition: all 0.3s ease-in-out;
    font-size: 0.12rem;
    margin-top: 0.08rem;
    &:active {
      border-color: $color-primary-active;
      color: $color-primary-active;
    }
  }
}
</style>

<template>
  <div class="coupon_page page">
    <c-header :title="'领券中心'" :backType="1"></c-header>
    <div class="c-page-body header-pd">
      <div class="coupon_wrap">
        <div class="coupon_lists" v-if="list.length > 0">
          <div class="list_box">
            <c-coupon-item
              v-for="(val,index) in list"
              :key="index"
              :name="val.name"
              :desc="val.desc"
              :deductPrice="val.deductPrice"
              :limitPrice="val.limitPrice"
              :startTime="val.startTime"
              :endTime="val.endTime"
            >
              <div class="r_surplus">{{ val.quantity - val.sendQuantity}}/{{val.quantity}}张</div>
              <button
                class="receive-btn"
                v-if="val.sendQuantity < val.quantity"
                @click="gainCoupon(val.id)"
              >领取</button>
              <div style="font-size: 0.12rem;
    margin-top: 0.08rem;" v-else>已领完</div>
            </c-coupon-item>

          </div>
        </div>
        <c-empty-hint v-if="list.length == 0 && !loading" icon="icon-youhuiquan" hint="没有可领取的优惠券"></c-empty-hint>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      list: [],
      loading: false
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
        this.loading = true;
        this.$showLoading();
        let res = await services.fetchCouponList();

        if (services.$isError(res)) throw new Error(res.message);

        this.loading = false;
        this.$hideLoading();
        this.list = res.data;
      } catch (err) {
        this.loading = false;
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    async gainCoupon(couponId) {
      try {
        this.$showLoading();
        let res = await services.gainCoupon({
          couponId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.$toast(res.message);

        this.fetchCouponList();
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  }
};
</script>
