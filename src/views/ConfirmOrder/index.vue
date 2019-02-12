<style scoped lang="scss">
@import "~@/css/var";
.c-page-body {
  background: #f3f3f3;
}
.confirmoder_one {
  padding: 0.18rem 0.1rem 0.21rem;
  display: flex;
  align-items: center;
  background: url("~@/assets/addrline.png") #fff repeat-x bottom center;
  background-size: auto 0.03rem;
}

.confirmoder_address_info{
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
.total span {
  color: $color-primary;
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
      <div class="confirmoder_one">
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
      </div>
      <div class="confirm_three">
        <!--  -->
        <div style="width:95%;margin:auto;padding:0.1rem 0;">
          <i class="iconfont icon-shoplight" style="padding-right:0.05rem"></i>
          <span>母婴用品商城</span>
        </div>
        <!--  -->
        <div
          style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-top:1px solid #F4F4F4;"
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
            <span>￥3.88</span>
            <div style="color:#999;font-size:12px;">
              <span>×100</span>
            </div>
          </div>
        </div>
        <!--  -->
        <div
          style="width:95%;margin:auto;padding:0.1rem 0;display: flex;border-top:1px solid #F4F4F4;"
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
            <span>￥3.88</span>
            <div style="color:#999;font-size:12px;">
              <span>×100</span>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="confirm_four">
          <ul>
            <li style="border-bottom: 1px solid #f4f4f4;">
              <div>买家留言</div>
              <div>
                <input placeholder="50字以内（选填）">
              </div>
            </li>
            <li style="border-bottom: 1px solid #f4f4f4;">
              <div>商品小计</div>
              <div>￥0.90</div>
            </li>
            <li>
              <div>运费</div>
              <div>￥10</div>
            </li>
          </ul>
        </div>
        <!--  -->
        <p class="total" style>共1件商品 共计：￥192</p>
      </div>
      <!--  -->
      <!--  -->
      <div class="confirm_six">
        需付：
        <span>￥</span>
        <span>221.00</span>
        <span>提交订单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
