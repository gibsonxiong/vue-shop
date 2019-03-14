<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";

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
      display: flex;
      .til_list {
        padding: pxTorem(25) 0px;
        text-align: center;
        flex: 1;
      }
      .til_list_active {
        color: $color-primary;
        @include border-bottom(2px,$color-primary);
      }
    }
    .coupon_lists {
      flex: 1;
      overflow: auto;
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
            background: $color-primary;
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
            }
          }

          &.disabled {
            .item_l {
              background: $color-primary-disabled;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="coupon_page page">
    <c-header :title="'我的优惠券'" :backType="1">
      <!-- <div slot="right" class="header_r">
        <i class="iconfont icon-my_light"></i>
      </div> -->
    </c-header>
    <div class="c-page-body header-pd">
      <div class="coupon_wrap">
        <div class="coupon_til">
          <div
            class="til_list"
            :class="{'til_list_active':status === 'unused'}"
            @click="changeStatus('unused')"
          >未使用</div>
          <div
            class="til_list"
            :class="{'til_list_active':status === 'used'}"
            @click="changeStatus('used')"
          >已使用</div>
          <div
            class="til_list"
            :class="{'til_list_active':status === 'expired'}"
            @click="changeStatus('expired')"
          >已过期</div>
        </div>

        <div class="coupon_lists" v-if="list.length > 0">
          <div class="list_box">
            <c-coupon-item
              v-for="(val,index) in list"
              :key="index"
              :name="val.coupon.name"
              :desc="val.coupon.desc"
              :deductPrice="val.coupon.deductPrice"
              :limitPrice="val.coupon.limitPrice"
              :startTime="val.coupon.startTime"
              :endTime="val.coupon.endTime"
              :disabled="val.status !== 'unused'"
            >
            </c-coupon-item>
          </div>
        </div>
        <c-empty-hint v-if="list.length == 0 && !loading" icon="icon-youhuiquan" hint="您没有此类优惠券">
        </c-empty-hint>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      loading:false,
      status: "unused", //使用与否
      list: [] //当前所展示数据
    };
  },
  filters: {},
  created() {
    this.fetchList();
  },
  methods: {
    changeStatus(status) {
      if(this.status == status) return;
      //使用按钮点击
      this.status = status;
      this.fetchList();
    },
    async fetchList() {
      let { status } = this;
      try {
        this.list = [];
        this.loading = true;
        this.$showLoading();
        let res = await services.fetchUserCouponList({
          status
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.loading = false;
        this.$hideLoading();
        this.list = res.data;
      } catch (err) {
        this.loading = false;
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  }
};
</script>
