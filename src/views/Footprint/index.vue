<style scoped lang="scss">
@import '~@/css/mixin';
.footprint-page {
  background: #e8e8e8;
}

.list-title {
  padding: 0.05rem;
  color: #999;
  font-size: 0.12rem;
}
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
    <c-header :title="'我的足迹'"></c-header>
    <div class="c-page-body header-pd">
      <div v-if="list.length > 0">
        <div v-for="(itemList,dateTitle) in footprintList" :key="dateTitle">
          <div class="list-title">{{dateTitle}}</div>
          <c-goods-item
            v-for="(item,index) in itemList"
            :key="index"
            :id="item.itemId"
            :img="item.itemImg"
            :name="item.itemName"
            :price="item.itemPrice"
          ></c-goods-item>
        </div>
      </div>
      <c-empty-hint v-else-if="!loading" icon="icon-footprint" hint="没有留下任何足迹">
      </c-empty-hint>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import filter from "@c/filter";

export default {
  data() {
    return {
      list: [],
      loading:false
    };
  },
  computed: {
    footprintList() {
      let res = {};
      this.list.forEach(item => {
        let dateTitle = filter.date(item.createTime, "yyyy-MM-dd");

        if (!res[dateTitle]) {
          res[dateTitle] = [];
        }

        res[dateTitle].push(item);
      });

      return res;
    }
  },
  methods: {
    async listFootprint() {
      try {
        this.loading = true;
        this.$showLoading();
        this.list = [];
        let res = await services.listFootprint();

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
    this.listFootprint();
  }
};
</script>
