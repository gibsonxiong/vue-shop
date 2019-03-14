<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
.orderDetail-page {
}
.padding-wrap {
  padding-bottom: 0.8rem;
}
.oderD_one {
  color: #fff;
  text-align: center;
  padding: 0.15rem 0;
  background: $color-primary-gradient;
  min-height: 1.2rem;
  @include flexbox(center);
}
.oderD_two {
  margin-top: 0.1rem;
  padding: 0.15rem;
  background: #fff;
  display: flex;
  align-items: center;
}
.oderD_three,
.oderD_four {
  background: #fff;
  margin-top: 0.1rem;
}
.oderD_four {
  background: #fff;
  margin-top: 0rem;
  padding: 0.1rem;
}
.oderD_five {
  background: #fff;
  margin-top: 0.12rem;
  padding: 0.1rem 0.1rem 0.2rem;
  color: #999;
}
.footer {
  width: 100%;
  padding: 0.12rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  -moz-box-shadow: 0px -0.5px 5px #ece9e9;
  -webkit-box-shadow: 0px -0.5px 5px #ece9e9;
  box-shadow: 0px -0.5px 5px #ece9e9;
}
.oderD_one .main {
  font-size: 0.17rem;
  font-weight: 500;
  padding: 0.05rem 0;
}
.oderD_one .sub {
  font-size: 0.13rem;
}
.oderD_two ul li:last-of-type {
  color: #666;
}
.oderD_two i {
  padding-right: 0.1rem;
}
.oderD_four ul li {
  display: flex;
}
.oderD_four ul li div:first-of-type {
  width: 85%;
}
.oderD_four ul li div:last-of-type {
  width: 15%;
  text-align: end;
}
.oderD_five p span:first-of-type {
  display: inline-block;
  padding-right: 0.1rem;
}

.refund_btn-wrap {
  width: 100%;
  padding: 0 0.1rem 0.12rem;
  text-align: right;
  margin-top: -0.12rem;
}

.item-wrap {
  @include border-bottom();
}
</style>

