<style scoped lang="scss">
@import "~@/css/var";
.index-page {
}

.tab {
  background: rgba(249, 250, 250, 0.98);
  display: flex;
  height: 0.55rem;
  align-items: center;

  &.tab--fixed {
    border-top: 1px solid rgba(230, 230, 230, 0.5);
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }

  &__item {
    flex: 1;
    text-align: center;
    color: #5d656b;
    user-select: none;

    &.active {
      color: $color-primary;
    }
  }

  &__icon {
    font-size: 0.24rem;
  }

  &__name {
    margin-top: -0.01rem;
    font-size: 0.11rem;
  }
}
</style>

<template>
  <div class="index-page page">
    <div v-show="!search.visible">
      <div
        class="tab-content"
        v-for="(item,index) in tab.items"
        :key="index"
        v-show="index === tab.active"
      >
        <keep-alive>
          <component ref="tabContent" :cacheId="`tabContent${index}`" v-bind:is="item.component" @toSearch="showSearch" @gotoHome="activeTab(0)"></component>
        </keep-alive>
      </div>
      <div class="tab tab--fixed">
        <div
          class="tab__item"
          v-for="(item,index) in tab.items"
          :key="index"
          :class="{active: index === tab.active}"
          @click="activeTab(index)"
        >
          <i class="tab__icon iconfont" :class="item.icon"></i>
          <div class="tab__name">{{item.name}}</div>
        </div>
      </div>
    </div>
    <c-search :visible="search.visible" @close="hideSearch" @search="handleSearch"></c-search>
  </div>
</template>

<script>
import routerCachePage from '@/routerCache/page';

export default {
  mixins:[routerCachePage()],
  data() {
    return {
      tab: {
        active: 0,
        items: [
          {
            name: "首页",
            icon: "icon-home",
            component: "c-home"
          },
          {
            name: "分类",
            icon: "icon-searchlist",
            component: "c-catalog"
          },
          {
            name: "购物车",
            icon: "icon-cart",
            component: "c-shopcart"
          },
          {
            name: "我的",
            icon: "icon-people",
            component: "c-mine"
          }
        ]
      },
      search: {
        visible: false
      }
    };
  },
  methods: {
    activeTab(index) {
      this.tab.active = index;

      this.$nextTick(()=>{
        this.$refs.tabContent[index].tabActived && this.$refs.tabContent[index].tabActived();
      })

      let newRoute = {
        ...this.$route,
        query: {
          tab: index
        }
      };
      this.$router.replace(newRoute);
    },
    showSearch() {
      this.search.visible = true;
    },
    hideSearch() {
      this.search.visible = false;
    },
    handleSearch(q){
      this.$router.push({path:'/items',query:{searchText:q}});
    }
  },
  created() {
    this.tab.active = Number(this.$route.query.tab || 0);
  },
  mounted(){

  }
};
</script>
