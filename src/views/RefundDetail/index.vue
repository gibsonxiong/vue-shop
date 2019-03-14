<style lang="scss" scoped>
@import "~@/css/var";
.refund_detail_one {
  padding: 0.2rem;
  background: $color-primary;
  color: #fff;
}
.refund_detail_two {
  background: #fff;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.refund_detail_two p:last-of-type {
  color: $color-primary;
}
.refund_detail_three {
  margin-top: 0.1rem;
  background: #fff;
     
  //   padding: 0.1rem;
}
.refund_detail_three_label {
  padding: 0.1rem;
}
.refund_detail_three div {
  padding: 0.1rem;
  display: flex;
  background: #f5f5f5;
}
.refund_detail_three ul {
  padding: 0 0.1rem;
   flex: 1;
}
.refund_detail_three ul li:last-of-type {
  color: #999;
  font-size: 0.12rem;
  padding: 0.05rem 0;
}
img {
  width: 0.7rem;
  height: 0.7rem;
  object-fit: cover;
}
.refund_detail_four {
  background: #fff;
  padding: 0.1rem;
}
.refund_detail_four p {
  padding: 0.025rem 0;
  color: #999;
  font-size: 0.12rem;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'退款详情'"></c-header>
    <div class="c-page-body header-pd">
      <div class="refund_detail">
        <div class="refund_detail_one">
          <p>{{refundInfo.status | refundStatus}}</p>
        </div>
        <div class="refund_detail_two">
          <p>退款总金额</p>
          <p>
            <span>￥{{refundInfo.refundFee}}</span>
          </p>
        </div>
        <div class="refund_detail_three">
          <p class="refund_detail_three_label">退款信息</p>
          <div v-if="refundInfo.order_item">
            <img :src="refundInfo.order_item.itemImg">
            <ul>
              <li>
                <p>{{refundInfo.order_item.itemName}}</p>
              </li>
              <li>
                <p>
                  <span>{{refundInfo.order_item.itemPropvalues}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="refund_detail_four">
          <p>
            <span>退款原因：</span>
            <span>{{refundInfo.reason}}</span>
          </p>
          <p>
            <span>退款金额：</span>
            <span>￥{{refundInfo.refundFee}}</span>
          </p>
          <p>
            <span>申请时间：</span>
            <span>{{refundInfo.createTime | date('yyyy-MM-dd hh:mm:ss')}}</span>
          </p>
          <p>
            <span>退款编号：</span>
            <span>{{refundInfo.refundNo}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import services from '@/services';

export default {
  data() {
    return {
      refundId:'',
      refundInfo: {}
    };
  },
  methods: {
    async fetchRefundInfo() {
      try {
        let res = await services.fetchRefundInfo(this.refundId);

        if (services.$isError(res)) throw new Error(res.message);

        this.refundInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.refundId = this.$route.query.refundId;

    this.fetchRefundInfo();
  }
};
</script>

