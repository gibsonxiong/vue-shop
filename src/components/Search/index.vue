<style lang="scss" scoped>
.c-search {

  .c-search-header{
    display:flex;
  }
}
</style>

<template>
  <div v-show="visible" class="c-search">
    <c-header :backType="0" ref="header">
      <a slot="left" @click="hideSearch">关闭</a>
      <c-search-input ref="searchInput" slot="center" v-model="searchText" @search="search" style="width:100%;"></c-search-input>
      <a slot="right" @click="search">搜索</a>
    </c-header>

  </div>
</template>


<script>
export default {
  props:{
    visible:{
      type:Boolean,
      default:false
    },
    defaultSearchText:String
  },
  data(){
    return {
      searchText:''
    }
  },
  watch:{
    visible(val){
      if(val){
        this.$refs.searchInput.focus();
        this.$nextTick(()=>{
          this.$refs.header.resizeCenter();
        })
      }
    }
  },
  methods:{
    search(){
      console.log(this.searchText);
    },
    hideSearch(){
      this.$emit('hideSearch');
    }
  },
  created(){
    this.searchText = this.defaultSearchText;
  }
};
</script>
