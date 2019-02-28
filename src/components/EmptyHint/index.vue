<style lang="scss" scoped>
.c-empty-hint {
  text-align: center;
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;
  &__img {
    width: 0.95rem;
  }
  &__icon {
    font-size: 0.95rem;
    line-height: 1;
    color: #868686;
  }
  &__hint {
    line-height: 0.22rem;
    text-align: center;
    padding: 0.1rem 0 0.2rem;
    color: #868686;
  }
}
</style>

<template>
  <div class="c-empty-hint">
    <div v-if="imgSrc">
      <img class="c-empty-hint__img" :src="imgSrc">
    </div>
    <div v-if="icon">
      <i :class="`c-empty-hint__icon iconfont ${icon}`"></i>
    </div>
    <div class="c-empty-hint__hint">{{hint}}</div>
    <slot></slot>
  </div>
</template>


<script>
export default {
  props: {
    imgSrc: String,
    icon: String,
    hint: String
  }
};
</script>
