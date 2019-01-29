<style lang="scss" scoped>
$border-color:#ddd;
.c-number-input {
    display: inline-flex;
    align-items: stretch;
    width: 0.9rem;
    height: 0.23rem;
    font-size: 0.14rem;

  &__sub,
  &__plus{
        background: #f5f5f5;
    border:1px solid $border-color;
    padding:0 0.04rem;
    font-size: 0.12rem;
    color: #777;

    &:disabled{
      color: #e4e4e4;
    }

    .iconfont{
      font-size: 0.12rem;
    }
  }

  &__inner{
    flex: 1;
    width: 100%;
    border: 0;
    border-top:1px solid $border-color;
    border-bottom:1px solid $border-color;
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
<<<<<<< HEAD
    <input type="number" :step="step" disabled :value="value" @change="handleChange($event.target.value)">
=======
    <input class="c-number-input__inner" ref="input" type="number" :step="step" :value="value" @change="handleChange($event.target.value)">
>>>>>>> 348378eeb520d654701f602da8c9ac18750144a5
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
    };
  },
  computed:{
    subDisabled(){
      //小于最小值
      if ( (this.min || this.min === 0) && this.value <= this.min) {
        return true;
      }else{
        return false;
      }
    },
    plusDisabled(){
      //小于最小值
      if ( (this.max || this.max === 0) && this.value >= this.max) {
        return true;
      }else{
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
