<style lang="scss" scoped>
@import "~@/css/include";
.padding-wrap {
  padding-bottom: 0.7rem;
}
.evaluate {
  background: #fff;
  padding: 0.1rem;
  margin-top: 0.1rem;
}
.evaluate_t img {
  width: 0.35rem;
      height: 0.35rem;
  border-radius: 50%;
}
.evaluate span {
  padding-left: 0.05rem;
}
.evaluate_txt {
  padding: 0.1rem 0;
}
.eva_txt_img {
  width: 100%;
  height: 3rem;
  margin: auto;
  padding: 0.03rem 0;
}
img {
  object-fit: cover;
}
.ccc {
  color: #ccc;
}
.primary {
  color: $color-primary;
}
.goodsitem {
  background: #f8f8f8;
  @include flexbox;
  margin-top: 0.1rem;
}
.goodsitem img {
  width: 0.7rem;
  height: 0.7rem;
}
.goodsitem ul li:first-of-type {
  overflow: hidden;
  height: 0.4rem;
  line-height: 0.2rem;
  margin-bottom: 0.05rem;
  color: #444;
}
.goodsitem ul {
  padding: 0.05rem;
}

.detail_btn {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  // display: none;
}
.detail_btn button {
  border: 1px solid $color-border;
  padding: 0.15rem;
  // width: 50%;
  flex: 1;
  background: #fff;
}
.evaluation_nother {
  margin-top: 0.1rem;
  background: #fff;
  padding: 0 0.1rem 0.5rem 0.1rem;
}
.evaluation_nother_con {
  display: flex;
  align-items: flex-start;
  padding: 0.1rem 0;
}
.evaluation_nother_con img {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
}
.evaluation_nother_con ul {
  padding-left: 0.1rem;
  width: 82%;
}
.evaluation_nother_con ul li:first-of-type {
  font-weight: 600;
}
.evaluation_nother_con ul li:nth-child(2) span:first-of-type {
  color: #999;
  font-size: 0.12rem;
}
.evaluation_nother_con ul li:nth-child(2) span:last-of-type {
  color: #3a73d2;
  font-size: 0.12rem;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'评价详情'"></c-header>
    <div class="c-page-body">
      <div class="padding-wrap c-header-pd">
        <div class="evaluate">
          <div class="evaluate_t" style="display:flex;align-items: center;">
            <img v-if="rateInfo.user && rateInfo.user.avatar" :src="rateInfo.user.avatar | hostUrl">
            <img v-else class="avator" src="@/assets/default_avator.jpg">
            <span>{{rateInfo.user && rateInfo.user.nickname}}</span>
          </div>
          <p style="color:#999;font-size:0.13rem;padding-top:0.05rem;">
            <span>{{rateInfo.createTime | date}}</span>
            <span>{{rateInfo.itemPropvalues}}</span>
          </p>
          <p class="evaluate_txt">{{rateInfo.content || '用户没有填写评价内容'}}</p>
          <img
            v-for="(src,index) in rateInfo.rateImgList"
            :key="index"
            class="eva_txt_img"
            :src="src  | hostUrl"
          >
          <router-link tag="div" :to="{path:`/items/${rateInfo.itemId}`}" class="goodsitem">
            <img :src="rateInfo.itemImg">
            <ul>
              <li>{{rateInfo.itemName}}</li>
              <li>￥{{rateInfo.itemPrice}}</li>
            </ul>
          </router-link>
        </div>
        <!-- <div class="evaluation_nother">
          <p style="border-bottom: 1px solid #cccccc52;padding: 0.1rem 0;">
            <i class="iconfont icon-comment_light" style="color:#3A73D2"></i>
            全部评论(
            <span>{{othder_item.length}}</span>)
          </p>
          <p style="padding:0.5rem;text-align:center;color:#ccc;" v-if="shopdata">沙发还空着，快来抢吧~</p>
          <div class="evaluation_nother_con" v-else v-for="(val,index) in othder_item" :key="index">
            <img src="http://img4.imgtn.bdimg.com/it/u=283021115,1881290219&fm=26&gp=0.jpg">
            <ul>
              <li>{{val.name}}</li>
              <li>
                <span>{{val.time}}</span>
                <span @click="delete_evalue()">删除</span>
              </li>
              <li>{{val.txt}}</li>
            </ul>
            <p>
              <i class="iconfont icon-appreciate_light"></i>赞
            </p>
          </div>
        </div>-->
      </div>
    </div>
    <div class="detail_btn">
      <!-- <button>
        <i class="iconfont icon-comment_light"></i>评论
      </button>-->
      <button @click="likeRate">
        <i class="iconfont" :class="rateInfo.rateLikeId ? 'icon-appreciate_fill_light primary' : 'icon-appreciate_light'"></i>
        {{rateInfo.rateLikeId ? '取消点赞': '点赞'}}({{rateInfo.likeCount}})
      </button>
    </div>
  </div>
</template>
<script>
import services from "@/services";
import filter from "@c/filter";

export default {
  data() {
    return {
      rateId: "",
      rateInfo: {},
      othder_item: [],
      shopdata: true
    };
  },
  methods: {
    delete_evalue() {},

    async fetchRateInfo() {
      try {
        let { rateId } = this;
        let res = await services.fetchRateInfo({
          rateId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.rateInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    async likeRate() {
      try {
        this.$showLoading();
        let { itemId, flag } = this;
        let isLike = this.rateInfo.rateLikeId ? false : true;
        let res = await services.rateLike({
          rateId:this.rateId,
          isLike
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.rateInfo.rateLikeId = res.data.rateLikeId;
        if (isLike) {
          this.rateInfo.likeCount++;
        } else {
          this.rateInfo.likeCount--;
        }

        this.$hideLoading();
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.rateId = this.$route.query.rateId;
    this.fetchRateInfo();
  }
};
</script>

