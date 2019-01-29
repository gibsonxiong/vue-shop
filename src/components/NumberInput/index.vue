<style lang="scss" scoped>
$border-color: #e1e1e1;
$btn-border-radius: 0.04rem;
$btn-width: 0.25rem;
$btn-color: #777;
$btn-bgcolor: #fff;
$btn-bgcolor-active: #eee;
.c-number-input {
  display: inline-flex;
  align-items: stretch;
  width: 0.82rem;
  height: 0.23rem;
  font-size: 0.12rem;
  vertical-align: middle;

  &__sub,
  &__plus {
    color: $btn-color;
    background: $btn-bgcolor;
    border: 1px solid $border-color;
    width: $btn-width;
    transition: 0.2s all;

    &:not(:disabled):active {
      background: $btn-bgcolor-active;
    }

    &:disabled {
      color: #e4e4e4;
    }

    .iconfont {
      font-size: 0.12rem;
    }
  }

  &__sub {
    border-radius: $btn-border-radius 0 0 $btn-border-radius;
  }

  &__plus {
    border-radius: 0 $btn-border-radius $btn-border-radius 0;
  }

  &__inner {
    -webkit-appearance: none;
    flex: 1;
    width: 100%;
    border: 0;
    border-radius: 0;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    background-color: #ffffff;
    text-align: center;
  }
}
</style>

<template>
  <div class="c-number-input">
    <button class="c-number-input__sub" :disabled="subDisabled" @click="adjust(false)">
      <i class="iconfont icon-move"></i>
    </button>
    <input
      class="c-number-input__inner"
      :disabled="inputDisabled"
      ref="input"
      type="number"
      :step="step"
      :value="value"
      @change="handleChange($event.target.value)"
    >
    <button class="c-number-input__plus" :disabled="plusDisabled" @click="adjust(true)">
      <i class="iconfont icon-add1"></i>
    </button>
  </div>
</template>


<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    step: {
      type: [String, Number],
      default: 1
    },
    min: [String, Number],
    max: [String, Number],
    inputDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    subDisabled() {
      //小于最小值
      if ((this.min || this.min === 0) && this.value <= this.min) {
        return true;
      } else {
        return false;
      }
    },
    plusDisabled() {
      //小于最小值
      if ((this.max || this.max === 0) && this.value >= this.max) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    adjust(isPlus) {
      let value = Number(this.value);
      let step = Number(this.step);
      let newVaule;

      if (isPlus) {
        newVaule = value + step;
      } else {
        newVaule = value - step;
      }

      this.handleChange(newVaule);
    },
    handleChange(value) {
      value = Number(value);
      // debugger;
      console.log(value);

      if (!this.checkRang(value)) {
        this.$refs.input.value = this.value;
        return alert("超出范围");
      }
      this.$emit("input", value);
    },
    checkRang(value) {
      let valid = true;
      value = Number(value);

      //小于最小值
      if (this.min || this.min === 0) {
        let min = Number(this.min);

        if (value < min) {
          valid = false;
        }
      }

      //大于最大值
      if (this.max || this.max === 0) {
        let max = Number(this.max);

        if (value > max) {
          valid = false;
        }
      }

      return valid;
    }
  },
  created() {
    if (!this.value) {
      this.$emit("input", 0);
    }

    this.$nextTick(() => {
      this.checkRang(this.value);
    });
  }
};
</script>
