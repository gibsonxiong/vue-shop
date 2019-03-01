<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
img {
  object-fit: cover;
}
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
    padding: 0.08rem 0;
    background-color: #fff;
    @include flexbox;
    flex-wrap: wrap;

    .link-item {
      width: 25%;
      padding: 0 0.15rem;
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

    .recommend-box {
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
      font-weight: 500;
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
.panic_buy {
  padding: 0 0.1rem;
  background: #fff;
  // border-bottom-left-radius: 0.1rem;
  // border-bottom-right-radius: 0.1rem;
  .panic_buy_label {
    padding: 0.15rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:first-of-type {
      font-weight: 500;
      font-size: 0.16rem;
      color: #051b28;
    }
    span:last-of-type {
      color: #999;
      font-size: 0.12rem;
    }
  }
}
// 公告
.marquee {
  width: 100%;
  height: 0.4rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
  // border-top-left-radius: 0.1rem;
  // border-top-right-radius: 0.1rem;
  border-bottom: 1px solid #cccccc5c;
}
.marquee_title {
  padding: 0 0.1rem;
  display: flex;
  align-items: center;
  color: $color-primary;
  font-weight: 500;
}
.marquee_box {
  display: block;
  position: relative;
  width: 75%;
  height: 0.3rem;
  overflow: hidden;
}
.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  color:#051b28;
}

.marquee_top {
  transition: all 0.5s;
  margin-top: -0.3rem;
}

.marquee_list li {
  height: 0.3rem;
  line-height: 0.3rem;
}
// 淘抢购
.buy_time {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  background: #fff;
  padding-bottom: 0.25rem;
}
.buy_time_ul {
  width: 1.25rem;
  margin-right: 0.1rem;
  img {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.05rem;
    object-fit: cover;
    // border: 1px solid #ccc;
    // padding: 0.1rem;
  }
  li:nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 0.4rem;
    font-size: 0.14rem;
    padding: 0 0.01rem;
    margin: 0.08rem 0 0.06rem;
    color: #051b28;
  }
  li:nth-child(3) {
    display: flex;
    align-items: center;
  }
  li:nth-child(3) span:first-of-type {
    color: $color-primary;
    font-size: 0.14rem;
    font-weight: 500;
  }
  li:nth-child(3) span:last-of-type {
    color: #999;
    text-decoration: line-through;
    font-size: 0.12rem;
    padding-left: 0.02rem;
    vertical-align: text-bottom;
    transform: scale(0.9);
    transform-origin: bottom;
  }
  li:last-of-type {
    // padding: 0.05rem 0;
    span {
      margin-top: 0.05rem;
      border: 1px solid $color-primary;
      color: $color-primary;
      padding: 0.01rem 0.05rem;
      font-size: 0.12rem;
      border-radius: 0.1rem;
      transform: scale(0.95);
      transform-origin: left;
      display: inline-block;
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
      <div class="c-input-mask" slot="center" @click="$emit('toSearch')">
        <c-search-input placeholder="搜索你喜欢的宝贝" style="width:100%;"></c-search-input>
      </div>
    </c-header>
    <div class="c-page-body tab-pd" ref="body">
      <mt-swipe :auto="5000" :showIndicators="true" :speed="600">
        <mt-swipe-item v-for="(item, index) in banners" :key="index">
          <router-link :to="item.url">
            <img class="banner-img" :src="item.img">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
      <div class="link-wrap">
        <router-link :to="{path:'/items'}" class="link-item">
          <img
            class="link-img"
            src="https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png"
            alt
          >
          <div class="link-name">全部商品</div>
        </router-link>
        <router-link :to="{path:'/items'}" class="link-item">
          <img
            class="link-img"
            src="https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png"
            alt
          >
          <div class="link-name">天猫国际</div>
        </router-link>
        <router-link :to="{path:'/items'}" class="link-item">
          <img
            class="link-img"
            src="https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png"
            alt
          >
          <div class="link-name">天猫国际</div>
        </router-link>
        <router-link :to="{path:'/items'}" class="link-item">
          <img
            class="link-img"
            src="https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png"
            alt
          >
          <div class="link-name">天猫国际</div>
        </router-link>
      </div>
      <!-- 今日头条 -->
      <div class="marquee">
        <div class="marquee_title">
          <span>今日头条</span>
        </div>
        <div class="marquee_box">
          <ul class="marquee_list" :class="{marquee_top:animate}">
            <li v-for="(item, index) in marqueeList" :key="index">
              <span>{{item.txt}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 今日头条 end -->
      <!--淘抢购  -->
      <div class="panic_buy" >
        <p class="panic_buy_label">
          <span style="color: #5dbaff;"><i class="iconfont icon-goods_hot_fill" style="font-size: 0.18rem;margin-right: 0.05rem;"></i>正在开团</span>
          <span @click="$router.push('/panic_buy')">查看全部</span>
        </p>
        <div class="buy_time">
          <ul class="buy_time_ul" v-for="(item,index) in groupList" :key="index" @click="$router.push(`/items/${item.id}`)">
            <li>
              <img :src="item.imgList[0]">
            </li>
            <li>{{item.name}}</li>
            <li>
              <span>￥{{item.minPrice}}</span>
              <span>￥1000</span>
            </li>
            <li>
              <span>限时特价</span>
            </li>
          </ul>
        </div>
      </div>
      <!--  -->
      <!-- <div class="section" style="margin-top:0.15rem;">
        <div class="section-title">
          <span class="section-title-line"></span>
          <div class="section-title-inner">猜你喜欢</div>
        </div>
        <div class="recommend-container">
          <div class="recommend-box" v-for="(item,index) in recommendList" :key="index">
            <router-link tag="div" class="recommend-item" :to="`/items/${item.id}`">
              <div class="c-img-box">
                <img class="recommend-img" :key="item.imgList[0]" v-lazy="item.imgList[0]" alt>
              </div>
              <div class="recommend-info">
                <div class="recommend-title">{{item.name}}</div>
                <div class="recommend-price-box">
                  <span class="recommend-price">￥{{item.minPrice}}</span>
                  <span class="recommend-sale">394人已购买</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div> -->

      <c-recommend-list ref="recommend" cacheId="recommend" style="margin-top:0.15rem;"></c-recommend-list>
    </div>
  </div>
</template>


<script>
import services from "@/services";
import routerCacheComponent from "@/routerCache/component";

export default {
  mixins: [
    routerCacheComponent({
      scrollWrapSelector: ".c-page-body"
    })
  ],
  data() {
    return {
      headerOpacity: 0,
      recommendList: [],
      groupList: [],
      animate: false,
      banners: [
        {
          img:
            "https://img01.miyabaobei.com/d1/p6/2019/02/26/22/47/224704b2ff257c71eda25466e207701c836872819.jpg",
          url: "/items/1"
        },
        {
          img:
            "https://img01.miyabaobei.com/d1/p6/2019/02/26/37/bf/37bf5935ea04621d3f3e1eb15210b038835985827.jpg",
          url: "/items/2"
        },
        {
          img:
            "https://img01.miyabaobei.com/d1/p6/2019/02/27/bf/55/bf5569822e2768a8f148c279214f98a0707329542.jpg",
          url: "/items/3"
        }
      ],
      marqueeList: [
        {
          txt: "原来口红不能横着涂！难怪总是沾杯"
        },
        {
          txt: "孕肚上的黑线，藏着这个信息"
        },
        {
          txt: "iPhone SE第二代新机曝光"
        },
        {
          txt: "全面屏版inphone4S真的来了"
        }
      ]
    };
  },
  created() {
    this.fetchRecommendList();
    this.fetchGroupList();
    setInterval(this.showMarquee, 2000);
  },
  mounted() {
    this.bindEvent();
  },
  methods: {
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 500);
    },
    bindEvent() {
      let body = this.$refs.body;
      body.addEventListener("scroll", () => {
        let min = 0;
        let max = 100;
        let scrollTop = Math.max(body.scrollTop, min);
        scrollTop = Math.min(scrollTop, max);
        this.headerOpacity = (scrollTop - min) / (max - min);
      });
    },
    //父类调用
    tabActived() {
      this.$refs.header.resizeCenter();
    },
    async fetchRecommendList() {
      try {
        let res = await services.fetchItemList({ pageSize: 100 });

        if (services.$isError(res)) throw new Error(res.message);

        this.recommendList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async fetchGroupList() {
      try {
        let { searchText, itemTypeId } = this;
        let res = await services.fetchItemList({});

        if (services.$isError(res)) throw new Error(res.message);

        this.groupList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  }
};
</script>
