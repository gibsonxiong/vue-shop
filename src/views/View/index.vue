<style scoped lang="scss">
.temp-page {

}
</style>

<template>
  <div class="temp-page page">
    <c-header :title="'组件'"></c-header>
    <div class="c-page-body header-pd">
      <c-cell-list style="margin-top:0.15rem;">
        <c-cell
          name="Button"
          @click="$router.push('/view-button')"
        ></c-cell>
      </c-cell-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    
  }
};
</script>
