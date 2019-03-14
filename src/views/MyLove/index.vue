<style scoped lang="scss">
@import '~@/css/mixin';


.footprint_t {
  padding: 0.1rem 0;
  @include border-bottom();
}
.footprint_t i {
  padding-right: 0.05rem;
}
.footprint_t span {
  display: inline-block;
  width: 49%;
}
.footprint_t span:last-of-type {
  text-align: right;
}
</style>

<template>
  <div class="footprint-page page">
    <c-header :title="'我的关注'"></c-header>
    <div class="c-page-body header-pd">
      <div v-if="itemList.length > 0">
        <c-goods-item
          v-for="(item,index) in itemList"
          :key="index"
          :id="item.id"
          :img="item.imgList[0]"
          :name="item.name"
          :price="item.itemPrice"
        ></c-goods-item>
      </div>
      <c-empty-hint v-else-if="!loading" icon="icon-like" hint="没有关注的商品"></c-empty-hint>
    </div>
  </div>
</template>

<script>
import services from "@/services";

export default {
  data() {
    return {
      list: [],
      loading: false
    };
  },
  computed: {
    itemList() {
      return this.list.map(item => item.item);
    }
  },
  methods: {
    async listFavorite() {
      try {
        this.loading = true;
        this.$showLoading();
        this.list = [];
        let res = await services.listFavorite();

        if (services.$isError(res)) throw new Error(res.message);

        this.loading = false;
        this.$hideLoading();
        this.list = res.data;
      } catch (err) {
        this.loading = false;
        this.$hideLoading();
        this.$toast(err.message);
      }
    }
  },
  created() {
    this.listFavorite();
  }
};
</script>
