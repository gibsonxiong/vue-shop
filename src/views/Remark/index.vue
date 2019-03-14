<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.padding-wrap{
  padding-bottom: 0.65rem;
}

textarea,
.img-wrap {
  background: #fff;
  padding: 0.1rem;
}
.remark_lable {
  // width: 100%;
  text-align: center;
  font-size: 0.15rem;
  padding: 0.1rem 0;
}
.remark_img {
  background: #fff;
}
textarea {
  width: 100%;
  border: 0;
  letter-spacing: 0.005rem;
}

.star_num {
  background: #fff;
  text-align: center;
  padding: 0.1rem 0;
  color: $color-primary;
}

.label {
  display: flex;
  align-items: center;
  background: #fff;
  // border-bottom: 1px solid #f4f4f4;
  @include border-bottom();
}
.remark {
  margin-bottom: 0.1rem;
}
.shop_img {
  width: 0.5rem;
  height: 0.5rem;
  object-fit: cover;
  padding: 0.1rem;
}
.footer {
  width: 100%;
  padding: 0.15rem 0.1rem;
  text-align: center;
  background: $color-primary;
  color: #fff;
  position: absolute;
  bottom: 0;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'评价'"></c-header>
    <div class="c-page-body header-pd">
      <div class="padding-wrap">
        <div class="remark" v-for="(orderItem,index) in orderInfo.order_items" :key="index">
          <div class="label">
            <img class="shop_img" :src="orderItem.itemImg">

            <p class="remark_lable">商品描述</p>

            <c-rate v-model="params[index].score"></c-rate>
            <p class="star_num">{{params[index].score | score}}</p> 
          </div>
          <div class="remark_img">
            <textarea v-model="params[index].content" maxlength="200" rows="5" placeholder="宝贝满足您的期待吗？说说它的优点和美中不足的地方吧"></textarea>
            <div class="img-wrap">
              <c-upload :data="params[index].rateImgList" @remove="img_del(index,$event)" @add="img_add(index,$event)"></c-upload>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" @click="rate()">
      <span>评价</span>
    </div>
  </div>
</template>
<script>
import services from "@/services";

export default {
  data() {
    return {
      orderId: "",
      orderInfo: {},

      score: 5,
      imgs: [],
      // imgs_file: [],
      // file_show: true

      params:[]
    };
  },
  filters: {
    score(val) {
      return (
        {
          "1": "非常差",
          "2": "差",
          "3": "一般",
          "4": "好",
          "5": "非常好"
        }[val] || ""
      );
    }
  },
  methods: {
    async fetchOrderInfo() {
      try {
        let { orderId } = this;
        let res = await services.fetchOrderInfo({
          orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.orderInfo = res.data;

        this.orderInfo.order_items.forEach((orderItem)=>{
          this.params.push({
            orderItemId: orderItem.id,
            itemId: orderItem.itemId,
            score: 5,
            content: "",
            rateImgList: []
          });
        });
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    img_del(index,deleteIndex) {
      this.params[index].rateImgList.splice(deleteIndex, 1);
    },
    async img_add(index,src) {
      this.params[index].rateImgList.push(src);
    },

    async rate() {
      try {
        let params = {
          orderId: this.orderId,
          data:this.params
        };
        let res = await services.rate({
          params
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$router.replace('/rate-result');
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.orderId = this.$route.query.orderId;

    this.fetchOrderInfo();
  }
};
</script>

