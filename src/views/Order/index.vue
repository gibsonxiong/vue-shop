<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
.c-page-body {
  background: #f3f3f3;
  font-size: 0.14rem;
}
.c-page-body-ul {
  width: 100%;
  display: flex;
  text-align: center;
  background: #fff;
}
.c-page-body-ul li {
  width: 20%;
  margin: auto;
  padding: 0.1rem 0;
}
.order-item {
  background: #fff;
  margin-top: 0.1rem;

  .item-main {
    width: 95%;
    margin: auto;
    padding: 0.12rem 0;
    display: flex;
    @include border-bottom();
  }

  .item-total-wrap {
    width: 95%;
    margin: auto;
    padding: 0.12rem 0;
    @include border-bottom();
    font-size: 0.12rem;
  }

  .item-bottom-wrap {
    width: 95%;
    margin: auto;
    padding: 0.1rem 0;
    display: flex;
    justify-content: flex-end;
  }
}
.active {
  color: $color-primary;
  @include border-bottom(4px, $color-primary);
}

.light {
  color: $color-primary;
}
</style>

<template>
  <div class="order-page page">
    <c-header :title="'我的订单'"></c-header>
    <div class="c-page-body header-pd">
      <div style="padding-bottom:0.2rem;">

        <ul class="c-page-body-ul">
          <li
            v-for="(item,index) in items"
            :key="index"
            :class="{active: item.id===status}"
            @click="tab(item.id)"
          >{{item.item}}</li>
        </ul>
        <transition name="c-list">
          <div class="oder-content" v-if="orderList.length > 0" >
            <div class="order-item" v-for="order in orderList" :key="order.id" @click="to_oderDetail(order.id)">
              <div style="width:95%;margin:auto;padding:0.1rem 0;">
                <i class="iconfont icon-shoplight" style="padding-right:0.03rem"></i>
                <span style="flex:1;">母婴用品商城</span>
                <span class="light" style="font-size:0.12rem;float:right">{{order.status | orderStatus}}</span>
              </div>
              <div
                v-for="(orderItem,index) in order.order_items"
                :key="index"
                class="item-main"
              >
                <div style="width:0.7rem;height:0.7rem;">
                  <div style="" class="c-img-box box-bg">
                    <img v-lazy="orderItem.itemImg">
                  </div>
                </div>
                <div style="flex:1;padding:0 0.1rem">
                  <span style="font-size:0.13rem;font-weight:500">{{orderItem.itemName}}</span>
                  <p style="color:#999;font-size:12px;">{{orderItem.itemPropvalues}}</p>
                </div>
                <div style="width:15%;text-align:right;">
                  <span>￥{{orderItem.itemPrice}}</span>
                  <div style="color:#999;font-size:12px;">
                    <span>×</span>
                    <span>{{orderItem.quantity}}</span>
                  </div>
                </div>
              </div>

              <div class="item-total-wrap">
                <p style="text-align: right;">
                  共
                  <span style="font-size:0.14rem;">{{order.itemCount}}</span>个商品
                  <span>实付:</span>
                  <span style="font-size:0.14rem;">￥{{order.orderFee}}</span>
                </p>
              </div>

              <div
              class="item-bottom-wrap"
                
              >
                <template v-if="order.status==1">
                  <button class="c-btn" @click.stop="cancelOrder(order.id)">取消订单</button>
                  <button
                    class="c-btn btn-primary"
                    @click.stop="$router.push({path:'/cashier', query:{orderId:order.id}})"
                  >付款</button>
                </template>
                <template v-else-if="order.status==2">
                  <!-- <button class="c-btn">申请开票</button> -->
                  <button class="c-btn btn-primary" @click.stop="remindDeliver(order.id)">提醒发货</button>
                </template>
                <template v-else-if="order.status==3">
                  <button class="c-btn" @click.stop="logistics(order.id)">查看物流</button>
                  <button class="c-btn btn-primary" @click.stop="confirmReceive(order.id)">确认收货</button>
                </template>
                <template v-else-if="order.status==4">
                  <button class="c-btn" @click.stop="removeOrder(order.id)">删除订单</button>
                  <button class="c-btn btn-primary" @click.stop="rateOrder(order.id)">评价</button>
                </template>
                <template v-else-if="order.status==5">
                  <button class="c-btn" @click.stop="removeOrder(order.id)">删除订单</button>
                </template>
                <template v-else-if="order.status==9">
                  <button class="c-btn" @click.stop="removeOrder(order.id)">删除订单</button>
                </template>
              </div>
            </div>
          </div>
        </transition>
        <c-empty-hint v-if="orderList.length == 0 && !loading" icon="icon-dingdan" hint="您还没有相关的订单">
        </c-empty-hint>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import routerUtils from "@/utils/router-utils";

export default {
  data() {
    return {
      status: -1,
      items: [
        { item: "全部", id: "" },
        { item: "待付款", id: "1" },
        { item: "待发货", id: "2" },
        { item: "待收货", id: "3" },
        { item: "待评价", id: "4" }
      ],
      orderList: [],
      loading: false
    };
  },
  methods: {
    async fetchOrderList() {
      try {
        let { status } = this;

        this.orderList = [];
        this.$showLoading();
        this.loading = true;
        let res = await services.fetchOrderList({
          status
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.loading = false;
        this.orderList = res.data;
      } catch (err) {
        this.$hideLoading();
        this.loading = false;
        return this.$toast(err.message);
      }
    },
    tab(status) {
      if (this.status == status) return;

      this.status = status;

      this.fetchOrderList();

      routerUtils.setQuery({
        status
      });
    },
    to_oderDetail(orderId) {
      this.$router.push({ path: "/orderDetail", query: { orderId } });
    },

    //查看物流
    logistics(orderId) {
      this.$router.push({
        path: "/logistics",
        query: {
          orderId
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

        this.fetchOrderList();
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

        this.$router.push('/confirm-receive-result');

        // this.fetchOrderList();
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
    let status = this.$route.query.status || "";

    this.tab(status);
  }
};
</script>
