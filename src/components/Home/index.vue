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
    padding: 0.15rem 0;
    background-color: #fff;
    @include flexbox;
    flex-wrap: wrap;

    .link-item {
      width: 25%;
      padding: 0 0.15rem;
      text-align: center;

      &:active {
        opacity: 0.8;
      }
    }

    .link-img {
      width: 100%;
      max-width: 1.2rem;
      padding: 0 0.1rem;
    }

    .link-name {
      font-size: 0.12rem;
      margin-top: 0.05rem;
      color: rgb(102, 102, 102);
    }
  }
}
.panic_buy {
  padding: 0 0.1rem;
  background: #fff;
  .panic_buy_label {
    padding: 0.15rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span:first-of-type {
      font-weight: 500;
      font-size: 0.14rem;
      // color: #051b28;
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
  @include border-bottom();
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
  // color:#051b28;
}

.marquee_top {
  transition: all 0.5s;
  margin-top: -0.3rem;
}

.marquee_list li {
  font-size: 0.13rem;
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
  .c-img-box {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.05rem;
  }
  li:nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    height: 0.36rem;
    font-size: 0.14rem;
    padding: 0 0.01rem;
    margin: 0.08rem 0 0.06rem;
    // color: #051b28;
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
    <div class="c-page-body" ref="body">
      <div class="c-tab-pd">
        <mt-swipe :auto="5000" :showIndicators="true" :speed="600">
          <mt-swipe-item v-for="(item, index) in banners" :key="index">
            <router-link :to="item.url">
              <img class="banner-img" :src="item.img">
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
        <div class="link-wrap">
          <router-link :to="{path:'/items'}" class="link-item">
            <img class="link-img" src="@/assets/shangping.png" alt>
            <div class="link-name">全部商品</div>
          </router-link>
          <router-link :to="{path:'/coupon'}" class="link-item">
            <img class="link-img" src="@/assets/quan.png" alt>
            <div class="link-name">领券中心</div>
          </router-link>
          <router-link :to="{path:'/sign'}" class="link-item">
            <img class="link-img" src="@/assets/qiandao.png" alt>
            <div class="link-name">每日签到</div>
          </router-link>
          <router-link :to="{path:'/invite'}" class="link-item">
            <img class="link-img" src="@/assets/yaoxin.png" alt>
            <div class="link-name">一元邀新</div>
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
        <div class="panic_buy" v-if="currentFlash">
          <p class="panic_buy_label">
            <span style="color: #5dbaff;">
              <i
                class="iconfont icon-round_light_fill"
                style="font-size: 0.18rem;margin-right: 0.05rem;"
              ></i>限时抢购
              <c-count-down style="margin-left:0.05rem;" :endTime="new Date(currentFlash.endTime)"></c-count-down>
            </span>
            <span @click="$router.push('/panic_buy')">查看全部</span>
          </p>
          <div class="buy_time">
            <ul
              class="buy_time_ul"
              v-for="(item,index) in currentFlash.flashbuy_items"
              :key="index"
              @click="$router.push(`/items/${item.itemId}`)"
            >
              <li>
                <div class="c-img-box box-bg">
                  <img v-lazy="item.itemImg">
                </div>
              </li>
              <li>{{item.itemName}}</li>
              <li>
                <span>￥{{item.flashPrice}}</span>
                <span class="c-old-price">￥{{item.itemPrice}}</span>
              </li>
              <li>
                <span class="c-tag">限时特价</span>
              </li>
            </ul>
          </div>
        </div>

        <c-recommend-list
          ref="recommend"
          cacheId="recommend"
          style="margin-top:0.15rem;margin-bottom:0.2rem;"
        ></c-recommend-list>
      </div>
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
      currentFlash: {},
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
    this.fetchCurrentFlash();
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
        let res = await services.fetchItemList({ pageSize: 50 });

        if (services.$isError(res)) throw new Error(res.message);

        this.recommendList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    //当前抢购信息
    async fetchCurrentFlash() {
      try {
        let res = await services.fetchCurrentFlash();

        if (services.$isError(res)) throw new Error(res.message);

        this.currentFlash = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  }
};
</script>
