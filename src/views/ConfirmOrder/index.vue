<style scoped lang="scss">
@import "~@/css/var";
.c-page-body {
  background: #f3f3f3;
  padding-bottom: 0.8rem;
}
.confirmoder_one {
  padding: 0.18rem 0.1rem 0.21rem;
  display: flex;
  align-items: center;
  background: url("~@/assets/addrline.png") #fff repeat-x bottom center;
  background-size: auto 0.03rem;
}

.confirmoder_address_info {
  flex: 1;
}
.confirm_three {
  background: #fff;
  margin-top: 0.1rem;
}
.confirm_four {
  background: #fff;
  padding: 0 0.1rem;
}
.confirm_five {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0 0.1rem;
  color: #999;
}
.confirm_six {
  width: 100%;
  //   padding: 0.1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  -moz-box-shadow: 0px -0.5px 5px #ece9e9;
  -webkit-box-shadow: 0px -0.5px 5px #ece9e9;
  box-shadow: 0px -0.5px 5px #ece9e9;
}
.confirmoder_one ul li:last-of-type {
  color: #666;
}
.confirmoder_one i {
  padding-right: 0.1rem;
  font-size: 0.2rem;
  font-weight: 600;
}
.confirm_four ul li {
  display: flex;
  padding: 0.1rem 0;
}
.confirm_four ul li div:first-of-type {
  margin-right: 0.2rem;
}
.confirm_four ul li div:last-of-type {
  flex: 1;
  text-align: end;
}
.confirm_five p span:first-of-type {
  display: inline-block;
  padding-right: 0.1rem;
}
.confirm_six span {
  display: inline-block;
}
.confirm_six span:first-of-type,
.confirm_six span:nth-child(2) {
  color: $color-primary;
}
.confirm_six span:last-of-type {
  background: $color-primary;
  color: #fff;
  padding: 0.1rem 0.2rem;
  margin-left: 0.1rem;
}
.total {
  width: 95%;
  margin: auto;
  text-align: right;
  padding: 0.1rem 0;
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
      <router-link to="/myaddress" tag="div" class="confirmoder_one">
        <i class="iconfont icon-location_light"></i>
        <ul class="confirmoder_address_info">
          <li>
            <span>王伊</span>
            <span>18570414200</span>
          </li>
          <li>
            <span>广东省深圳市宝安区</span>
            <span>观澜街道</span>
            <span>招商观园18-6A</span>
          </li>
        </ul>
        <p style="transform:rotateZ(180deg);display: inline-block;">
          <i style="font-size:16px;padding-right:0.1rem;" class="iconfont icon-back_light"></i>
        </p>
      </router-link>
      <div class="confirm_three">
        <!--  -->
        <div style="width:95%;margin:auto;padding:0.1rem 0;">
          <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
          <span>母婴用品商城</span>
        </div>
        <!--  -->
        <div
          style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-top:1px solid #F4F4F4;"
          v-for="(item,index) in orderInfo.orderItems"
          :key="index"
        >
          <div style="width:20%;">
            <img style="width:0.7rem;height:0.7rem;" :src="item.item.imgList[0]" alt>
          </div>
          <div style="width:65%;padding:0 0.1rem">
            <span>{{item.item.name}}</span>
            <p style="color:#999;font-size:12px;">{{item.sku.propValues}}</p>
          </div>
          <div style="width:15%;text-align:right;">
            <span>￥{{item.sku.price}}</span>
            <div style="color:#999;font-size:12px;">
              <span>x{{item.quantity}}</span>
            </div>
          </div>
        </div>
        <div class="confirm_four">
          <ul>
            <li style="border-bottom: 1px solid #f4f4f4;">
              <div>商品小计</div>
              <div>
                <span>￥{{orderInfo.itemFee}}</span>
              </div>
            </li>
            <li style="border-bottom: 1px solid #f4f4f4;">
              <div>运费</div>
              <div>￥{{orderInfo.postFee}}</div>
            </li>
            <li style="border-bottom: 1px solid #f4f4f4;">
              <div>优惠券</div>
              <div>没有可用优惠券</div>
            </li>
            <li style="border-bottom: 1px solid #f4f4f4;">
              <div>买家留言：</div>
              <div>
                <input placeholder="50字以内（选填）">
              </div>
            </li>
          </ul>
        </div>
        <!--  -->
        <p class="total" style>
          共
          <span class="strong">{{orderInfo.itemCount}}</span> 件商品
          <span style="padding-left:0.05rem;">
            合计：
            <span class="strong">￥{{orderFee}}</span>
          </span>
        </p>
      </div>
      <!--  -->
      <!--  -->
      <div class="confirm_six">
        需付：
        <span class="strong">￥{{orderFee}}</span>
        <span>提交订单</span>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
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
    async buildOrder(params) {
      try {
        let res = await services.buildOrder({
          params
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async createOrder() {
      try {
        let res = await services.buildOrder({
          params
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    let params = JSON.parse(this.$route.query.p);

    console.log(params);

    // this.itemList = JSON.parse(param);

    this.buildOrder(params);
  }
};
</script>
