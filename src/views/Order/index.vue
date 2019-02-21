<style scoped lang="scss">
@import "~@/css/var";
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
.oder-content ul li {
  background: #fff;
  margin-top: 0.1rem;
}
.active {
  color: $color-primary;
  border-bottom: 2px solid $color-primary;
}


</style>

<template>
  <div class="order-page">
    <c-header :title="'我的订单'"></c-header>
    <div class="c-page-body header-pd">
      <ul class="c-page-body-ul">
        <li
          v-for="(item,index) in items"
          :key="index"
          :class="{active: item.id===status}"
          @click="tab(item.id)"
        >{{item.item}}</li>
      </ul>
      <div class="oder-content">
        <ul>
          <li v-for="(order,index) in orderList" :key="index" @click="to_oderDetail(order.id)">
            <!--  -->
            <div
              style="display: flex;width:95%;margin:auto;border-bottom:1px solid #F4F4F4;padding:0.1rem 0;"
            >
              <div style="width:70%;">
                <span>订单号</span>
                <span>{{order.orderNo}}</span>
              </div>
              <div style="width:30%;text-align:right;">
                <span>{{order.status | orderStatus}}</span>
                <span style="transform:rotateZ(180deg);display: inline-block;">
                  <i style="font-size:14px;" class="iconfont icon-back_light"></i>
                </span>
              </div>
            </div>
            <!--  -->
            <div style="width:95%;margin:auto;padding:0.1rem 0;">
              <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
              <span>母婴用品商城</span>
            </div>
            <!--  -->
            <div
              v-for="(orderItem,index) in order.order_items"
              :key="index"
              style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-bottom:1px solid #F4F4F4;"
            >
              <div style="width:20%;">
                <img style="width:0.7rem;height:0.7rem;" :src="orderItem.itemImg" alt>
              </div>
              <div style="width:65%;padding:0 0.1rem">
                <span style="font-size:0.12rem;">{{orderItem.itemName}}</span>
                <p style="color:#999;font-size:12px;">{{orderItem.itemPropvalues}}</p>
              </div>
              <div style="width:15%;text-align:right;">
                <span>￥</span>
                <span>{{orderItem.price}}</span>
                <div style="color:#999;font-size:12px;">
                  <span>×</span>
                  <span>{{orderItem.quantity}}</span>
                </div>
              </div>
            </div>

            <div style="width:95%;margin:auto;padding:0.1rem 0;border-bottom:1px solid #F4F4F4;">
              <p style="text-align: right;">
                共
                <span>{{order.itemCount}}</span>个商品
                <span>实付:</span>￥
                <span>{{order.orderFee}}</span>
              </p>
            </div>

            <div
              style="width:95%;margin:auto;padding:0.1rem 0;border-bottom:1px solid #F4F4F4;display:flex;justify-content: flex-end;"
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
              <template v-else-if="order.status==9">
                <button class="c-btn" @click.stop="removeOrder(order.id)">删除订单</button>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      status: "",
      items: [
        { item: "全部", id: "" },
        { item: "待付款", id: "1" },
        { item: "待发货", id: "2" },
        { item: "待收货", id: "3" },
        { item: "待评价", id: "4" }
      ],
      orderList: []
    };
  },
  filters: {
    orderStatus(val) {
      return (
        {
          "1": "等待买家付款",
          "2": "买家已付款",
          "3": "卖家已发货",
          "4": "交易成功",
          '9':"交易关闭"
        }[val] || ""
      );
    }
  },
  methods: {
    async fetchOrderList() {
      try {
        let {status} = this;
        let res = await services.fetchOrderList({
          status
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    tab(status) {
      this.status = status;

      this.fetchOrderList();

      let newRoute = {
        ...this.$route,
        query: {
          status
        }
      };
      this.$router.replace(newRoute);
    },
    to_oderDetail(orderId) {
      this.$router.push({path:"/orderDetail",query:{orderId}});
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
        let res = await services.removeOrder({orderId});

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
    let status = this.$route.query.status;
    if (status) {
      this.tab(status);
    } else {
      this.tab("");
    }
  }
};
</script>
