<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.refund_one {
  display: flex;
  background: #fff;
  padding: 0.1rem;
}
.refund_one img {
  width: 0.7rem;
  height: 0.7rem;
  object-fit: cover;
}
.refund_one ul {
  padding-left: 0.1rem;
}
.refund_one ul li:last-of-type {
  color: #999;
}
.refund_two {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.refund_three {
  padding: 0.1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  @include border-top();
}
.refund_four {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0.1rem;
}
.refund_four span {
  color: $color-primary;
}

.refund-input {
  border: none;
  color: $color-primary;
  background-color: #fff;
}
.refund_toast {
  color: #999;
  padding: 0.1rem;
}
.refund_five {
  background: #fff;
  padding: 0.1rem;
}
.refund_five input {
  border: 0;
  width: 75%;
}
.refund_six {
  background: #fff;
  padding: 0.1rem;
  margin-top: 0.1rem;
}
//

.feedback_add_img {
  display: flex;
  flex-wrap: wrap;
}
#file {
  width: 0.79rem;
  height: 0.79rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}
.img_box {
  width: 0.79rem;
  height: 0.79rem;
  position: relative;
  display: flex;
  margin: 0.05rem;
}
.img_del {
  position: absolute;
  font-size: 0.2rem;
  color: red;
  background: #fff;
  top: -0.13rem;
  left: -0.08rem;
  border-radius: 50%;
}
img {
  width: 100%;
  object-fit: cover;
}
.remark_add {
  width: 0.79rem;
  height: 0.79rem;
  color: #bcbcbc;
  text-align: center;
  border: 1px dashed #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.remark_add p {
  font-size: 0.12rem;
}
.refund_seven {
  color: #fff;
  background: $color-primary;
  text-align: center;
  padding: 0.15rem;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'申请退款'"></c-header>
    <div class="c-page-body header-pd">
      <div class="refund">
        <div class="refund_one" v-if="refundInfo.orderItem">
          <img :src="refundInfo.orderItem.itemImg">
          <ul>
            <li>{{refundInfo.orderItem.itemName}}</li>
            <li>
              <span>{{refundInfo.orderItem.itemPropvalues}}</span>
            </li>
          </ul>
        </div>
        <!-- <div class="refund_two" @click="to_popup(2)">
          <p>货物状态</p>
          <p>
            <span>{{shopStatus}}</span>
            <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
              <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
            </span>
          </p>
        </div>-->
        <div class="refund_three" @click="popupVisible=true">
          <p>退款原因</p>
          <p>
            <span>{{refundReason || '请选择'}}</span>
            <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
              <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
            </span>
          </p>
        </div>
        <div class="refund_four">
          退款金额：
          <span>￥</span>
          <input class="refund-input" type="text" v-model="refundFee" disabled>
        </div>
        <p class="refund_toast">最多￥{{refundInfo.maxRefundFee}}，含发货邮费￥{{refundInfo.postFee}}</p>
        <div class="refund_five">
          退款说明：
          <input placeholder="选填" v-model="refundDesc">
        </div>
        <div class="refund_six">
          <p style="padding:0 0 0.1rem 0.05rem;">上传凭证</p>
          <div class="img_ul">
            <c-upload :data="refundImgList" @remove="img_del($event)" @add="img_add($event)" :maxLength="3"></c-upload>
          </div>
        </div>

        <div class="refund_seven" @click="submit">
          <p>提交</p>
        </div>
      </div>
    </div>
    <c-select-popup
      title="选择退款原因"
      v-model="refundReason"
      :data="refundReasonData"
      :visible="popupVisible"
      @visibleChange="popupVisible = $event"
      nameKey="label"
      valueKey="value"
    ></c-select-popup>
  </div>
</template>
<script>
import { log } from "util";
import services from "@/services";

export default {
  data() {
    return {
      refundInfo: {},
      popupVisible: false,
      refundReason: "",
      refundFee: "",
      refundDesc: "",
      refundImgList: [],

      refundReasonData: [
        { label: "拍错/多拍/不喜欢", value: "拍错/多拍/不喜欢" },
        { label: "快递一直未送到", value: "快递一直未送到" },
        { label: "未按照约定时间发货", value: "未按照约定时间发货" },
        { label: "快递无跟踪记录", value: "快递无跟踪记录" },
        { label: "骑手送错订单", value: "骑手送错订单" },
        { label: "未按照约定时间送达", value: "未按照约定时间送达" },
        { label: "骑手提前点确认送达", value: "骑手提前点确认送达" },
        {
          label: "商家无法配送，联系我取消",
          value: "商家无法配送，联系我取消"
        },
        { label: "配送时间太长", value: "配送时间太长" },
        { label: "其他", value: "其他" }
      ]
    };
  },
  methods: {
    img_del(index) {
      this.refundImgList.splice(index, 1);
    },
    img_add(src) {
      this.refundImgList.push(src);
    },
    async submit() {
      try {
        let { orderId, orderItemId, refundReason, refundFee, refundDesc,refundImgList  } = this;
        let res = await services.applyRefund({
          orderId,
          orderItemId,
          reason:refundReason,
          refundFee,
          refundDesc,
          refundImgList
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);

        setTimeout(() => {
          this.$router.back();
        }, 1000);
        
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async fetchRefundApplyInfo() {
      try {
        let { orderId, orderItemId } = this;
        let res = await services.fetchRefundApplyInfo({ orderId, orderItemId });

        if (services.$isError(res)) throw new Error(res.message);

        this.refundInfo = res.data;
        this.refundFee = this.refundInfo.maxRefundFee;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;
    this.orderItemId = this.$route.query.orderItemId;

    this.fetchRefundApplyInfo();
  }
};
</script>

