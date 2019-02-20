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
import services from '@/services';

export default{
  data() {
    return {
        name:''
    };
  },
  methods: {
    async save_nickname(){
       try {
        let res = await services.updateUserInfo({
          nickname:this.name
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);

        setTimeout(() => {
          this.$router.back();
        }, 1000);
      } catch (err) {
        return this.$toast(err.message);
      }
         
    }
  },
  created() {
    this.name = this.$route.query.value;
  }
};
</script>

