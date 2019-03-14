<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
.padding-wrap {
  padding-bottom: 0.8rem;
}
.address-wrap {
  padding: 0.15rem 0.1rem 0.18rem;
  display: flex;
  align-items: center;
  background: url("~@/assets/addrline.png") #fff repeat-x bottom center;
  background-size: auto 0.03rem;

  .confirmoder_address_info {
    flex: 1;
  }

  ul li:last-of-type {
    color: #666;
  }
  i {
    padding-right: 0.1rem;
    font-size: 0.2rem;
    font-weight: 600;
  }
}

.order-info-wrap {
  background: #fff;
  margin-top: 0.1rem;

  .item-wrap {
    width: 95%;
    margin: auto;
    padding: 0.1rem 0;
    display: flex;
    @include border-top();
  }
}

.footer {
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  -moz-box-shadow: 0px -0.5px 5px #ece9e9;
  -webkit-box-shadow: 0px -0.5px 5px #ece9e9;
  box-shadow: 0px -0.5px 5px #ece9e9;

  .footer-left {
    padding-right: 0.12rem;
  }

  .footer-btn {
    border: none;
    color: #fff;
    height: 0.5rem;
    min-width: 0.9rem;
    background: $color-primary-gradient;
    // border: 1px solid $color-primary;

    &:disabled {
      background: $color-primary-gradient-disabled;
      // border: 1px solid $color-primary-disabled;
    }

    &:not(:disabled):active {
      background: $color-primary-gradient-active;
      // border: 1px solid $color-primary-active;
    }
  }
}

.item-name {
  font-size: 0.13rem;
  font-weight: 500;
  max-height: 0.34rem;
  line-height: 0.17rem;
  overflow: hidden;
}

.total {
  width: 95%;
  margin: auto;
  text-align: right;
  padding: 0.15rem 0;
}
.strong {
  color: $color-primary;
  font-weight: 600;
}

input {
  margin: auto;
  width: 100%;
  border: 0;
  height: 100%;
}
</style>

<template>
  <div class="confirmorder-page page">
    <c-header :title="'确认订单'"></c-header>
    <div class="c-page-body">
      <div class="padding-wrap c-header-pd">
        <div @click="selectAddress" class="address-wrap">
          <i class="iconfont icon-location_light"></i>
          <div class="confirmoder_address_info">
            <template v-if="orderInfo.address">
              <div>
                <span>{{orderInfo.address.name}}</span>
                <span>{{orderInfo.address.phone}}</span>
              </div>
              <div>
                <span>{{orderInfo.address.province}}</span>
                <span>{{orderInfo.address.city}}</span>
                <span>{{orderInfo.address.area}}</span>
                <span>{{orderInfo.address.detailAddr}}</span>
              </div>
            </template>
            <div v-else>请选择地址</div>
          </div>
          <p style="transform:rotateZ(180deg);display: inline-block;">
            <i style="font-size:16px;padding-right:0.1rem;" class="iconfont icon-back_light"></i>
          </p>
        </div>
        <div class="order-info-wrap">
          <div style="width:95%;margin:auto;padding:0.1rem 0;">
            <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
            <span>母婴用品商城</span>
          </div>
          <div
          class="item-wrap"
            v-for="(item,index) in orderInfo.orderItems"
            :key="index"
          >
            <div>
              <img style="width:0.8rem;height:0.8rem;" :src="item.item.imgList[0]" alt>
            </div>
            <div style="flex:1;padding:0 0.1rem;font-size:0.13rem;font-weight:500">
              <div class="item-name">{{item.item.name}}</div>
              <p style="color:#999;font-size:12px;margin-top: 0.05rem;">{{item.sku.propvalueTextList}}</p>
            </div>
            <div style="text-align:right;">
              <span v-if="item.flash && item.flash.status == 1">￥{{item.flash.sku.flashPrice}}</span>
              <span v-else>￥{{item.sku.price}}</span>
              <div style="color:#999;font-size:12px;">
                <span>x{{item.quantity}}</span>
              </div>
            </div>
          </div>
          <c-cell-list>
            <c-cell name="商品小计" :value="`￥${orderInfo.itemFee || 0}`" :isLink="false"></c-cell>
            <c-cell name="运费" :value="`￥${orderInfo.postFee || 0 }`" :isLink="false"></c-cell>
            <c-cell
              v-if="orderInfo.couponList && orderInfo.couponList.length > 0"
              name="优惠券"
              :value="`${orderInfo.coupon? orderInfo.coupon.coupon.name : ''}`"
              @click="popupVisible=true"
            ></c-cell>
            <c-cell name="买家留言：">
              <input slot="right" type="text" v-model="params.remark" placeholder="50字以内（选填）">
            </c-cell>
          </c-cell-list>
          <!--  -->
          <p class="total" style>
            共
            <span class="strong">{{orderInfo.itemCount}}</span> 件商品
            <span style="padding-left:0.05rem;">
              合计：
              <span class="strong">￥{{orderInfo.orderFee}}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <span>需付:</span>
        <span class="strong">￥{{orderInfo.orderFee}}</span>
      </div>
      <button class="footer-btn" @click="createOrder">提交订单</button>
    </div>
    <c-select-popup
      title="选择优惠券"
      v-model="params.couponId"
      :data="orderInfo.couponList"
      :visible="popupVisible"
      @visibleChange="popupVisible = $event"
      @select="handleCouponSelect"
      nameKey="coupon.name"
      valueKey="id"
    ></c-select-popup>
  </div>
</template>

<script>
import services from "@/services";
import routerCachePage from "@/routerCache/page";

export default {
  mixins: [routerCachePage()],
  data() {
    return {
      popupVisible: false,
      params: {},
      orderInfo: {}
    };
  },
  computed: {
    orderFee() {
      let { itemFee, postFee } = this.orderInfo;
      if (!itemFee) return 0;
      return itemFee + postFee;
    }
  },
  methods: {
    async buildOrder() {
      try {
        let res = await services.buildOrder({
          params: this.params
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;

        this.params.addressId = this.orderInfo.address
          ? this.orderInfo.address.id
          : "";
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async createOrder() {
      try {
        this.$showLoading();
        let res = await services.createOrder({
          params: this.params
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.$router.replace({
          path: "/cashier",
          query: { orderId: res.data.orderId, from: "confirmOrder" }
        });
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    handleCouponSelect(item) {
      this.params.couponId = item.id;

      this.buildOrder();
    },
    $watchEvents() {
      return {
        selectAddress(addressId) {
          this.params.addressId = addressId;
        }
      };
    },
    selectAddress() {
      this.$router.push({ path: "/myaddress", query: { isSelect: 1 } });
    }
  },
  created() {
    //[
    //   {
    //     "shopcartId": 1,
    //     "itemId": 1,
    //     "skuId": 2,
    //     "quantity": 1
    //   }
    // ]
    if (!this.$restored) {
      let itemParams = JSON.parse(this.$route.query.p);

      this.params = {
        addressId: "",
        couponId: "",
        itemParams,
        remark: ""
      };
      console.log(this.params);

      this.buildOrder();
    } else {
      this.buildOrder();
    }
  }
};
</script>
