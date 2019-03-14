<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
li:first-of-type {
  margin: 0;
}
li {
  list-style: none;
  margin-top: 0.1rem;
  background: #fff;
  -moz-box-shadow: 0px 2px 6px #ccc;
  -webkit-box-shadow: 0px 2px 6px #ccc;
  box-shadow: 0px 2px 6px #ccc;
}
.see_de {
  border: 1px solid #ea4f15;
  color: #ea4f15;
  padding: 0.02rem 0.04rem;
  -moz-box-shadow: 0px 21px 0px #ea4f15;
  -webkit-box-shadow: 0px 1px 0px #ea4f15;
  box-shadow: 0px 1px 0px #ea4f15;
}
.icon-tuikuan {
  color: #ea4f15;
}
.li_one {
  width: 95%;
  margin: auto;
  padding: 0.1rem 0px;
}
.icon-shoplight,
.icon-tuikuan {
  padding-right: 0.05rem;
}
.li_two {
  width: 100%;
  margin: auto;
  padding: 0.1rem;
  display: flex;
  // border-bottom: 1px solid rgb(244, 244, 244);
  @include border-bottom();
  background: #f8f8f8;
}
img {
  width: 0.7rem;
  height: 0.7rem;
}
.li_three {
  width: 100%;
  margin: auto;
  padding: 0.1rem;
  // border-bottom: 1px solid rgb(244, 244, 244);
  @include border-bottom();
}
.li_four {
  width: 95%;
  margin: auto;
  padding: 0.1rem 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'退款/售后'"></c-header>
    <div class="c-page-body header-pd">
      <div class="refundlist">
        <ul>
          <li v-for="(refund,index) in refundList" :key="index">
            <div class="li_one" style>
              <i class="iconfont icon-shoplight" style></i>
              <span>母婴用品商城</span>
              <span style="transform: rotateZ(180deg); display: inline-block;">
                <i class="iconfont icon-back_light" style="font-size: 14px;"></i>
              </span>
            </div>
            <div class="li_two" style>
              <div style="width: 20%;">
                <img :src="refund.order_item.itemImg" alt style>
              </div>
              <div style="width: 65%; padding: 0px 0.1rem;">
                <span>{{refund.order_item.itemName}}</span>
                <p style="color: rgb(153, 153, 153); font-size: 12px;">
                  <span>{{refund.order_item.itemPropvalues}}</span>
                </p>
              </div>
              <div style="width: 15%; text-align: right;">
                <div style="color: rgb(153, 153, 153); font-size: 12px;">
                  <span>×</span>
                  <span>{{refund.order_item.quantity}}</span>
                </div>
              </div>
            </div>
            <div class="li_three">
              <p style="display: flex;align-items: center;">
                <i class="iconfont icon-tuikuan"></i>
                <span style="padding-right:0.05rem">{{refund.type | refundType}}</span>
                <span>{{refund.status | refundStatus}}</span>
              </p>
            </div>
            <div class="li_four">
              <span
                class="see_de"
                @click="$router.push({path:'/refund_detail', query:{refundId: refund.id}})"
              >查看详情</span>
            </div>
          </li>
        </ul>
        <c-empty-hint v-if="refundList.length == 0 && !loading" icon="icon-refund" hint="您还没有退款/售后"></c-empty-hint>
      </div>
    </div>
  </div>
</template>
<script>
import services from "@/services";
export default {
  data() {
    return {
      refundList: [],
      loading: false
    };
  },
  methods: {
    async fetchRefundList() {
      try {
        this.loading = true;
        this.$showLoading();
        this.refundList = [];
        let res = await services.fetchRefundList();

        if (services.$isError(res)) throw new Error(res.message);

        this.loading = false;
        this.$hideLoading();
        this.refundList = res.data;
      } catch (err) {
        this.loading = false;
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.fetchRefundList();
  }
};
</script>

