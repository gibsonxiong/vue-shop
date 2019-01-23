<style lang="scss" scoped>
.c-home {
  img{
    width: 100%;
  }
}
</style>

<template>
  <div class="c-home">
    <c-header :backType="0" :theme="'transparent'">
      <c-search-input slot="center" @click.native="$emit('toSearch')" style="width:100%;" disabled="disabled"></c-search-input>
    </c-header>
    <div class="c-page-body tab-pd" style="text-align:center;">
      <img src="//via.placeholder.com/350x150" alt="">

      <router-link to="/items/1">商品详情</router-link>
    </div>
  </div>
</template>


<script>
export default {
  created() {
    console.log("home created");
  },
  methods: {
  }
};
</script>
