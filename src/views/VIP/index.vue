<style scoped lang="scss">
@import "~@/css/var";
img {
  object-fit: cover;
}
.vip {
  text-align: center;
  padding: 0.1rem;
  background: linear-gradient(to right, #ff5fa1, #ff4390);
  img {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 50%;
  }
  .taoqizhi {
    padding: 0.1rem;
    p {
      width: 21%;
      margin: auto;
      color: #fff;
      border-radius: 1rem;
      padding: 0.02rem;
      background: #66666642;
      font-size: 0.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .flex3 {
    color: #fff;
    display: flex;
    justify-content: space-around;
  }
}
.equity_label {
  font-size: 0.16rem;
  font-weight: bold;
  padding: 0.1rem 0.1rem 0 0.1rem;
}
.equity {
  border-radius: 0.1rem;
  background: #fff;
  margin: 0.1rem;
  padding: 0.05rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 100%;
    height: 1rem;
    padding: 0.05rem;
    border-radius: 0.1rem;
  }
  p:first-of-type {
    padding: 0.05rem 0rem 0 0.05rem;
  }
  p:last-of-type {
    padding: 0rem 0rem 0 0.05rem;
    color: $color-primary;
  }
}
</style>

<template>
  <div class="footprint-page page">
    <c-header :title="'88会员'"></c-header>
    <div class="c-page-body header-pd">
      <div class="vip">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551244481202&di=d0ad785a3a1036dd65cdf85548fde6cf&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01d5cd554408620000019ae9f3f800.jpg%401280w_1l_2o_100sh.jpg"
        >
        <div class="taoqizhi">
          <p>
            <span>淘气值</span>
            <span>698</span>
          </p>
        </div>
        <div class="flex3">
          <ul>
            <li>2001</li>
            <li>天猫积分</li>
          </ul>
          <ul>
            <li>3</li>
            <li>我的服务</li>
          </ul>
          <ul>
            <li>
              <i class="iconfont icon-present"></i>
            </li>
            <li>已领权益</li>
          </ul>
        </div>
      </div>
      <p class="equity_label">精选权益</p>
      <div class="equity">
        <div style="width:50%" v-for="(val,index) in item" :key="index">
          <img :src="val.img">
          <p>{{val.name}}</p>
          <p>{{val.conform}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      item: [
        {
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551247961396&di=e707e37ba3531fb1c948615d053466da&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Fnuomi%2Fpic%2Fitem%2F6609c93d70cf3bc7ec45ba33da00baa1cc112aa3.jpg",
          name: "万豪旅享家会员卡",
          conform: "符合条件"
        },
        {
          img: "http://pic28.photophoto.cn/20130914/0033033981133608_b.jpg",
          name: "万豪旅享家会员卡",
          conform: "符合条件"
        },
        {
          img:
            "http://p0.ifengimg.com/a/2018_32/d97b2646b9bc302_size117_w924_h616.jpg",
          name: "万豪旅享家会员卡",
          conform: "符合条件"
        },
        {
          img: "http://www.alone.com.cn/UploadFile/20092161725210.jpg",
          name: "万豪旅享家会员卡",
          conform: "符合条件"
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
