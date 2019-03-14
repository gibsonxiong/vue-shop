<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

$padding-x: 0.1rem;
$padding-y: 0.12rem;
.c-cell-list {
  background-color: #fff;
  // @include border-top();
  // @include border-bottom();
  padding-left: $padding-x;
}
</style>

<template>
  <div class="c-cell-list">
    <slot></slot>
  </div>
</template>


<script>
export default {};
</script>
