<style lang="scss" scoped>
@import "~@/css/var";
.c-catalog {
  background: transparent;
  .c-page-body {
    overflow: hidden;
    display: flex;
  }

  .left-container {
    position: relative;
    background: #f8f8f8;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    width: 1.05rem;
  }

  .catalog-list {
    .catalog-list-item {
      position: relative;
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      box-sizing: border-box;
      font-size: 0.13rem;
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
    padding-bottom: 0.8rem;

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
      <div class="c-input-mask" slot="center" @click="$emit('toSearch')">
        <c-search-input style="width:100%;" placeholder="搜索你喜欢的宝贝"></c-search-input>
      </div>
    </c-header>

    <div class="c-page-body">
      <div class="left-container c-header-pd c-tab-pd" ref="leftContainer">
      <ul class="catalog-list" >
        <li
          v-for="(item,index) in catalogList"
          :key="index"
          class="catalog-list-item"
          :class="{'active':catalogIndex == item.id, [`item-${item.id}`]:true}"
          @click="changeCatalog(item.id)"
        >{{item.name}}</li>
      </ul>
      </div>
      <div class="right-container" ref="rightContainer">
        <div class="c-header-pd">
          <ul class="type-list">
            <li class="type-item" v-for="(item,index) in itemTypeList" :key="index">
              <router-link :to="{path:'/items',query:{categoryId:item.id}}">
                <div style="padding:0.1rem 0.15rem;">
                  <div class="c-img-box">
                    <img v-lazy="item.img" :key="item.img">
                  </div>
                </div>
                <span>{{item.name}}</span>
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
import routerCacheComponent from "@/routerCache/component";

export default {
  mixins: [
    routerCacheComponent({
      scrollWrapSelector: ".right-container"
    })
  ],
  data() {
    return {
      catalogList: [],
      catalogIndex: "",
      itemTypeList: []
    };
  },
  methods: {
    async fetchCatalogList() {
      try {
        let res = await services.fetchCatalogList();

        this.catalogList = res.data;
        let defaultId = this.catalogList[0].id;
        this.$nextTick(() => {
          this.changeCatalog(defaultId);
        });
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async fetchItemTypeList(catalogId) {
      try {
        let res = await services.fetchItemTypeList({ catalogId });

        this.itemTypeList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    changeCatalog(id) {
      if (this.catalogIndex == id) return;

      this.$refs.rightContainer.scrollTop = 0;

      this.catalogIndex = id;
      this.fetchItemTypeList(id);
    },

    // scrollCatalog() {
    //   //左边容器滚动定位
    //   let id = this.catalogIndex;
    //   let activedItem = this.$refs.leftContainer.querySelector(`.item-${id}`);
    //   let scrollTop = activedItem ? activedItem.offsetTop : 0;
    //   this.$refs.leftContainer.scrollTop = scrollTop;
    // },

    //父类调用
    tabActived() {
      this.$refs.header.resizeCenter();
    }
  },

  created() {
    if (!this.$restored) {
      this.fetchCatalogList();
    } 
    // else {
    //   this.$nextTick(() => {
    //     this.scrollCatalog();
    //   });
    // }
  }
};
</script>
