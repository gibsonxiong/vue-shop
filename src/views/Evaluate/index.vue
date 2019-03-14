<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.evaluate {
  background: #fff;
  padding: 0.1rem;
  margin-bottom: 0.1rem;
}
.evaluate_t img {
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
}

.evaluate_txt {
  padding: 0.05rem 0;
}
.eva_txt_img {
  width: 1.1rem;
  height: 1.1rem;
  margin: auto;
  margin-right: 0.05rem;
  margin-bottom: 0.05rem;
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

.topbar {
  overflow: hidden;
  background: #fff;
  @include border-bottom();
}

.select_data_item {
  float: left;
  color: #555;
  padding: 0.05rem 0.15rem;
  background: #ffe6ea;
  overflow: hidden;
  border-radius: 0.25rem;
  margin: 0.1rem 0.05rem;

  &.black {
    background: #e8e8e8;
  }

  &.active {
    background: $color-primary-gradient;
    color: #fff;
  }
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'评价'"></c-header>
    <div class="c-page-body header-pd">
      <div class="topbar">
        <div class="select_data_item" :class="{active: flag == 'all'}" @click="changeFlag('all')">全部</div>
        <div
          class="select_data_item"
          :class="{active: flag == 'good'}"
          @click="changeFlag('good')"
        >好评</div>
        <div
          class="select_data_item"
          :class="{active: flag == 'middle'}"
          @click="changeFlag('middle')"
        >中评</div>
        <div class="select_data_item black" :class="{active: flag == 'bad'}" @click="changeFlag('bad')">差评</div>
      </div>
      <div v-if="rateList.length > 0">
        <router-link
          tag="div"
          :to="{ path:'/evaluation_detail', query:{rateId: rate.id}}"
          class="evaluate"
          v-for="(rate,index) in rateList"
          :key="index"
        >
          <div class="evaluate_t" style="display:flex;align-items: center;">             
            <img v-if="rate.user && rate.user.avatar" :src="rate.user.avatar | hostUrl">
            <img v-else class="avator" src="@/assets/default_avator.jpg">
            <span style="padding-left: 0.05rem;">{{rate.user.nickname}}</span>
          </div>
          <p style="color:#999;font-size:0.13rem;padding-top:0.05rem;">
            <span>{{rate.createTime | date}}</span>
            <span style="padding-left: 0.05rem;">{{rate.itemPropvalues}}</span>
          </p>
          <p class="evaluate_txt">{{rate.content || '用户没有填写评价内容'}}</p>
          <div>
            <img
              v-for="(img,index) in rate.rateImgList"
              :key="index"
              class="eva_txt_img"
              :src="img | hostUrl"
            >
          </div>
          <p style="text-align:right;padding:0.05rem 0;">
            <span @click.stop="likeRate(rate.id, rate.rateLikeId)">
              <i
                  class="iconfont"
                  :class="rate.rateLikeId ? 'icon-appreciate_fill_light primary' : 'icon-appreciate_light'"
                ></i>
                <span class="ccc">{{rate.likeCount}}</span>
            </span>
          
          </p>
        </router-link>
      </div>
      <c-empty-hint v-else hint="还没有相关评价" icon="icon-comment_light"></c-empty-hint>
    </div>
  </div>
</template>
<script>
import services from "@/services";
import filter from "@c/filter";

export default {
  filters: {
    date: filter.date
  },
  data() {
    return {
      flag: "all",
      itemId: "",
      rateList: []
    };
  },
  methods: {
    async fetchItemRateList() {
      try {
        this.$showLoading();
        let { itemId, flag } = this;
        flag = flag === 'all' ? undefined : flag;
        let res = await services.fetchItemRateList({
          itemId,
          flag
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.rateList = res.data;
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    changeFlag(flag) {
      if (this.flag === flag) return;

      this.flag = flag;

      this.fetchItemRateList();
    },
    async likeRate(rateId, rateLikeId) {
      try {
        this.$showLoading();
        let { itemId, flag } = this;
        let isLike = rateLikeId ? false : true;
        let res = await services.rateLike({
          rateId,
          isLike
        });

        if (services.$isError(res)) throw new Error(res.message);

        let rate = this.rateList.find(item => item.id == rateId);

        rate.rateLikeId = res.data.rateLikeId;
        if (isLike) {
          rate.likeCount++;
        } else {
          rate.likeCount--;
        }

        this.$hideLoading();
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.itemId = this.$route.query.itemId;

    this.fetchItemRateList();
  }
};
</script>

