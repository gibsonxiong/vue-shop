<style lang="scss" scoped>
@import "~@/css/var";
.c-catalog {
  .c-page-body {
    overflow: hidden;
    display: flex;
  }

  .catalog-list {
    height: 100%;
    width: 1.05rem;
    background: #f8f8f8;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    .catalog-list-item {
      position: relative;
      float: left;
      width: 100%;
      height: 0.5rem;
      line-height: 0.47rem;
      text-align: center;
      box-sizing: border-box;
      font-size: 0.13rem;
      color: #000;

      &.active {
        background: #fff;
        color: $color-primary;
        &::before {
          background-color: $color-primary;
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          height: 100%;
          width: 0.04rem;
        }

        // &:after {
        //   background-color: #fff;
        //   position: absolute;
        //   right: -0.01rem;
        //   top: 0;
        //   content: "";
        //   height: 100%;
        //   width: 0.01rem;
        // }
      }
    }
  }

  .type-list {
    height: 100%;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>

<template>
  <div class="c-catalog">
    <c-header :backType="0" :theme="'white'">
      <c-search-input
        slot="center"
        @click.native="$emit('toSearch')"
        disabled="disabled"
        style="width:100%;"
      ></c-search-input>
    </c-header>

    <div class="c-page-body header-pd tab-pd">
      <ul class="catalog-list">
        <li
          v-for="(item,index) in catalogList"
          :key="index"
          class="catalog-list-item"
          :class="{'active':catalogIndex == item.id}"
          @click="changeCatalog(item.id)"
        >{{item.name}}</li>
      </ul>
      <ul class="type-list">
        <li>
          <router-link :to="{path:'/items',query:{searchText:'套装'} }">套装</router-link>
        </li>
        <li>羽绒服</li>
        <li>毛衣</li>
      </ul>
    </div>
  </div>
</template>


<script>
import services from "@/services";

export default {
  data() {
    return {
      catalogList: [],
      catalogIndex: "",
      typeList: []
    };
  },
  methods: {
    async fetchCatalogList() {
      try {
        let res = await services.fetchCatalogList();

        this.catalogList = res.data;
        let defaultId = this.catalogList[0].id;
        this.activeCatalog(id);
      } catch (err) {}
    },
    async fetchTypeList(catalogId) {
      try {
        let res = await services.fetchTypeList(catalogId);

        this.typeList = res.data;
      } catch (err) {}
    },

    changeCatalog(id) {
      this.catalogIndex = id;
      this.fetchTypeList(id);
    }
  },

  created() {
    this.fetchCatalogList();
  }
};
</script>
