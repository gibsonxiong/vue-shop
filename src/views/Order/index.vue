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
          <li v-for="(content,index) in contents" :key="index" @click="to_oderDetail()">
            <!--  -->
            <div
              style="display: flex;width:95%;margin:auto;border-bottom:1px solid #F4F4F4;padding:0.1rem 0;"
            >
              <div style="width:80%;">
                <span>订单号</span>
                <span>{{content.oderId}}</span>
              </div>
              <div style="width:20%;text-align:right;">
                <span>{{content.odertype}}</span>
                <span style="transform:rotateZ(180deg);display: inline-block;">
                  <i style="font-size:14px;" class="iconfont icon-back_light"></i>
                </span>
              </div>
            </div>
            <!--  -->
            <div style="width:95%;margin:auto;padding:0.1rem 0;">
              <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
              <span>{{content.shopName}}</span>
            </div>
            <!--  -->
            <div
              style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-bottom:1px solid #F4F4F4;"
            >
              <div style="width:20%;">
                <img style="width:0.7rem;height:0.7rem;" :src="content.goodsImg" alt>
              </div>
              <div style="width:65%;padding:0 0.1rem">
                <span>{{content.goodsName}}</span>
                <p style="color:#999;font-size:12px;">{{content.remark}}</p>
              </div>
              <div style="width:15%;text-align:right;">
                <span>￥</span>
                <span>{{content.price}}</span>
                <div style="color:#999;font-size:12px;">
                  <span>×</span>
                  <span>{{content.size}}</span>
                </div>
              </div>
            </div>
            <!--  -->
            <div style="width:95%;margin:auto;padding:0.1rem 0;border-bottom:1px solid #F4F4F4;">
              <p style="text-align: right;">
                共
                <span>{{content.consize}}</span>个商品
                <span>实付:</span>￥
                <span>{{content.Dprice}}</span>
              </p>
            </div>
            <!--  -->
            <div
              style="width:95%;margin:auto;padding:0.1rem 0;border-bottom:1px solid #F4F4F4;display:flex;justify-content: flex-end;"
            >
              <button class="c-btn">取消订单</button>
              <span class="c-btn btn-primary">支付订单</span>
            </div>
            <!--  -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
function fetchData(typeId) {
  let data = [
    {
      oderId: "SH20190123113437236624",
      odertype: 4,
      shopName: "母婴用品商城",
      goodsImg:
        "http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
      goodsName: "商品名称商品名称商品名称111",
      remark: "随机发",
      price: 3.33,
      size: 2,
      consize: 2,
      Dprice: 20
    },
    {
      oderId: "SH20190123113437232333",
      odertype: 2,
      shopName: "母婴用品商城",
      goodsImg:
        "http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
      goodsName: "商品名称商品名称商品名称商品333",
      remark: "随机发",
      price: 8.8,
      size: 11,
      consize: 3,
      Dprice: 100
    },
    {
      oderId: "SH20190123113437232333",
      odertype: 3,
      shopName: "母婴用品商城",
      goodsImg:
        "http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
      goodsName: "商品名称商品名称商品名称商品444",
      remark: "随机发",
      price: 77,
      size: 3,
      consize: 9,
      Dprice: 30
    },
    {
      oderId: "SH20190123113437232333",
      odertype: 4,
      shopName: "母婴用品商城",
      goodsImg:
        "http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
      goodsName: "商品名称商品名称商品名称商品444",
      remark: "随机发",
      price: 887,
      size: 13,
      consize: 11,
      Dprice: 3000
    }
  ];

  if (typeId === 0) {
    return data;
  } else {
    return data.filter(item => {
      return item.odertype === typeId;
    });
  }
}

export default {
  data() {
    return {
      curId: 0,
      items: [
        { item: "全部", id: 0 },
        { item: "待付款", id: 1 },
        { item: "待发货", id: 2 },
        { item: "待收货", id: 3 },
        { item: "已完成", id: 4 }
      ],
      contents: []
    };
  },
  methods: {
    tab(index) {
      this.curId = index;
      this.contents = fetchData(index);
      for (var i in this.contents) {
        this.contents[i].odertype =
          {
            "0": "全部",
            "1": "待付款",
            "2": "待发货",
            "3": "待收货",
            "4": "已完成"
          }[this.contents[i].odertype] || "";
      }
    },
    to_oderDetail() {
      this.$router.push("/orderDetail");
    }
  },
  created() {
    this.tab(0);
  }
};
</script>
