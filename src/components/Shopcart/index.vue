<style lang="scss" scoped>
@import "~@/css/mixin";
@import "~@/css/var";
.c-shopcart {
  .list {
    padding: 0 0.15rem;
  }

  .item {
    @include flexbox;
    padding: 0.15rem 0;
    border-bottom: 1px solid $color-border;

    .item-checkbox-wrap {
      display: inline-block;
      align-self: stretch;
      @include flexbox;
    }

    .item-img {
      align-self: flex-start;
      width: 0.9rem;
      height: 0.9rem;
      margin-left: 0.08rem;
      margin-right: 0.08rem;
      border: 1px solid #f8f8f8;
    }

    .item-content {
      margin-top: -0.02rem;
      @include flex;
    }

    .item-name {
      font-size: 0.13rem;
      color: #444;
    }

    .item-price {
      color: $color-primary;
      font-weight: 600;
    }

    .item-prop-wrap {
      margin-top: 0.02rem;
      color: #777;
    }

    .item-prop {
      position: relative;
      background: #f8f8f8;
      color: #999;
      border-radius: 0.03rem;
      padding: 0.04rem 0.05rem;
      font-size: 0.12rem;
      display: inline-block;
      padding-right: 0.18rem;

      &::after {
        $size: 0.07rem;
        content: "";
        position: absolute;
        top: 50%;
        right: 0.08rem;
        transform: translateY(-50%) rotate(45deg);
        width: $size;
        height: $size;
        border: 1px solid #bbb;
        border-left: 0;
        border-top: 0;
      }
    }

    .item-bottom {
      padding-top: 0.05rem;
      @include flexbox(space-between);
    }
  }
}
</style>

<template>
  <div class="c-shopcart">
    <c-header :title="'购物车'" :backType="0"></c-header>
    <div class="c-page-body header-pd tab-pd">
      <div class="list" v-if="list && list.length > 0">
        <div class="item" v-for="(item,index) in list" :key="index">
          <label class="item-checkbox-wrap">
            <c-checkbox v-model="bool"></c-checkbox>
          </label>
          <img
            class="item-img"
            src="http://img3.imgtn.bdimg.com/it/u=761209122,3336350115&fm=26&gp=0.jpg"
            alt
          >
          <div class="item-content">
            <div class="item-name">商品名称商品名称商品名称商品名称商品品名称商品品名称商品品333</div>
            <div class="item-prop-wrap">
              <div class="item-prop">粉色超大的奥术大师多加速度氨基酸等级-啊是的哈; XL-19238123123</div>
            </div>

            <div class="item-bottom">
              <div class="item-price">￥10.00</div>
              <c-number-input v-model="num" :min="0" :max="5"></c-number-input>

              <!-- <i class="iconfont icon-add1"></i> -->
            </div>
          </div>
        </div>
      </div>
      <c-empty-hint v-else icon="icon-goods_light" hint="您的购物车是空的哦！">
        <button @click="$emit('gotoHome')">顺便逛逛</button>
      </c-empty-hint>
    </div>
  </div>
</template>


<script>
import { CellSwipe } from "mint-ui";

export default {
  components: {
    CellSwipe
  },
  data() {
    return {
      num: "",
      bool: true,
      list: [1, 2]
    };
  }
};
</script>
