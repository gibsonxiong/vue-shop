<style scoped lang="scss">
.footprint-page {
  background: #f3f3f3;
}
.c-page-body {
  // padding: 0.44rem 0.1rem 0.1rem 0.1rem;
}

.list-title {
  padding: 0.05rem;
  color: #999;
  font-size: 0.12rem;
}
.footprint_t {
  padding: 0.1rem 0;
  border-bottom: 1px solid #f4f4f4;
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
  <div class="footprint-page">
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
      <c-empty-hint v-else icon="icon-footprint" hint="没有留下任何足迹">
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
      list: []
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
        let res = await services.listFootprint();

        if (services.$isError(res)) throw new Error(res.message);

        this.list = res.data;
      } catch (err) {
        this.$toast(err.message);
      }
    }
  },
  created() {
    this.listFootprint();
  }
};
</script>
