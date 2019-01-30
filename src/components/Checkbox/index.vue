<style lang="scss" scoped>
@import "~@/css/var";

.c-checkbox-input {
  display: none;
}

$size:0.21rem;
.c-checkbox-core {
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  border: 1px solid #ccc;
  position: relative;
  width: $size;
  height: $size;
  vertical-align: middle;
}

.c-checkbox-core::after {
  border: 2px solid #fff;
  border-left: 0;
  border-top: 0;
  content: " ";
  top: 50%;
  left: 50%;
  position: absolute;
  width: $size - 0.15rem;
  height: $size - 0.1rem;
  transform: translate(-50%,-50%) rotate(45deg) scale(0);
  transition: transform 0.2s;
}

.c-checkbox-input:checked + .c-checkbox-core {
  background-color: $color-primary;
  border-color: $color-primary;
}

.c-checkbox-input:checked + .c-checkbox-core::after {
  transform:translate(-50%,-55%) rotate(45deg) scale(1);
}
</style>

<template>
  <span class="c-checkbox">
    <label>
      <input type="checkbox" class="c-checkbox-input" v-model="model">
      <span class="c-checkbox-core"></span>
    </label>
  </span>
</template>


<script>
export default {
  computed:{
    model:{
      get(){
        return this.value;
      },
      set(val){
        this.$emit('input', val);
      }
    }
  },
  props:{
    value:{},
  }
};
</script>
