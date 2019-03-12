
<style scoped lang="scss">
@import "~@/css/mixin";
.c-page-body {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slideX-enter-active,
.slideX-leave-active {
  transition: all 0.3s;
}

.slideX-enter,
.slideX-leave-to {
  transform: translate3d(0, -100%, 0);
}

.slideY-enter-active,
.slideY-leave-active {
  transition: all 0.4s;
}

.slideY-enter,
.slideY-leave-to {
  opacity: 0.8;
  transform: translate3d(100%, 0, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.item-list-page {
  .list_wrap {
    // position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    .list_select {
      background: #fff;
      padding: pxTorem(20) 0.2rem;
      font-size: 0.14rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      .select_item {
        // width: 25%;
        flex: 1;
      }
      .select_item:not(:last-child) {
        @include border-right($color-border);
      }
      .select_item_active {
        color: $color-primary;
      }
      .price_i {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: pxTorem(3);
        color: #666666;
        i {
          font-size: 17px;
          line-height: 0.07rem;
          color: #b7b7b7;
        }
        .i_active {
          color: #f94a92;
        }
      }
    }
    .des_money {
      font-size: 0.16rem;
      line-height: 0.16rem;
      font-weight: 500;
      color: $color-primary;
    }
    .buy_btn {
      padding: pxTorem(5) pxTorem(12);
      background: $color-primary;
      color: #fff;
      font-size: 0.12rem;
    }
    .list_content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      padding-top: 0.41rem;
      // padding-bottom: pxTorem(20);
      > ul {
        height: 100%;
      }
      .list_box {
        // overflow: hidden;
        padding: 0 pxTorem(10);
        @include flexbox;
        flex-wrap: wrap;

        &::after {
          content: "";
          display: block;
          clear: both;
          height: 1px;
        }
        .list_box_item {
          // float: left;
          width: 50%;
          padding: pxTorem(26) pxTorem(10) 0rem;
          overflow: hidden;
          display: block;
          .item_pic {
            width: 100%;
            background-color: #fff;
            border-radius: 0.06rem;
            overflow: hidden;
            .pic {
              width: 100%;
              // a {
              //   display: block;
              img {
                width: 100%;
                object-fit: cover;
              }
              // }
            }
            .des {
              padding: pxTorem(20) pxTorem(14);
              overflow: hidden;
              > p {
                margin-bottom: 0.04rem;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 0.4rem;
              }
            }
          }
        }
      }
      .list_box_column {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        .list_box_item {
          width: 100%;
          padding: pxTorem(26) pxTorem(18);
          overflow: hidden;
          display: block;
          background-color: #fff;
          @include border-bottom();
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          .item_pic {
            width: 100%;
            display: flex;

            .c-img-box {
              width: 1.2rem;
              height: 1.2rem;
              padding-top: 0;
              border-radius: 0.04rem;
              overflow: hidden;
            }
            .des {
              flex: 1;
              padding-left: 0.07rem;
              overflow: hidden;
              > p {
                overflow: hidden;
                text-overflow: ellipsis;
                height: 0.4rem;
              }
            }
          }
        }
      }
      .loading_color {
        color: #888;
      }
    }
  }
  .item_select {
    .select_bg {
      @include mask;
    }
    .select_content {
      z-index: 110;
      width: 2.7rem;
      height: 100%;
      background: #fff;
      position: fixed;
      top: 0;
      right: 0;
      .select_price {
        padding: pxTorem(45) pxTorem(26);
        @include border-bottom();
        .select_input {
          span {
            padding: 0px pxTorem(12);
          }
          input {
            width: pxTorem(120);
            padding: pxTorem(10) pxTorem(10);
            border-radius: 4px;
            box-shadow: none;
            background: #f4f4f4;
            border: none;
          }
        }
      }
      .content_bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        .bottom_box {
          @include border-top($color-border);
          > div {
            width: 50%;
            padding: pxTorem(30) 0px;
            text-align: center;
          }
          > div:nth-child(2) {
            background: $color-primary;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="item-list-page page">
    <div v-show="!search.visible">
      <c-header>
        <div class="c-input-mask" slot="center" @click="showSearch">
          <c-search-input v-model="searchText" style="width:100%;"></c-search-input>
        </div>
        <a slot="right" @click="listTypeClick">
          <i class="iconfont icon-cascades" v-show="listType"></i>
          <i class="iconfont icon-list" v-show="!listType"></i>
        </a>
      </c-header>
      <div class="c-page-body header-pd">
        <div class="list_wrap">
          <transition name="slideX">
            <div class="list_select chen_center_absolute" v-show="barVisible">
              <div
                class="select_item chen_center_absolute_center"
                :class="{'select_item_active':order=='normal'}"
                @click="changeOrder('normal')"
              >综合</div>
              <div
                class="select_item chen_center_absolute_center"
                :class="{'select_item_active':order=='sale'}"
                @click="changeOrder('sale')"
              >销量</div>
              <div
                class="select_item chen_center_absolute_center"
                :class="{'select_item_active':order=='priceAsc'|| order=='priceDesc'}"
                @click="changeOrder(order=='priceAsc' ? 'priceDesc' : 'priceAsc')"
              >
                <div>价格</div>
                <div class="price_i">
                  <i class="iconfont icon-triangleupfill" :class="{'i_active':order=='priceAsc'}"></i>
                  <i class="iconfont icon-triangledownfill" :class="{'i_active':order=='priceDesc'}"></i>
                </div>
              </div>
              <!-- <div class="select_item chen_center_absolute_center" @click="selectBoxVisible = true;">
                筛选
                <i class="iconfont icon-filter"></i>
              </div> -->
            </div>
          </transition>
         
          <div
            class="list_content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loadMoreDisabled"
            infinite-scroll-distance="80"
          >
            <mt-loadmore
              :top-method="loadTop"
              @top-status-change="handleTopChange"
              :auto-fill="false"
              ref="loadmore"
            >
              <div slot="top" class="mint-loadmore-top loading_color">
                <span v-show="topStatus === 'pull'">下拉刷新</span>
                <span v-show="topStatus === 'drop'">释放即可刷新</span>
                <span v-show="topStatus === 'loading'">刷新中...</span>
              </div>

              <ul :class="[listType?'list_box_column':'list_box']">
                <router-link
                  tag="li"
                  :to="`/items/${item.id}`"
                  class="list_box_item"
                  v-for="(item,index) in itemList"
                  :key="index"
                >
                  <div class="item_pic">
                    <div class="c-img-box">
                      <img :key="item.imgList[0]" v-lazy="item.imgList[0]">
                    </div>
                    <div class="des">
                      <p>{{item.name}}</p>
                      <div style="min-height:0.21rem;">
                        <span v-if="item.flash && item.flash.status == 1" class="c-tag">限时特价</span>
                        <span v-if="item.isNew" class="c-tag secondly">新品</span>
                      </div>
                      <div class="chen_center_absolute" style="margin-top:0.05rem;">
                        <span v-if="item.flash && item.flash.status == 1">
                          <span class="des_money">￥{{item.flash.item.flashPrice}}</span>
                          <span class="c-old-price" style="line-height: 0.16rem;">￥{{item.flash.item.itemPrice}}</span>
                        </span>
                        <span v-else class="des_money">￥{{item.minPrice}}</span>
                        <span style="font-size: 0.12rem;color: #999999;margin-top: 2px;"
                        >{{item.item_count && item.item_count.saleCount}}人已购买</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </ul>
              <c-empty-hint
                v-show="!loading && loadMoreDisabled && itemList.length === 0"
                icon="icon-goods_light"
                hint="没有相关商品"
              ></c-empty-hint>
            </mt-loadmore>
            <div v-show="loading" class="mint-loadmore-bottom loading_color">
              <mt-spinner
                type="snake"
                :size="20"
                style="display: inline-block;"
              ></mt-spinner>
            </div>
            <div
              v-show="!loading && loadMoreDisabled && itemList.length > 0"
              class="mint-loadmore-bottom loading_color"
            >没有更多了</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item_select">
      <transition name="fade">
        <div class="select_bg" v-show="selectBoxVisible" @click="selectBoxVisible=false"></div>
      </transition>
      <transition name="slideY">
        <div v-show="selectBoxVisible" class="select_content">
          <div class="select_price chen_center_absolute">
            <div>价格区间（元）</div>
            <div class="chen_center_absolute_center select_input">
              <input type="number" v-model="minPrice" placeholder="最低价">
              <span>-</span>
              <input type="number" v-model="maxPrice" placeholder="最高价">
            </div>
          </div>
          <div class="content_bottom">
            <div class="bottom_box chen_center_absolute_center">
              <div>重置</div>
              <div>确定</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <c-search
      :defaultSearchText="searchText"
      :visible="search.visible"
      @close="hideSearch"
      @search="handleSearch"
    ></c-search>
  </div>
</template>

<script>
import services from "@/services";
import routerCachePage from "@/routerCache/page";
import routerUtils from "@/utils/router-utils";

export default {
  mixins: [
    routerCachePage({
      scrollWrapSelector: ".list_content"
    })
  ],
  data() {
    return {
      oldScrollTop: 0,
      barVisible: true,

      pageIndex: 0,
      pageSize: 20,
      searchText: "",
      categoryId: "1",
      order: "normal",
      minPrice: "",
      maxPrice: "",
      search: {
        visible: false
      },
      listType: false, //商品列表排列方式
      itemList: [],
      selectBoxVisible: false, //筛选条件
      topStatus: "",
      loading: false, //无限滚动控制器
      loadMoreDisabled: false
    };
  },
  methods: {
    async loadTop() {
      this.pageIndex = 0;
      await this.fetchItemList();

      this.$refs.loadmore.onTopLoaded();
    },
    handleTopChange(status) {
      //下拉事件
      this.topStatus = status;
    },
    async loadMore() {
      this.fetchItemList(true);
    },
    showSearch() {
      this.search.visible = true;
    },
    hideSearch() {
      this.search.visible = false;
    },
    listTypeClick() {
      this.listType = !this.listType;
    },
    changeOrder(order) {
      if (this.order === order) return;

      this.order = order;
      this.pageIndex = 0;
      this.itemList = [];
      this.fetchItemList();
    },
    handleSearch(searchText) {
      this.categoryId = "";
      this.searchText = searchText;
      this.search.visible = false;
      this.itemList = [];
      this.pageIndex = 0;

      this.fetchItemList();

      routerUtils.setQuery({
        searchText: searchText
      });
    },
    async fetchItemList(append) {
      try {
        this.loadMoreDisabled = true;
        this.loading = true;

        let {
          searchText,
          categoryId,
          order,
          pageIndex,
          pageSize,
          minPrice,
          maxPrice
        } = this;
        pageIndex++;
        let res = await services.fetchItemList({
          pageIndex,
          pageSize,
          categoryId,
          searchText,
          order,
          minPrice,
          maxPrice
        });
        if (services.$isError(res)) throw new Error(res.message);

        this.pageIndex = pageIndex;

        if (append) {
          this.itemList = this.itemList.concat(res.data);
        } else {
          this.itemList = res.data;
        }

        this.loading = false;

        if (res.data.length > 0 && res.data.length == pageSize) {
          this.$nextTick(() => {
            this.loadMoreDisabled = false;
          });
        }
      } catch (err) {
        this.loadMoreDisabled = false;
        this.loading = false;
        return this.$toast(err.message);
      }
    },
    handleScroll() {
      let scrollTop = document.querySelector(".list_content").scrollTop;

      if (scrollTop > this.oldScrollTop && scrollTop >= 41) {
        this.barVisible = false;
      } else if (scrollTop < this.oldScrollTop) {
        this.barVisible = true;
      }
      this.oldScrollTop = scrollTop;
    }
  },
  created() {
    this.searchText = this.$route.query.searchText || "";
    this.categoryId = this.$route.query.categoryId || "";
  },
  mounted() {
    document
      .querySelector(".list_content")
      .addEventListener("scroll", this.handleScroll);
  }
};
</script>
