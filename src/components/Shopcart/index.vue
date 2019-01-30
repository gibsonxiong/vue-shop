<style lang="scss" scoped>
@import "~@/css/mixin";
@import "~@/css/var";
.c-shopcart {
  &.in-tab {
    .c-page-body {
      padding-bottom: 1.05rem;
    }

    .item_page_footer {
      bottom: 0.55rem;
    }
  }

  .c-page-body {
    padding-bottom: 0.5rem;
  }

  .list {
    background-color: #fff;
    // margin-top: -1px;
    margin-bottom: 0.4rem;
    border-top: 1px solid $color-border;
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
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      border: 1px solid #eee;
    }

    .item-content {
      margin-top: -0.02rem;
      @include flex;
    }

    .item-name {
      font-size: 0.12rem;
      // color: #444;
      max-height: 0.34rem;
      line-height: 0.17rem;
      overflow: hidden;
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
      background: #f5f5f5;
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

  .item_page_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: pxTorem(100);
    border-top: 1px solid #eaeaea;
    background: rgba(255, 255, 255, 1);
    z-index: 3;
    .item_page_footer_content {
      width: 100%;
      box-sizing: border-box;
      height: 100%;

      .item_page_footer_follow_wrap {
        @include flexbox(space-between);
        @include flex;
      }
      .amount-wrap {
        padding-right: 0.12rem;
        text-align: right;
      }

      .amount {
        padding-top: 0.02rem;
      }

      .amount-strong {
        font-size: 0.15rem;
        font-weight: 600;
        color: $color-primary;
      }

      .hint {
        font-size: 0.1rem;
        color: #999;
      }

      .item_page_footer_buys_wrap {
        height: 100%;
        .item_page_footer_buys {
          color: #fff;
          height: 100%;
          min-width: 0.9rem;
          background: #f94a92;
        }
      }
    }
  }
}
</style>

<template>
  <div class="c-shopcart" :class="{'in-tab':inTab}">
    <c-header :title="'购物车'" :backType="inTab? 0 : 1"></c-header>
    <div class="c-page-body header-pd">
      <div class="list" v-if="list && list.length > 0" style="margin-top:0.1rem;">
        <div class="item" v-for="(item,index) in list" :key="index">
          <label class="item-checkbox-wrap">
            <c-checkbox v-model="bool"></c-checkbox>
          </label>
          <img
            class="item-img"
            src="//gw.alicdn.com/bao/uploaded/i2/2010197355/O1CN011ZH7Nc24CdYb7wOWq_!!2010197355.jpg_200x200Q50s50.jpg"
            alt
          >
          <div class="item-content">
            <router-link
              tag="div"
              to="/items/1"
              class="item-name"
            >商品名称商品名称商品名称商品名称名称商品品名称商品名称商品品名称商品商品品名称商品品名称商品品333</router-link>
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
    <div class="item_page_footer">
      <div class="item_page_footer_content chen_center_absolute">
        <div class="item_page_footer_follow_wrap">
          <label>
            <c-checkbox v-model="bool" style="margin-left:0.1rem;margin-right:0.08rem;"></c-checkbox>全选
          </label>
          <div class="amount-wrap">
            <div class="amount">
              合计:
              <span class="amount-strong">￥199</span>
            </div>
            <div class="hint">不含运费</div>
          </div>
        </div>
        <div class="chen_center_absolute_center item_page_footer_buys_wrap">
          <div class="chen_center_absolute_column item_page_footer_buys" @click="closePopModel(1)">
            <span>结算(0)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    inTab: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      num: "",
      bool: true,
      list: [1, 2, 5, 1, 34, 434]
    };
  }
};
</script>
