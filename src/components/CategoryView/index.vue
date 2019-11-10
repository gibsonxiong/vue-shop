<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.category-view {
  margin-top: 10px;
  padding: 5px;
  background: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .title {
    font-size: 14px;
  }
  .more {
        color: #999;
    font-size: 0.12rem;
  }
}
.list {
  overflow: hidden;
  .item {
    float: left;
    width: 33.33%;
    padding: 8px;
    .img {
      width: 100%;
      margin-bottom: 5px;
    }

    .name {
      height: 37px;
      position: relative;
      overflow: hidden;
      line-height: 18.5px;
      text-overflow: ellipsis;
      min-height: 0;
    }

    .price {
      font-size: 0.16rem;
      font-weight: 500;
      line-height: 0.16rem;
      color: #ff6b9d;
    }
  }
}
</style>

<template>
  <div class="category-view">
    <div class="header">
      <h3 class="title">{{info.name}}</h3>
      <router-link class="more" :to="{path:'/category-items',query:{categoryId: info.id,categoryName:info.name }}">更多</router-link>
    </div>
    <div class="list">
      <router-link
        tag="div"
        class="item"
        v-for="item in info.items"
        :key="item.id"
        :to="`/items/${item.id}`"
      >
        <div class="c-img-box box-bg" style="border-radius:3px;">
          <img class="img" :key="item.imgList[0]" v-lazy="item.imgList[0]" alt />
        </div>
        <div class="name">{{item.name}}</div>
        <div>
          <span v-if="item.flash && item.flash.status == 1">
            <span class="c-price">￥{{item.flash.item.flashPrice}}</span>
            <span class="c-old-price">￥{{item.flash.item.itemPrice}}</span>
          </span>
          <span class="c-price" v-else>￥{{item.minPrice}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>


<script>
import services from "@/services";
import routerCacheComponent from "@/routerCache/component";

export default {
  mixins: [routerCacheComponent()],
  props: {
    categoryId: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      info: {}
    };
  },
  methods: {
    async loadInfo() {
      try {
        let res = await services.fetchCategoryPopular({
          categoryId: this.categoryId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.info = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    if (!this.$restored || Object.keys(this.info).length === 0) {
      this.loadInfo();
    }
  }
};
</script>
