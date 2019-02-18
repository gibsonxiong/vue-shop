<style lang="scss" scoped>
@import "~@/css/var";
.nickname{
    display: flex;
    flex-direction: column;
}
input{
    border:0;
    padding:0.1rem;
    border-radius: 0.05rem;
    margin: 0.1rem;
}
</style>
<template>
  <div class="record-page">
    <c-header :title="'昵称'"></c-header>
    <div class="c-page-body header-pd">
      <div class="nickname">
          <input v-model="name" placeholder="请设置昵称"/>
        <c-button @click="save_nickname">保存</c-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default{
  data() {
    return {
        name:''
     
    };
  },
  methods: {
    save_nickname(){
       if(this.name != ''){
           Toast("保存成功");
       }else{
           Toast("请输入您喜欢的昵称")
       }
         
    }
  },
  created() {}
};
</script>

