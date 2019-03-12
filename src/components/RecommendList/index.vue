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
    padding-left: 0.10rem;
    padding-right: 0.09rem;
    padding-top: 0.10rem;
    padding-bottom: 0.10rem;
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
    margin-top: 0.08rem;
  }

  .recommend-price {
    font-size: 0.16rem;
    font-weight: 500;
    line-height: 0.16rem;
    color: $color-primary;
  }

  .recommend-sale {
    float: right;
    font-size: 0.12rem;
    color: #999999;
    margin-top: 0.02rem;
  }
}

.bottom-loading {
  @include flexbox(center);
  padding: 0.2rem;
}
</style>
<template>
  <div class="section" style="margin-top:0.15rem;">
    <div class="section-title">
      <span class="section-title-line"></span>
      <div class="section-title-inner">猜你喜欢</div>
    </div>
    <div class="recommend-container" v-if="recommendList.length > 0">
      <div class="recommend-box" v-for="(item,index) in recommendList" :key="index">
        <router-link tag="div" class="recommend-item" :to="`/items/${item.id}`">
          <div class="c-img-box box-bg box-big">
            <img class="recommend-img" :key="item.imgList[0]" v-lazy="item.imgList[0]" alt>
          </div>
          <div class="recommend-info">
            <div class="recommend-title">{{item.name}}</div>
            <div style="min-height:0.21rem;">
              <span v-if="item.flash && item.flash.status == 1" class="c-tag">限时特价</span>
              <span v-if="item.isNew" class="c-tag secondly">新品</span>
            </div>
            <div class="recommend-price-box">
              <span v-if="item.flash && item.flash.status == 1">
                <span class="recommend-price">￥{{item.flash.item.flashPrice}}</span>
                <span class="c-old-price">￥{{item.flash.item.itemPrice}}</span>
              </span>
              <span class="recommend-price" v-else>￥{{item.minPrice}}</span>
              
              <span class="recommend-sale">{{item.item_count && item.item_count.saleCount}}人已购买</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="bottom-loading" v-if="loading">
      <mt-spinner type="snake" :size="20" style="display: inline-block;"></mt-spinner>
    </div>
  </div>
</template>
<script>
import services from "@/services";
import routerCacheComponent from "@/routerCache/component";
import utils from '@/utils';

export default {
  mixins: [routerCacheComponent()],
  props: {},
  data() {
    return {
      recommendList: [],
      loading:false
    };
  },
  methods: {
    async fetchRecommendList() {
      try {
        this.loading = true;
        let res = await services.fetchItemList({ pageSize: 20 });

        if (services.$isError(res)) throw new Error(res.message);

        this.loading = false;
        this.recommendList = utils.shuffle(res.data);
      } catch (err) {
        this.loading = false;
        return this.$toast(err.message);
      }
    }
  },
  created() {
    if (!this.$restored) {
      this.fetchRecommendList();
    }
  }
};
</script>

