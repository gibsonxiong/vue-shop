<style lang="scss" scoped>
.c-home {
  img{
    width: 100%;
  }
}
</style>

<template>
  <div class="c-home">
    <c-header ref="header" :backType="0" :style="{'background-color':`rgba(245, 245, 245,${headerOpacity})`,'border-bottom':'0'}">
      <c-search-input slot="center" @click.native="$emit('toSearch')" style="width:100%;" disabled="disabled"></c-search-input>
    </c-header>
    <div class="c-page-body tab-pd" ref="body" style="text-align:center;">
      <img src="https://oss.suning.com/aps/aps_learning/image/429081201/20190122/4cc97e0036ac4c9abde8fede11fa7575.jpg?format=_is_1242w_610h" alt="">

      <router-link to="/items/1">商品详情</router-link>

      <div style="height:500px;"></div>

      <img src="https://oss.suning.com/aps/aps_learning/image/429081201/20190122/4cc97e0036ac4c9abde8fede11fa7575.jpg?format=_is_1242w_610h" alt="" v-for="(item,index) in 30" :key="index">
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      headerOpacity:0,
    }
  },
  created() {
    console.log("home created");
  },
  mounted(){
    this.bindEvent();
  },
  methods: {
    bindEvent(){
      let body = this.$refs.body;
      body.addEventListener('scroll',()=>{
        let end = 100;
        let scrollTop  = Math.min(body.scrollTop, end);
        this.headerOpacity = scrollTop / end;
      });
    },
    //父类调用
    tabActived(){
      this.$refs.header.resizeCenter();
    }
  },
};
</script>
