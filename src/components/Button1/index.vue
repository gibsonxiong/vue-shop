<style lang="scss" scoped>
@import "~@/css/var";
.c-btn {
  margin: auto;
  border: none;
  text-align: center;
  padding: 0 0.2rem;
}

.btn-icon {
  vertical-align: top;
}

//color
.btn-color-light {
  color: #777;
  background-color: $color-light;
  border: 1px solid #e8e8e8;

  &:disabled {
    cursor: not-allowed;
    color: #b5b5b5;
  }

  &:not(:disabled):active {
    background-color: $color-light-active;
  }
}

.btn-color-dark {
  color: #fff;
  background-color: $color-dark;

  &:disabled {
    cursor: not-allowed;
    color: #fff;
    background-color: $color-dark-disabled;
  }

  &:not(:disabled):active {
    background-color: $color-dark-active;
  }
}

.btn-color-primary {
  color: #fff;
  background: $color-primary-gradient;

  &:disabled {
    cursor: not-allowed;
    background: $color-primary-gradient-disabled;
  }

  &:not(:disabled):active {
    background: $color-primary-gradient-active;
  }
}

.btn-color-secondly {
  color: #fff;
  background-color: $color-secondly;

  &:disabled {
    cursor: not-allowed;
    background-color: $color-secondly-disabled;
  }

  &:not(:disabled):active {
    background-color: $color-secondly-active;
  }
}

.btn-color-success {
  color: #fff;
  background-color: $color-success;

  &:disabled {
    cursor: not-allowed;
    background-color: $color-success-disabled;
  }

  &:not(:disabled):active {
    background-color: $color-success-active;
  }
}

.btn-color-warning {
  color: #fff;
  background-color: $color-warning;

  &:disabled {
    cursor: not-allowed;
    background-color: $color-warning-disabled;
  }

  &:not(:disabled):active {
    background-color: $color-warning-active;
  }
}

.btn-color-danger {
  color: #fff;
  background-color: $color-danger;

  &:disabled {
    cursor: not-allowed;
    background-color: $color-danger-disabled;
  }

  &:not(:disabled):active {
    background-color: $color-danger-active;
  }
}

//type
.btn-type-plain {
  border-radius: 0;
}

.btn-type-radius {
  border-radius: 0.04rem;
}

.btn-type-round {
  border-radius: 0.2rem;
}

.btn-link {
  border: none;
  background: transparent;

  &.btn-color-light {
    color: #999;
  }

  &.btn-color-dark {
    color: $color-dark;
  }

  &.btn-color-primary {
    color: $color-primary;
  }

  &.btn-color-secondly {
    color: $color-secondly;
  }

  &.btn-color-success {
    color: $color-success;
  }

  &.btn-color-warning {
    color: $color-warning;
  }

  &.btn-color-danger {
    color: $color-danger;
  }
}

.btn-box {
  border: none;
  background: transparent;

  &.btn-color-light {
    color: #999;
  }

  &.btn-color-dark {
    color: $color-dark;
  }

  &.btn-color-primary {
    color: $color-primary;
  }

  &.btn-color-secondly {
    color: $color-secondly;
  }

  &.btn-color-success {
    color: $color-success;
  }

  &.btn-color-warning {
    color: $color-warning;
  }

  &.btn-color-danger {
    color: $color-danger;
  }
}

.btn-ghost {
  background: transparent;
  border: 1px solid;

  &.btn-color-light {
    color: #777;
    border-color: #aaa;
  }

  &.btn-color-dark {
    color: $color-dark;
    border-color: $color-dark;
  }

  &.btn-color-primary {
    color: $color-primary;
    border-color: $color-primary;
  }

  &.btn-color-secondly {
    color: $color-secondly;
    border-color: $color-secondly;
  }

  &.btn-color-success {
    color: $color-success;
    border-color: $color-success;
  }

  &.btn-color-warning {
    color: $color-warning;
    border-color: $color-warning;
  }

  &.btn-color-danger {
    color: $color-danger;
    border-color: $color-danger;
  }
}

//size
.btn-size-sm {
  height: 0.3rem;
  line-height: 0.3rem;
  min-width: 0.8rem;

  .btn-icon {
    font-size: 0.12rem;
  }
}

.btn-size-md {
  height: 0.35rem;
  line-height: 0.35rem;
  min-width: 0.9rem;

  .btn-icon {
    font-size: 0.14rem;
  }
}

.btn-size-lg {
  height: 0.4rem;
  line-height: 0.4rem;
  min-width: 1.2rem;

  .btn-icon {
    font-size: 0.16rem;
  }
}

//block
.btn-block {
  width: 100%;
  display: block;
}
</style>
<template>
  <button
    class="c-btn"
    :class="[
    color?`btn-color-${color}`:'',
    type ? `btn-type-${type}`:'',
    size? `btn-size-${size}` : '',
    block? 'btn-block':'',
    link? 'btn-link':'',
    ghost? 'btn-ghost':''
    ]"
    :disabled="disabled"
    @click="$emit('click',$event)"
  >
    <i class="btn-icon iconfont icon-like"></i>
    <span>
      <slot></slot>
    </span>
    <i class="btn-icon iconfont icon-like"></i>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    afterIcon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "light"
    },
    type: {
      type: String,
      default: "radius"
    },
    size: {
      type: String,
      default: "md"
    },
    block: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
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

