<style scoped lang="scss">
.orderDetail-page {
}
.c-page-body {
  background: #f3f3f3;
  padding-bottom: 0.8rem;
}
.oderD_one {
  color: #fff;
  text-align: center;
  padding: 0.15rem 0;
  background: linear-gradient(to right, #ffb43e, #fd9526);
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
  margin-top: 0.1rem;
  padding: 0.1rem;
}
.oderD_five {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0.1rem;
  color: #999;
}
.footer {
  width: 100%;
  padding: 0.1rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  -moz-box-shadow: 0px -0.5px 5px #ece9e9;
  -webkit-box-shadow: 0px -0.5px 5px #ece9e9;
  box-shadow: 0px -0.5px 5px #ece9e9;
}
.oderD_one p:first-of-type {
  font-size: 16px;
  padding: 0.05rem 0;
}
.oderD_one p:last-of-type {
  font-size: 14px;
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
.footer span {
  border: 1px solid #bcbcbc;
  border-radius: 1rem;
  padding: 0.05rem 0.1rem;
  display: inline-block;
  color: #777;
}
.refund_btn {
  width: 100%;
  padding: 0.1rem;
  text-align: right;
}
.refund_btn span {
  border: 1px solid #bcbcbc;
  border-radius: 1rem;
  padding: 0.05rem 0.1rem;
  color: #777;
}
</style>
<style>
.picker {
  background: #fff;
  color: #fff;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.picker-center-highlight {
  text-align: center !important;
}
.picker-item,
.picker-center-highlight {
  height: 30px !important;
  margin-top: 0px !important;
  line-height: 30px !important;
}
.picker-items {
  text-align: center !important;
}
.picker-items,
.picker-slot,
.picker-slot-right {
  text-align: center !important;
}
.picker-slot-wrapper {
  height: 150px !important;
}
.picker-slot.picker-slot-right {
  text-align: center !important;
}
.mt-picker {
  position: absolute;
  background: #fff;
  padding: 0.05rem 0.1rem;
  left: 0;
  right: 0;
  z-index: 11;
  text-align: right;
  bottom: 150px;
}
.picker-center-highlight {
  width: auto !important;
}
</style>

<template>
  <div class="orderDetail-page">
    <c-header :title="'订单详情'"></c-header>
    <div class="c-page-body header-pd">
      <!--  -->
      <div class="oderD_one">
        <template v-if="orderInfo.status == '1'">
          <div>
            <p>等待买家付款</p>
            <p>剩{{hh}}小时{{mm}}分自动关闭</p>
          </div>
        </template>
        <template v-else-if="orderInfo.status == '2'">
          <div>
            <p>买家已付款</p>
          </div>
        </template>
        <template v-else-if="orderInfo.status == '3'">
          <div>
            <p>卖家已发货</p>
            <p>剩{{dd}}天{{hh}}小时{{mm}}分自动确认</p>
          </div>
        </template>
        <template v-else-if="orderInfo.status == '4' || orderInfo.status == '5'">
          <div>
            <p>交易成功</p>
          </div>
        </template>
        <template v-else-if="orderInfo.status == '9'">
          <div>
            <p>交易关闭</p>
            <p>{{orderInfo.cancelReason}}</p>
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
          <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
          <span>母婴用品商城</span>
        </div>
        <!--  -->
        <div v-for="(orderItem,index) in orderInfo.order_items" :key="index">
          <div
            style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-bottom:1px solid #F4F4F4;"
          >
            <div style="width:20%;">
              <img style="width:0.7rem;height:0.7rem;" :src="orderItem.itemImg" alt>
            </div>
            <div style="width:65%;padding:0 0.1rem">
              <span>{{orderItem.itemName}}</span>
              <p style="color:#999;font-size:12px;">{{orderItem.itemPropvalues}}</p>
            </div>
            <div style="width:15%;text-align:right;">
              <span>￥{{orderItem.price}}</span>
              <div style="color:#999;font-size:12px;">
                <span>×{{orderItem.quantity}}</span>
              </div>
            </div>
          </div>
          <!-- 退款按钮 -->
          <p class="refund_btn">
            <button
              class="c-btn"
              @click="$router.push({path:'/refund',query:{orderId:orderId, itemId:orderItem.itemId}})"
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
        <p>
          <span>订单编号</span>
          <span>{{orderInfo.orderNo}}</span>
        </p>
        <p>
          <span>创建时间</span>
          <span>{{orderInfo.createTime}}</span>
        </p>
        <p v-if="orderInfo.payTime">
          <span>付款时间</span>
          <span>{{orderInfo.payTime}}</span>
        </p>
        <p v-if="orderInfo.deliverTime">
          <span>发货时间</span>
          <span>{{orderInfo.deliverTime}}</span>
        </p>
        <p v-if="orderInfo.endTime">
          <span>成交时间</span>
          <span>{{orderInfo.endTime}}</span>
        </p>
      </div>
      <!--  -->
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
        <template v-else-if="orderInfo.status==9">
          <button class="c-btn" @click.stop="removeOrder(orderInfo.id)">删除订单</button>
        </template>
      </div>
      <div v-show="cacelOrderPopupVisible" class="order_bot">
        <p class="mt-picker" @click="success_order">完成</p>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from "mint-ui";
import services from "@/services";

export default {
  data() {
    return {
      orderId: "",
      orderInfo: {},

      cacelOrderPopupVisible: false,
      order_cause: "",
      dd: "0",
      hh: "0",
      mm: "0",
      slots: [
        {
          flex: 1,
          values: [
            "我不想买了",
            "缺货",
            "信息填写错误，重新拍",
            "线下交易",
            "其他原因"
          ],
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    success_order(values) {
      this.cacelOrderPopupVisible = false;
    },
    onValuesChange(picker, values) {
      for (var i = 0; i < values.length; i++) {
        this.order_cause = values[i];
      }
    },
    async fetchOrderInfo() {
      try {
        let { orderId } = this;
        let res = await services.fetchOrderInfo({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;
        if (this.orderInfo.status === "1") {
          let endTime = new Date(
            new Date(this.orderInfo.createTime).getTime() + 24 * 60 * 60 * 1000
          );
          this.countdown(endTime);
        }
        if (this.orderInfo.status === "3") {
          let endTime = new Date(
            new Date(this.orderInfo.deliverTime).getTime() +
              10 * 24 * 60 * 60 * 1000
          );
          this.countdown(endTime);
        }
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    countdown(endTime) {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      var end = endTime.getTime();

      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      var d, h, m, s;
      if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        m = Math.floor((leftTime / 1000 / 60) % 60);
        s = Math.floor((leftTime / 1000) % 60);
      }
      this.dd = d;
      this.hh = h;
      this.mm = m;
      // this.ss = s;
      setTimeout(() => {
        this.countdown(endTime);
      }, 1000);
    },

    //查看物流
    logistics(str) {
      this.$router.push({
        path: "/logistics",
        query: {
          type: "zhongtong",
          postid: "75124660965586"
        }
      });
    },

    //取消订单
    async cancelOrder(orderId) {
      try {
       this.cacelOrderPopupVisible = false;


        let res = await services.cancelOrder({
          orderId,
          cancelReason: "顺便填的"
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.fetchOrderList();
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

        this.fetchOrderList();
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
