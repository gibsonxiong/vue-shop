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

.c-btn {
  border: 1px solid #666;
  background-color: transparent;
  color: #666;
  padding: 0.05rem 0.1rem;
  border-radius: 1rem;
  margin-left: 0.1rem;

  &.btn-primary {
    border-color: $color-primary;
    color: $color-primary;
  }
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
          :class="{active: index===curId}"
          @click="tab(item.id)"
        >{{item.item}}</li>
      </ul>
      <div class="oder-content">
        <ul>
          <li v-for="(order,index) in orderList" :key="index" @click="to_oderDetail()">
            <!--  -->
            <div
              style="display: flex;width:95%;margin:auto;border-bottom:1px solid #F4F4F4;padding:0.1rem 0;"
            >
              <div style="width:80%;">
                <span>订单号</span>
                <span>12312312312312312</span>
              </div>
              <div style="width:20%;text-align:right;">
                <span>待付款</span>
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
              @click="to_oderDetail"
            >
              <div style="width:20%;">
                <img
                  style="width:0.7rem;height:0.7rem;"
                  :src="orderItem.itemImg"
                  alt
                >
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
              <template v-if="content.odertype==1">
                <button class="c-btn">取消订单</button>
                <button class="c-btn btn-primary">付款</button>
              </template>
              <template v-else-if="content.odertype==2">
                <button class="c-btn">申请开票</button>
                <button class="c-btn btn-primary">提醒发货</button>
              </template>
              <template v-else-if="content.odertype==3">
                <button class="c-btn" @click="logistics(content)">查看物流</button>
                <button class="c-btn btn-primary">确认发货</button>
              </template>
              <template v-else-if="content.odertype==4">
                <button class="c-btn">删除订单</button>
                <button class="c-btn btn-primary">评价</button>
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
      curId: 0,
      items: [
        { item: "全部", id: 0 },
        { item: "待付款", id: 1 },
        { item: "待发货", id: 2 },
        { item: "待收货", id: 3 },
        { item: "待评价", id: 4 }
      ],
      orderList: []
    };
  },
  filters: {
    odertype(val) {
      return (
        {
          "0": "全部",
          "1": "待付款",
          "2": "待发货",
          "3": "待收货",
          "4": "待评价"
        }[val] || ""
      );
    }
  },
  methods: {
    async fetchOrderList() {
      try {
        let res = await services.fetchOrderList();

        if (services.$isError(res)) throw new Error(res.message);

        this.orderList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    tab(index) {
      this.curId = index;

      let newRoute = {
        ...this.$route,
        query: {
          index
        }
      };
      this.$router.replace(newRoute);
    },
    to_oderDetail() {
      this.$router.push("/orderDetail");
    },
    logistics(str) {
      this.$router.push({
        path: "/logistics",
        query: {
          type: "zhongtong",
          postid: "75124660965586"
        }
      });

    }
  },
  created() {
    let index = this.$route.query.index;
    if (index) {
      this.tab(Number(index));
    } else {
      this.tab(0);
    }

    this.fetchOrderList();
  }
};
</script>