<template>
  <div class="orderDetail-page page">
    <c-header :title="'订单详情'"></c-header>
    <div class="c-page-body header-pd">
      <div class="padding-wrap">
        <!--  -->
        <div class="oderD_one">
          <template v-if="orderInfo.status == '1'">
            <div>
              <p class="main">等待买家付款</p>
              <p class="sub">剩{{dd > 0 ? dd+'天':''}}{{hh}}小时{{mm}}分自动关闭</p>
            </div>
          </template>
          <template v-else-if="orderInfo.status == '2'">
            <div>
              <p class="main">买家已付款</p>
            </div>
          </template>
          <template v-else-if="orderInfo.status == '3'">
            <div>
              <p class="main">卖家已发货</p>
              <p class="sub">剩{{dd > 0 ? dd+'天':''}}{{hh}}小时{{mm}}分自动确认</p>
            </div>
          </template>
          <template v-else-if="orderInfo.status == '4' || orderInfo.status == '5'">
            <div>
              <p class="main">交易成功</p>
            </div>
          </template>
          <template v-else-if="orderInfo.status == '9'">
            <div>
              <p class="main">交易关闭</p>
              <p class="sub">{{orderInfo.cancelReason}}</p>
            </div>
          </template>
        </div>
        <!--  -->
        <div class="oderD_two">
          <i class="iconfont icon-location_light"></i>
          <ul>
            <li>
              <span>{{orderInfo.receiverName}}</span>
              <span>{{orderInfo.receiverPhone}}</span>
            </li>
            <li>
              <span>{{orderInfo.receiverProvince}}{{orderInfo.receiverCity}}{{orderInfo.receiverArea}}</span>
              <span>{{orderInfo.receiverDetailAddr}}</span>
            </li>
          </ul>
        </div>
        <div class="oderD_three">
          <!--  -->
          <div style="width:95%;margin:auto;padding:0.1rem 0;">
            <i class="iconfont icon-shoplight" style="padding-right:0.03rem"></i>
            <span>母婴用品商城</span>
          </div>
          <!--  -->
          <div class="item-wrap" v-for="(orderItem,index) in orderInfo.order_items" :key="index" @click="$router.push(`/items/${orderItem.itemId}`)">
            <div
              style="width:95%;margin:auto;padding:0.12rem 0;display: flex;"
            >
              <div style="width:20%;">
                <div style="width:0.7rem;height:0.7rem;" class="c-img-box box-bg">
                  <img  v-lazy="orderItem.itemImg" alt>
                </div>
              </div>
              <div style="width:65%;padding:0 0.1rem">
                <span style="font-size:0.13rem;font-weight:500;">{{orderItem.itemName}}</span>
                <p style="color:#999;font-size:0.12rem;">{{orderItem.itemPropvalues}}</p>
              </div>
              <div style="width:15%;text-align:right;">
                <span>￥{{orderItem.itemPrice}}</span>
                <div style="color:#999;font-size:12px;">
                  <span>×{{orderItem.quantity}}</span>
                </div>
              </div>
            </div>
            <!-- 退款按钮 -->
            <p v-if="orderInfo.status==2" class="refund_btn-wrap">
              <button
                class="c-btn"
                @click.stop="$router.push({path:'/refund',query:{orderId:orderId, orderItemId:orderItem.id}})"
              >退款</button>
            </p>
          </div>
        </div>
        <!--  -->
        <div class="oderD_four">
          <ul>
            <li>
              <div>商品小计</div>
              <div>￥{{orderInfo.itemFee}}</div>
            </li>
            <li>
              <div>运费</div>
              <div>￥{{orderInfo.postFee}}</div>
            </li>
            <li v-if="orderInfo.discountFee > 0">
              <div>优惠券减免</div>
              <div>-￥{{orderInfo.discountFee}}</div>
            </li>
            <li>
              <div>实付费(含运费)</div>
              <div style="color:$color-primary;">￥{{orderInfo.orderFee}}</div>
            </li>
          </ul>
        </div>
        <!--  -->
        <div class="oderD_five">
          <h2 style="font-size:0.14rem;margin-bottom:0.12rem;color:#444;font-weight:500;">订单信息</h2>
          <p>
            <span>订单编号</span>
            <span>{{orderInfo.orderNo}}</span>
          </p>
          <p>
            <span>创建时间</span>
            <span>{{orderInfo.createTime | date('yyyy-MM-dd hh:mm:ss')}}</span>
          </p>
          <p v-if="orderInfo.payTime">
            <span>付款时间</span>
            <span>{{orderInfo.payTime | date('yyyy-MM-dd hh:mm:ss')}}</span>
          </p>
          <p v-if="orderInfo.deliverTime">
            <span>发货时间</span>
            <span>{{orderInfo.deliverTime | date('yyyy-MM-dd hh:mm:ss')}}</span>
          </p>
          <p v-if="orderInfo.endTime">
            <span>成交时间</span>
            <span>{{orderInfo.endTime | date('yyyy-MM-dd hh:mm:ss')}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="footer">
      <template v-if="orderInfo.status==1">
        <button class="c-btn" @click.stop="cancelOrder(orderInfo.id)">取消订单</button>
        <button
          class="c-btn btn-primary"
          @click.stop="$router.push({path:'/cashier', query:{orderId:orderInfo.id}})"
        >付款</button>
      </template>
      <template v-else-if="orderInfo.status==2">
        <!-- <button class="c-btn">申请开票</button> -->
        <button class="c-btn btn-primary" @click.stop="remindDeliver(orderInfo.id)">提醒发货</button>
      </template>
      <template v-else-if="orderInfo.status==3">
        <button class="c-btn" @click.stop="logistics(orderInfo.id)">查看物流</button>
        <button class="c-btn btn-primary" @click.stop="confirmReceive(orderInfo.id)">确认收货</button>
      </template>
      <template v-else-if="orderInfo.status==4">
        <button class="c-btn" @click.stop="removeOrder(orderInfo.id)">删除订单</button>
        <button class="c-btn btn-primary" @click.stop="rateOrder(orderInfo.id)">评价</button>
      </template>
      <template v-else-if="orderInfo.status==5">
        <button class="c-btn" @click.stop="removeOrder(orderInfo.id)">删除订单</button>
      </template>
      <template v-else-if="orderInfo.status==9">
        <button class="c-btn" @click.stop="removeOrder(orderInfo.id)">删除订单</button>
      </template>
    </div>
  </div>
</template>

<script>
import { Picker } from "mint-ui";
import services from "@/services";
import filter from "@c/filter";
import utils from "@/utils";

export default {
  filters: {
    date: filter.date
  },
  data() {
    return {
      orderId: "",
      orderInfo: {},

      dd: "0",
      hh: "0",
      mm: "0"
    };
  },
  methods: {
    async fetchOrderInfo() {
      try {
        let { orderId } = this;
        let res = await services.fetchOrderInfo({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;
        if (this.orderInfo.status === "1") {
          let endTime = utils.adjustDate(
            new Date(this.orderInfo.createTime),
            "d",
            1
          );
          this.countdown(endTime);
        }
        if (this.orderInfo.status === "3") {
          let endTime = utils.adjustDate(
            new Date(this.orderInfo.deliverTime),
            "d",
            1
          );
          this.countdown(endTime);
        }
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    countdown(endTime) {
      let { d, h, m } = utils.countdown(endTime);

      this.dd = d;
      this.hh = h;
      this.mm = m;

      setTimeout(() => {
        this.countdown(endTime);
      }, 1000);
    },

    //查看物流
    logistics() {
      this.$router.push({
        path: "/logistics",
        query: {
          orderId:this.orderId
        }
      });
    },

    //取消订单
    async cancelOrder(orderId) {
      let result = await this.$popup.select({
        data: [
          "我不想买了",
          "缺货",
          "信息填写错误，重新拍",
          "线下交易",
          "其他原因"
        ]
      });

      console.log(result);

      if (result[0] === "cancel") return;

      try {
        let res = await services.cancelOrder({
          orderId,
          cancelReason: result[1]
        });

        if (services.$isError(res)) throw new Error(res.message);

        // this.fetchOrderList();
        this.fetchOrderInfo();
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    //删除订单
    async removeOrder(orderId) {
      try {
        let res = await services.removeOrder({ orderId });

        if (services.$isError(res)) throw new Error(res.message);

        // this.fetchOrderList();
        this.$router.back();
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    //提醒发货
    async remindDeliver(orderId) {
      try {
        let res = await services.remindDeliver({ orderId });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    //确认收货
    async confirmReceive(orderId) {
      try {
        let res = await services.confirmReceive({ orderId });

        if (services.$isError(res)) throw new Error(res.message);

        this.fetchOrderInfo();
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    //评价
    rateOrder(orderId) {
      this.$router.push({ path: "/remark", query: { orderId } });
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;

    this.fetchOrderInfo();
  }
};
</script>
