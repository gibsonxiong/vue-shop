<style lang="scss" scoped>
.c-number-input {
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="c-number-input">
    <button class="c-number-input__sub" :disabled="subDisabled" @click="adjust(false)">
      <i class="iconfont icon-move"></i>
    </button>
    <input type="number" :step="step" :value="value" @change="handleChange($event.target.value)">
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
    max: [String, Number]
  },
  data() {
    return {
      subDisabled: false,
      plusDisabled: false
    };
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

      console.log(value);
      if (!this.checkRang(value)) {
        return alert("超出范围");

      }

      this.$emit("input", value);
    },
    checkRang(value) {
      let valid = true;
      value = Number(value);

      this.subDisabled = false;
      this.plusDisabled = false;

      if (this.min || this.min === 0) {
        let min = Number(this.min);

        if (value <= min) {
          this.subDisabled = true;
        }

        if (value < min) {
          valid = false;
        }
      }

      if (this.max || this.max === 0) {
        let max = Number(this.max);

        if (value >= max) {
          this.plusDisabled = true;
        }

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
