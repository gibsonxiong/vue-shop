<style scoped lang="scss">
@import "~@/css/var";
.c-page-body {
  padding-bottom: 0.8rem;
}
.address-wrap {
  padding: 0.18rem 0.1rem 0.21rem;
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
}

.footer {
  width: 100%;
  background: #fff;
  position: fixed;
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
    background: $color-primary;
    border: 1px solid $color-primary;

    &:disabled {
      background: $color-primary-disabled;
      border: 1px solid $color-primary-disabled;
    }
  }
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
  <div class="confirmorder-page">
    <c-header :title="'确认订单'"></c-header>
    <div class="c-page-body header-pd">
      <router-link to="/myaddress" tag="div" class="address-wrap">
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
        </div>
        <p style="transform:rotateZ(180deg);display: inline-block;">
          <i style="font-size:16px;padding-right:0.1rem;" class="iconfont icon-back_light"></i>
        </p>
      </router-link>
      <div class="order-info-wrap">
        <div style="width:95%;margin:auto;padding:0.1rem 0;">
          <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
          <span>母婴用品商城</span>
        </div>
        <div
          style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-top:1px solid #F4F4F4;"
          v-for="(item,index) in orderInfo.orderItems"
          :key="index"
        >
          <div>
            <img style="width:0.8rem;height:0.8rem;" :src="item.item.imgList[0]" alt>
          </div>
          <div style="flex:1;padding:0 0.1rem;font-size:0.12rem;">
            <span>{{item.item.name}}</span>
            <p style="color:#999;font-size:12px;">{{item.sku.propvalueTextList}}</p>
          </div>
          <div style="text-align:right;">
            <span>￥{{item.sku.price}}</span>
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
            <input slot="right" type="text" v-model="params.remark" placeholder="50字以内（选填）"/>
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
      @popupVisibleChange="popupVisible = $event"
      @select="handleCouponSelect"
      nameKey="coupon.name"
      valueKey="id"
    ></c-select-popup>
  </div>
</template>

<script>
import services from "@/services";
import routerCachePage from '@/routerCache/page';

export default {
  mixins:[routerCachePage()],
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
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async createOrder() {
      try {
        let res = await services.createOrder({
          params: this.params
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$router.push({path:'/cashier',query:{orderId:res.data.orderId}})
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    handleCouponSelect(item) {
      this.params.couponId = item.id;

      this.buildOrder();
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
    if(!this.$restored){
      let itemParams = JSON.parse(this.$route.query.p);
  
      this.params = {
        addressId: "",
        couponId: "",
        itemParams,
        remark:''
      };
      console.log(this.params);
  
      this.buildOrder();
    }
  }
};
</script>
