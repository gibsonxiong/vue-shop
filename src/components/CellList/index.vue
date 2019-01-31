<style lang="scss" scoped>
@import "~@/css/var";

$padding-x: 0.1rem;
$padding-y: 0.12rem;
.c-cell-list {
  background-color: #fff;
  border-top: 1px solid $color-border;
  border-bottom: 1px solid $color-border;
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
