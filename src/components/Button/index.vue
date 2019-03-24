<style lang="scss" scoped>
@import "~@/css/var";

$btn-colors: (normal #efefef #666) (primary #ff6b9d #fff)
  (secondly #40aeff #fff) (success #34cc39 #fff) (warning #fba11b #fff)
  (danger #f95c5c #fff);

.c-button {
  border: none;
  text-align: center;
  padding: 0 0.1rem;
  outline: none;

  user-select: none;
}

.btn-icon {
  display: inline-block;
  vertical-align: top;
}

@each $btn-color in $btn-colors {
  $name: nth($btn-color, 1);
  $color: nth($btn-color, 3);
  $background: nth($btn-color, 2);
  $background_disabled: lighten($background, 15%);
  $background_active: darken($background, 10%);

  .btn-color-#{$name} {
    color: $color;
    @if ($name == "primary") {
      background: $color-primary-gradient;
    } @else {
      background: $background;
    }

    &:disabled {
      cursor: not-allowed;
      @if ($name == "normal") {
        color: lighten($color, 25%);
      } @else if($name == "primary") {
        background: $color-primary-gradient_disabled;
      } @else {
        background: $background_disabled;
      }
    }

    &:not(:disabled):active {
      @if ($name == "primary") {
        background: $color-primary-gradient_active;
      } @else {
        background: $background_active;
      }
    }

    //链接模式
    &.btn-link {
      @if ($name == "normal") {
        $background: lighten($color, 15%);
        $background_disabled: lighten($background, 20%);
        $background_active: darken($background, 10%);
      }
      border: none;
      background: transparent;
      color: $background;

      &:disabled {
        background: transparent;
        color: $background_disabled;
      }

      &:not(:disabled):active {
        background: transparent;
        opacity: 0.6;
      }
    }

    //幽灵模式
    &.btn-ghost {
      @if ($name == "normal") {
        $background: lighten($color, 15%);
        $background_disabled: lighten($background, 20%);
        $background_active: darken($background, 10%);
      }
      background: transparent;
      color: $background;
      border: 1px solid $background;

      &:disabled {
        color: $background_disabled;
        border: 1px solid $background_disabled;
      }

      &:not(:disabled):active {
        background: $background_active;
        color: #fff;
        border-color: $background_active;
      }
    }
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

//size
.btn-size-xs {
  font-size: 0.12rem;
  height: 0.26rem;
  line-height: 0.26rem;
  min-width: 0.5rem;

  .btn-loading {
    width: 0.25rem;
    margin-left: -0.05rem;
    margin-right: -0.05rem;
  }

  .btn-icon {
    font-size: 0.12rem;
  }
}

.btn-size-sm {
  font-size: 0.13rem;
  height: 0.3rem;
  line-height: 0.3rem;
  min-width: 0.6rem;

  .btn-loading {
    width: 0.28rem;
    margin-left: -0.05rem;
    margin-right: -0.05rem;
  }

  .btn-icon {
    font-size: 0.13rem;
  }
}

.btn-size-md {
  font-size: 0.14rem;
  height: 0.35rem;
  line-height: 0.35rem;
  min-width: 0.9rem;

  .btn-loading {
    width: 0.3rem;
    margin-left: -0.05rem;
    margin-right: -0.05rem;
  }

  .btn-icon {
    font-size: 0.14rem;
  }
}

.btn-size-lg {
  font-size: 0.16rem;
  height: 0.42rem;
  line-height: 0.42rem;
  min-width: 1.2rem;

  .btn-loading {
    width: 0.3rem;
    margin-left: -0.05rem;
    margin-right: -0.05rem;
  }

  .btn-icon {
    font-size: 0.16rem;
  }
}

.btn-size-xl {
  font-size: 0.16rem;
  height: 0.5rem;
  line-height: 0.5rem;
  min-width: 1.4rem;

  .btn-loading {
    width: 0.3rem;
    margin-left: -0.05rem;
    margin-right: -0.05rem;
  }

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
<style>
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

.icon-loading {
  animation: rotating 2s linear infinite;
}
</style>

<template>
  <button
    class="c-button"
    :class="[
    color?`btn-color-${color}`:'',
    type ? `btn-type-${type}`:'',
    size? `btn-size-${size}` : '',
    block? 'btn-block':'',
    link? 'btn-link':'',
    ghost? 'btn-ghost':''
    ]"
    :disabled="disabled || loading"
    @click="$emit('click',$event)"
  >
    <i v-if="loading" class="btn-icon icon-loading iconfont icon-icon_loading"></i>
    <i v-else-if="icon" :class="`btn-icon iconfont ${icon}`"></i>
    <span>
      <slot></slot>
    </span>
    <i v-if="rightIcon" :class="`btn-icon iconfont ${rightIcon}`"></i>
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
      default: "normal"
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
    },
    icon: {
      type: String,
      default: ""
    },
    rightIcon: {
      type: String,
      default: ""
    },
    loading: {
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

