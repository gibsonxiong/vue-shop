<style lang="scss" scoped>
@import "~@/css/var";
.c-catalog {
  background: transparent;
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
      line-height: 0.5rem;
      text-align: center;
      box-sizing: border-box;
      font-size: 0.13rem;
      color: #000;
      transition: 0.2s all;

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

  .right-container {
    background-color: #ffffff;
    height: 100%;
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0.1rem;
  }

  .type-list {
    margin-top: -0.125rem;
    overflow: hidden;

    .type-item {
      float: left;
      width: 33.33%;
      margin: 0.125rem 0 0 0;

      img {
        width: 100%;
      }

      span {
        display: block;
        white-space: nowrap;
        font-size: 0.12rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #666;
        font-weight: normal;
      }
    }
  }
}
</style>

<template>
  <div class="c-catalog">
    <c-header ref="header" :backType="0">
      <c-search-input
        slot="center"
        @click.native="$emit('toSearch')"
        disabled="disabled"
        style="width:100%;"
      ></c-search-input>
    </c-header>

    <div class="c-page-body">
      <ul class="catalog-list c-header-pd c-tab-pd">
        <li
          v-for="(item,index) in catalogList"
          :key="index"
          class="catalog-list-item"
          :class="{'active':catalogIndex == item.id}"
          @click="changeCatalog(item.id)"
        >{{item.name}}</li>
      </ul>
      <div class="right-container">
        <div class="c-header-pd c-tab-pd">
          <ul class="type-list">
            <li class="type-item" v-for="(item,index) in 30" :key="index">
              <router-link to="/items">
                <div style="padding:0 0.05rem;">
                  <img src="//image.suning.cn/uimg/asbs/ad/1493946827440_app_list.jpg">
                </div>
                <span>笔记本笔记本笔</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
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
    },

    //父类调用
    tabActived() {
      this.$refs.header.resizeCenter();
    }
  },

  created() {
    this.fetchCatalogList();
  }
};
</script>
