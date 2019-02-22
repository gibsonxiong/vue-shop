<style scoped lang="scss">
.pay-result-page {
}
</style>

<template>
  <div class="pay-result-page">
    <c-header :title="'支付结果'">
      <router-link slot="right" to="/order">
        完成
      </router-link>
    </c-header>
    <div class="c-page-body header-pd">
      支付成功

    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      orderId: ""
    };
  },
  methods: {
    async pay() {
      try {
        let res = await services.payOrder({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        //弹窗
        this.$confirm('xxxxxx','确认支付').then((res)=>{
          
        });

        //查询支付结果
        this.getPayStatus(0);
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    //查询支付结果
    async getPayStatus(time) {
      try {
        let res = await services.getPayStatus({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        time++;
        if (res.data.result) {
          //跳转支付成功页面

        } else if (time <= 10) {
          setTimeout(() => {
            this.getPayStatus(time);
          }, 3000);
        }

        //查询支付结果
        this.getPayStatus();
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;
  }
};
</script>
