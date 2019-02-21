<style scoped lang="scss">
.orderDetail-page {
}
.c-page-body {
  background: #f3f3f3;
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
.oderD_six {
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
.oderD_six span {
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
        <p>{{wait_pay}}</p>
        <p>{{success_status}}</p>
        <p v-show="order_money">
          剩
          <span>{{hh}}</span>小时
          <span>{{mm}}</span>分
          <!-- <span>{{ss}}</span>秒 -->
          自动
          <span>关闭</span>
        </p>
      </div>
      <!--  -->
      <div class="oderD_two">
        <i class="iconfont icon-location_light"></i>
        <ul>
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
      </div>
      <div class="oderD_three">
        <!--  -->
        <div style="width:95%;margin:auto;padding:0.1rem 0;">
          <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
          <span>母婴用品商城</span>
        </div>
        <!--  -->
        <div
          style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-bottom:1px solid #F4F4F4;"
        >
          <div style="width:20%;">
            <img
              style="width:0.7rem;height:0.7rem;"
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548311060508&di=d504b800e303f9f0156d74b574c8e6f1&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F09%2F07%2F319cc6336af17b547d9b3b873954b8da.jpg"
              alt
            >
          </div>
          <div style="width:65%;padding:0 0.1rem">
            <span>意大利进口奶瓶 荣誉出品意大利进口奶瓶荣誉出品</span>
            <p style="color:#999;font-size:12px;">随机发</p>
          </div>
          <div style="width:15%;text-align:right;">
            <span>￥</span>
            <span>3.88</span>
            <div style="color:#999;font-size:12px;">
              <span>×</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <!-- 退款按钮 -->
        <p class="refund_btn">
          <span @click="$router.push('/refund')">退款</span>
        </p>
      </div>
      <!--  -->
      <div class="oderD_four">
        <ul>
          <li>
            <div>商品小计</div>
            <div>￥0.90</div>
          </li>
          <li>
            <div>运费</div>
            <div>￥10</div>
          </li>
          <li>
            <div>实付费(含运费)</div>
            <div style="color:$color-primary;">￥17.70</div>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="oderD_five">
        <p>
          <span>订单编号</span>
          <span>SH20190123113437236624</span>
        </p>
        <p>
          <span>创建时间</span>
          <span>2019-01-23 11:34:55</span>
        </p>
      </div>
      <!--  -->
      <div class="oderD_six" @click="oderD_six()">
        <span>取消订单</span>
      </div>
      <div v-show="cacel_order" class="order_bot">
        <p class="mt-picker" @click="success_order">完成</p>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from "mint-ui";
export default {
  data() {
    return {
      cacel_order: false,
      order_cause: "",
      success_status: "",
      wait_pay: "等待买家付款",
      order_money: true,
      hh:'0',
      mm:'0',
      // ss:'',
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
          className: "slot1",
          textAlign: "right"
        }
      ]
    };
  },
  methods: {
    oderD_six() {
      this.cacel_order = true;
    },
    success_order(values) {
      this.cacel_order = false;
      this.success_status = this.order_cause;
      this.wait_pay = "交易关闭";
      this.order_money = false;
    },
    onValuesChange(picker, values) {
      for (var i = 0; i < values.length; i++) {
        this.order_cause = values[i];
      }
    },
    countdown() {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var str = "2019/2/21 00:00:00";
      var endDate = new Date(str);
      var end = endDate.getTime();

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
      this.hh=h;
      this.mm = m;
      // this.ss = s;
      setTimeout(this.countdown, 1000);
    }
  },
  created(){
    this.countdown();
  }
};
</script>
