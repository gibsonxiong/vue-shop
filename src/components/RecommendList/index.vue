<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
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
    font-size: 0.12rem;
    color: #999999;
    margin-top: 0.02rem;
  }
}
</style>
<template>
  <div class="section" style="margin-top:0.15rem;">
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
              <span class="recommend-sale">{{item.saleCount}}人已购买</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import services from "@/services";
import routerCacheComponent from "@/routerCache/component";

export default {
  mixins: [routerCacheComponent()],
  props: {},
  data() {
    return {
      recommendList: []
    };
  },
  methods: {
    async fetchRecommendList() {
      try {
        let res = await services.fetchItemList({ pageSize: 100 });

        if (services.$isError(res)) throw new Error(res.message);

        this.recommendList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.fetchRecommendList();
  }
};
</script>

