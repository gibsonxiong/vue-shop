<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

$padding-x: 0.1rem;
$padding-y: 0.12rem;
.c-cell {
  @include flexbox(space-between);
  position: relative;
  padding: $padding-y $padding-x $padding-y 0;
  border-bottom: 1px solid $color-border;

  &:last-child {
    border-bottom: none;
  }

  // &.is-link {
  //   padding-right: 0.22rem;

  //   // &:active {
  //   //   margin-left: -$padding-x;
  //   //   padding-left: $padding-x;
  //   //   background-color: #eee;
  //   // }

  //   &:after {
  //     $size: 0.09rem;
  //     content: "";
  //     position: absolute;
  //     top: 50%;
  //     right: 0.1rem;
  //     transform: translateY(-50%) rotate(-45deg);
  //     width: $size;
  //     height: $size;
  //     border: 1.5px solid #ccc;
  //     opacity: 0.4;
  //     border-left: 0;
  //     border-top: 0;
  //   }
  // }

  .c-cell-link-wrap {
    display: block;
  }

  .c-cell-left {
  }

  .c-cell-right {
    @include flex;
    text-align: right;
  }

  .c-cell-icon {
    margin-right: 0.05rem;
    font-size: 0.18rem;
    vertical-align: middle;
    line-height: 0;
  }

  .c-cell-name {
    font-weight: 400;
  }

  .c-cell-value {
    color: #999;
  }
}
</style>

<template>
  <div class="c-cell" :class="{'is-link':isLink}" @click="$emit('click',$event)">
    <slot>
      <div class="c-cell-left">
        <i v-if="icon" :class="`c-cell-icon iconfont ${icon}`" :style="iconStyle"></i>
        <span class="c-cell-name">{{name}}</span>
      </div>
      <div class="c-cell-right">
        <slot name="right">
          <span class="c-cell-value">{{value}}</span>
          <i v-if="isLink" class="iconfont icon-right" style="opacity:0.4;"></i>
        </slot>
      </div>
    </slot>
  </div>
</template>


<script>
export default {
  props: {
    iconStyle: {},
    icon: String,
    name: String,
    value: String,
    isLink: {
      type: Boolean,
      default: true
    }
  }
};
</script>
