<style scoped lang="scss">
.shopcart-page {
}

</style>

<template>
  <div class="shopcart-page page">
    <c-shopcart :inTab="false" ref="shopcart" cacheId="shopcart"></c-shopcart>
  </div>
</template>

<script>
import routerCachePage from "@/routerCache/page";

export default {
  mixins:[
    routerCachePage()
  ],
  data() {
    return {
      
    };
  },
  methods:{
    
  }
};
</script>
