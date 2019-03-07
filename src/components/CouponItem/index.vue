<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.list_box {
  .list_item {
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 0.05rem;
    overflow: hidden;
    margin-bottom: pxTorem(30);
    background: #fff;

    &:before,
    &:after {
      content: " ";
      position: absolute;
      left: 0.9rem;
      transform: translate(-50%, 0);
      width: 0.12rem;
      height: 0.05rem;
      background: #f5f5f5;
    }

    &::before {
      bottom: 0rem;
      border-radius: 0.255rem 0.255rem 0 0;
    }

    &::after {
      top: 0rem;
      border-radius: 0 0 0.255rem 0.255rem;
    }

    &.disabled {
      .item_l {
        background:$color-primary-gradient-disabled;
      }
    }

    .item_l {
      width: 0.9rem;
      background: $color-primary-gradient;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.05rem 0rem;
      color: #fff;
      .num {
        font-size: 0.22rem;
        span {
          font-size: pxTorem(38);
          font-weight: bold;
        }
      }
      .des {
        font-size: 0.12rem;
      }
    }
    .item_r {
      flex: 1;

      padding: pxTorem(26) pxTorem(30) pxTorem(18) pxTorem(18);
      .r_til {
        font-size: pxTorem(36);
        font-weight: 600;
      }
      .r_des {
        color: #666666;
        margin-bottom: 0.1rem;
      }
      .r_footer {
        color: #ccc;
        font-size: 0.12rem;
      }
    }
  }

  .item-slot {
    @include flexbox;
    flex-direction: column;
    justify-content: center;
    padding: 0.05rem;
  }
}
</style>
<template>
  <div class="list_item" :class="{disabled:disabled}">
    <div class="item_l chen_center_absolute_column">
      <p class="num">￥{{deductPrice}}</p>
      <p class="des">{{ limitPrice == 0 ? '无门槛' : `满${limitPrice}使用`}}</p>
    </div>
    <div class="item_r">
      <p class="r_til">{{name}}</p>
      <p class="r_des">{{desc}}</p>
      <div class="chen_center_absolute r_footer">
        <div>{{startTime | date}}-{{endTime | date}}</div>
      </div>
    </div>
    <div class="item-slot">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {},
    desc: {},
    deductPrice: {},
    limitPrice: {},
    startTime: {},
    endTime: {},
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

