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

  .item2-wrap{
    
    padding-bottom: 0.2rem;

    & + .item2-wrap{
      padding-top: 0.2rem;
      border-top: 1px solid #f3f3f3;
    }
  }

  .item2-name{
    font-size: 14px;   
  }



  .type-list {
    overflow: hidden;

    .type-item {
      float: left;
      width: 33.33%;
      margin: 0.05rem 0 0 0;

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
          v-for="(item1,index) in catalogList"
          :key="index"
          class="catalog-list-item"
          :class="{'active':catalogIndex == item1.id, [`item-${item1.id}`]:true}"
          @click="changeCatalog(item1.id)"
        >{{item1.name}}</li>
      </ul>
      </div>
      <div class="right-container" ref="rightContainer">
        <div class="c-header-pd c-tab-pd">
          <div class="item2-wrap" v-for="(item2,index) in itemTypeList" :key="index">
            <h3 class="item2-name">{{item2.name}}</h3>
            <ul class="type-list" >
              <li class="type-item" v-for="(item3,index) in item2.categories" :key="index">
                <router-link :to="{path:'/items',query:{categoryId:item3.id}}">
                  <div style="padding:0.05rem 0.1rem;">
                    <div class="c-img-box">
                      <img v-lazy="item3.img" :key="item3.img">
                    </div>
                  </div>
                  <span>{{item3.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
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
