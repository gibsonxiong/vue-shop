<style lang="scss" scoped>
.c-search-input {
  $height: 0.3rem;
  display: inline-block;

  &__wrap {
    // display: flex;
    position: relative;
  }

  &__icon {
    display: inline-block;
    position: absolute;
    top: -0.01rem;
    left: 0.1rem;
  }

  &__inner {
    border: 0;
    border-radius: 0.2rem;
    width: 100%;
    height: $height;
    line-height: $height;
    background: rgba(222, 222, 222, 0.6) !important;
    font-size: 0.14rem;
    color: #444;
    -webkit-appearance: none;
    display: inline-block;
    padding: 0 0.15rem 0 0.32rem;

    &:disabled {
      background: rgba(222, 222, 222, 0.6) !important;
    }
  }
}
</style>

<template>
  <div class="c-search-input">
    <form action="javascript:;" @submit.prevent="search" autocomplete="off">
      <div class="c-search-input__wrap">
        <span class="c-search-input__icon iconfont icon-search"></span>
        <input
          ref="input"
          v-bind="$attrs"
          :value="value"
          :placeholder="placeholder"
          @input="handleInput"
          class="c-search-input__inner"
          type="text"
          autofocus
          autocomplete="off"
        >
      </div>
    </form>
  </div>
</template>


<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    search() {
      this.$emit("search");
    },
    focus() {
      setTimeout(() => {
        this.$refs.input.focus();
      }, 300);
    }
  }
};
</script>
