<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.c-home {
  .c-page-body {
    overflow-x: hidden;
  }

  .mint-swipe {
    overflow: hidden;
    position: relative;
    height: 1.6rem;

    .banner-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .link-wrap {
    padding: 0.05rem 0;
    background-color: #fff;
    @include flexbox;
    flex-wrap: wrap;

    .link-item {
      width: 20%;
      padding: 0.05rem;
      text-align: center;
    }

    .link-img {
      width: 100%;
    }

    .link-name {
      font-size: 0.12rem;
      margin-top: 0.05rem;
      color: rgb(102, 102, 102);
    }
  }

  .section {
    $color: $color-primary;
    $bgcolor: #f5f5f5;
    .section-title {
      position: relative;
      color: $color;
      text-align: center;
      height: 0.35rem;
      line-height: 0.35rem;
      font-size: 0.17rem;
      background-color: $bgcolor;
    }

    .section-title-line {
      display: inline-block;
      width: 1.4rem;
      height: 1px;
      background: $color;
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .section-title-inner {
      position: relative;
      z-index: 2;
      display: inline-block;
      padding: 0 0.08rem;
      background-color: $bgcolor;
      font-size: 0.15rem;

      &::before,
      &::after {
        content: "";
        position: absolute;
        background: $color;
        width: 0.03rem;
        height: 0.03rem;
        border-radius: 100%;
        top: 50%;
        transform: translate(0, -50%);
      }

      &::before {
        left: -0.03rem;
      }

      &:after {
        right: -0.03rem;
      }
    }
  }

  .recommend-container {
    @include flexbox;
    flex-wrap: wrap;
    padding: 0 4.5px;

    .recommend-box{
      width: 50%;
      padding-top: 9px;
      padding-left: 4.5px;
      padding-right: 4.5px;
    }

    .recommend-item {
      background: #fff;
      border-radius: 6px;
      overflow: hidden;
    }

    .recommend-img {
      width: 100%;
    }

    .recommend-info {
      padding-left: 10px;
      padding-right: 9px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .recommend-title {
      height: 37px;
      position: relative;
      overflow: hidden;
      line-height: 18.5px;
      text-overflow: ellipsis;
      min-height: 0;
    }

    .recommend-price-box {
      margin-top: 11px;
      height: 20px;
      line-height: 20px;
    }

    .recommend-price {
      font-size: 14px;
      line-height: 16px;
      color: $color-primary;
    }

    .recommend-sale {
      float: right;
      font-size: 12px;
      color: #999999;
      margin-top: 2px;
    }
  }
}
</style>

<template>
  <div class="c-home">
    <c-header
      ref="header"
      :backType="0"
      theme="transparent"
      :style="{'background-color':`rgba(245, 245, 245,${headerOpacity})`}"
    >
      <c-search-input
        slot="center"
        @click.native="$emit('toSearch')"
        style="width:100%;"
        disabled="disabled"
      ></c-search-input>
    </c-header>
    <div class="c-page-body tab-pd" ref="body">
      <mt-swipe :auto="5000" :showIndicators="true" :speed="600">
        <mt-swipe-item v-for="(val, index) in 3" :key="index">
          <router-link to="/">
            <img
              class="banner-img"
              src="https://oss.suning.com/aps/aps_learning/image/429081201/20190122/4cc97e0036ac4c9abde8fede11fa7575.jpg?format=_is_1242w_610h"
            >
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
      <div class="link-wrap">
        <router-link :to="{path:'/items',query:{searchText:'天猫'}}" class="link-item" v-for="(item,index) in 10" :key="index">
          <img
            class="link-img"
            src="https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png"
            alt
          >
          <div class="link-name">天猫国际</div>
        </router-link>
      </div>

      <div class="section" style="margin-top:0.15rem;">
        <div class="section-title">
          <span class="section-title-line"></span>
          <div class="section-title-inner">猜你喜欢</div>
        </div>
        <div class="recommend-container">
          <div class="recommend-box" v-for="(item,index) in 10" :key="index">
            <router-link tag="div" class="recommend-item" to="/items/0">
              <img
                class="recommend-img"
                src="https://gw.alicdn.com/bao/uploaded/i4/2629063154/TB2esP6jwJkpuFjSszcXXXfsFXa_!!2629063154.jpg_500x500q90.jpg"
                alt
              >
              <div class="recommend-info">
                <div class="recommend-title">复古近视眼镜框女文艺圆脸 韩版大脸圆形简约超轻眼镜架潮无镜片</div>
                <div class="recommend-price-box">
                  <span class="recommend-price">￥29.6</span>
                  <span class="recommend-sale">394人已购买</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      headerOpacity: 0
    };
  },
  mounted() {
    this.bindEvent();
  },
  methods: {
    bindEvent() {
      let body = this.$refs.body;
      body.addEventListener("scroll", () => {
        let end = 100;
        let scrollTop = Math.min(body.scrollTop, end);
        this.headerOpacity = scrollTop / end;
      });
    },
    //父类调用
    tabActived() {
      this.$refs.header.resizeCenter();
    }
  }
};
</script>
