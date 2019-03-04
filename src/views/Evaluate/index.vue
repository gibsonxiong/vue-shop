<style lang="scss" scoped>
@import "~@/css/var";
.evaluate {
  background: #fff;
  padding: 0.1rem;
  margin-top: 0.1rem;
}
.evaluate_t img {
  width: 0.35rem;
  border-radius: 50%;
}

.evaluate_txt {
  padding: 0.1rem 0;
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
</style>
<template>
  <div class="record-page">
    <c-header :title="'评价'"></c-header>
    <div class="c-page-body header-pd">
      <router-link tag="div" :to="{ path:'/evaluation_detail', query:{rateId: rate.id}}" class="evaluate" v-for="(rate,index) in rateList" :key="index">
        <div class="evaluate_t" style="display:flex;align-items: center;">
          <img :src="rate.user.avatar">
          <span style="padding-left: 0.05rem;">{{rate.user.nickname}}</span>
        </div>
        <p style="color:#999;">
          <span>{{rate.createTime | date}}</span>
          <span style="padding-left: 0.05rem;">{{rate.itemPropvalues}}</span>
        </p>
        <p class="evaluate_txt">{{rate.content}}</p>
        <div>
          <img v-for="(img,index) in rate.rateImgList" :key="index" class="eva_txt_img" :src="img | hostUrl">
        </div>
        <p style="text-align:right;padding:0.05rem 0;">
          <i
            class="iconfont"
            :class="true ? 'icon-appreciate_fill_light primary' : 'appreciate_light'"
          ></i>
          <span class="ccc">1</span>
        </p>
      </router-link>
    </div>
  </div>
</template>
<script>
import services from '@/services';
import filter from '@c/filter';

export default {
  filters:{
    date:filter.date
  },
  data() {
    return {
      itemId:'',
      rateList:[]
    };
  },
  methods: {
    async fetchItemRateList() {
      try {
        let { itemId } = this;
        let res = await services.fetchItemRateList({
          itemId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.rateList = res.data;
      } catch (err) {
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

