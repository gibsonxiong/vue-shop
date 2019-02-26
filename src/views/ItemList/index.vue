
<style scoped lang="scss">
@import "~@/css/mixin";

.item-list-page {
  .header_r_i {
    > i {
      font-size: pxTorem(44);
    }
  }
  .list_wrap {
    // position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    .list_select {
      // position: absolute;
      // top: 0;
      // left: 0;
      // right: 0;
      background: #fff;
      @include border-bottom(rgba(230, 230, 230, 0.5));
      padding: pxTorem(30) 0rem;
      .select_item {
        width: 25%;
      }
      .select_item:not(:last-child) {
        @include border-right(rgba(230, 230, 230, 0.5));
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
          line-height: pxTorem(14);
          color: #b7b7b7;
          line-height: 0.05rem;
        }
        .i_active {
          color: #f94a92;
        }
      }
    }
    .des_money {
      font-size: 0.16rem;
      font-weight: 600;
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
      // padding-bottom: pxTorem(20);
      > ul {
        height: 100%;
      }
      .list_box {
        // overflow: hidden;
        padding: 0 pxTorem(10);
        &::after {
          content: "";
          display: block;
          clear: both;
          height: 1px;
        }
        .list_box_item {
          float: left;
          width: 50%;
          padding: pxTorem(26) pxTorem(10) 0rem;
          overflow: hidden;
          display: block;
          .item_pic {
            width: 100%;
            background-color: #fff;
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
                letter-spacing: 1px;
                padding-bottom: pxTorem(13);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                white-space: nowrap;
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
          padding: pxTorem(26) pxTorem(18) 0rem;
          overflow: hidden;
          display: block;
          background-color: #fff;
          &::after {
            content: "";
            display: block;
            clear: both;
          }
          .item_pic {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .pic {
              width: 20%;
              // a {
              //   display: block;
              img {
                width: 100%;
                object-fit: cover;
              }
              // }
            }
            .des {
              width: 80%;
              padding: pxTorem(20) pxTorem(14);
              overflow: hidden;
              > p {
                letter-spacing: 1px;
                padding-bottom: pxTorem(13);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                white-space: nowrap;
              }
            }
          }
        }
      }
      .loading_color {
        color: $color-primary;
      }
    }
  }
  .item_select {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(23, 22, 122, 0.2);
    .select_box {
      height: 100%;
      width: 100%;
      display: flex;
      .select_bg {
        height: 100%;
        width: 15%;
        background: rgba(0, 0, 0, 0.7);
      }
      .select_content {
        width: 85%;
        height: 100%;
        background: #fff;
        position: relative;
        .select_price {
          padding: pxTorem(45) pxTorem(26);
          @include border-bottom(#e7e7e7);
          .select_input {
            span {
              padding: 0px pxTorem(12);
            }
            input {
              width: pxTorem(120);
              padding: pxTorem(10) pxTorem(5);
              border-radius: 4px;
              box-shadow: none;
              background: #f2f2f2;
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
            @include border-top(#e7e7e7);
            > div {
              width: 50%;
              padding: pxTorem(30) 0px;
              text-align: center;
            }
            > div:nth-child(2) {
              background: #ff5000;
              color: #fff;
            }
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
        <c-search-input
          slot="center"
          v-model="searchText"
          @click.native="showSearch"
          disabled="disabled"
          style="width:100%;"
        ></c-search-input>
        <div slot="right" class="header_r_i" @click="listTypeClick">
          <i class="iconfont icon-apps" v-show="listType"></i>
          <i class="iconfont icon-sort" v-show="!listType"></i>
        </div>
        <!-- <div slot="right" class="header_r_i"><i class="iconfont icon-sortlight"></i></div> -->
      </c-header>
      <div class="c-page-body header-pd">
        <div class="list_wrap">
          <div class="list_select chen_center_absolute">
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==0}"
              @click="listAllClick(0)"
            >综合</div>
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==1}"
              @click="listNumClick(1)"
            >销量</div>
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==2}"
              @click="listPriceClick(2)"
            >
              <div>价格</div>
              <div class="price_i">
                <i class="iconfont icon-triangleupfill" :class="{'i_active':iSort == 1}"></i>
                <i class="iconfont icon-triangledownfill" :class="{'i_active':iSort == 2}"></i>
              </div>
            </div>
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==3}"
              @click="listSelectClick(3)"
            >
              筛选
              <i class="iconfont icon-filter"></i>
            </div>
          </div>
          <div
            class="list_content"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loadingDisable"
            infinite-scroll-distance="40"
          >
            <!-- <mt-loadmore
              :top-method="loadTop"
              @top-status-change="handleTopChange"
              :bottom-method="loadBottom"
              @bottom-status-change="handleBottomChange"
              :bottom-all-loaded="allLoaded"
              :auto-fill="false"
              ref="loadmore"
            >-->
            <mt-loadmore
              :top-method="loadTop"
              @top-status-change="handleTopChange"
              :auto-fill="false"
              ref="loadmore"
            >
              <ul :class="[listType?'list_box_column':'list_box']">
                <router-link
                  tag="li"
                  :to="`/items/${item.id}`"
                  class="list_box_item"
                  v-for="(item,index) in itemList"
                  :key="index"
                >
                  <div class="item_pic">
                    <div class="pic">
                      <img :src="item.imgList[0]">
                    </div>
                    <div class="des">
                      <p>{{item.name}}</p>
                      <div class="chen_center_absolute">
                        <div class="des_money">￥100.00</div>
                        <div class="buy_btn" @click.stop>购买</div>
                      </div>
                    </div>
                  </div>
                </router-link>
              </ul>
              <div slot="top" class="mint-loadmore-top loading_color">
                <span
                  v-show="topStatus !== 'loading'"
                  :class="{ 'is-rotate': topStatus === 'drop' }"
                >松开刷新</span>
                <span v-show="topStatus === 'loading'">刷新中...</span>
              </div>
              <!-- <div slot="bottom" class="mint-loadmore-bottom loading_color">
                <span
                  v-show="bottomStatus !== 'loading'"
                  :class="{ 'is-rotate': bottomStatus === 'drop' }"
                >松开刷新</span>
                <span v-show="bottomStatus === 'loading'">加载中...</span>
              </div>-->
            </mt-loadmore>
            <div v-show="loadingDisable" class="mint-loadmore-bottom loading_color">加载中...</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="selectBox" class="item_select">
      <div class="select_box">
        <div class="select_bg" @click="selectNone()"></div>
        <div class="select_content">
          <div class="select_price chen_center_absolute">
            <div>价格区间（元）</div>
            <div class="chen_center_absolute_center select_input">
              <input type="number" placeholder="最低价">
              <span>-</span>
              <input type="number" placeholder="最高价">
            </div>
          </div>
          <div class="content_bottom">
            <div class="bottom_box chen_center_absolute_center">
              <div>重置</div>
              <div>确定</div>
            </div>
          </div>
        </div>
      </div>
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
import { Loadmore, InfiniteScroll } from "mint-ui";
import { setTimeout } from "timers";
export default {
  mixins: [
    routerCachePage({
      scrollWrapSelector: ".list_content"
    })
  ],
  data() {
    return {
      searchText: "11",
      itemTypeId: "1",
      search: {
        visible: false
      },
      listType: false, //商品列表排列方式
      listActive: 0, //列表按钮点击变色
      itemList: [],
      iSort: 0, //排序图片变色
      selectBox: false, //筛选条件
      allLoaded: false,
      bottomStatus: "",
      topStatus: "",
      loadingDisable: false //无限滚动控制器
    };
  },
  methods: {
    loadTop() {
      // 下拉刷新加载更多数据
      setTimeout(() => {
        let firstVal = this.itemList[0];
        for (let i = 0; i < 2; i++) {
          this.itemList.unshift(firstVal);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },
    loadBottom() {
      //上拉加载更多数据
      setTimeout(() => {
        let lastValue = this.itemList[1];
        for (let i = 1; i <= 3; i++) {
          this.itemList.push(lastValue);
        }
        // this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    handleBottomChange(status) {
      //上拉事件
      this.bottomStatus = status;
    },
    handleTopChange(status) {
      //下拉事件
      this.topStatus = status;
    },
    loadMore() {
      //无限滚动事件触发
      this.loadingDisable = true;
      setTimeout(() => {
        let lastValue = this.itemList[1];
        for (let i = 1; i <= 6; i++) {
          this.itemList.push(lastValue);
        }
        this.loadingDisable = false;
      }, 300);
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
    listAllClick(num) {
      //综合
      this.listActive = num;
      this.iSort = 0;
    },
    listNumClick(num) {
      //销量
      this.listActive = num;
      this.iSort = 0;
    },
    listPriceClick(num) {
      //价格
      this.listActive = num;
      this.iSort =
        this.iSort == 0 ? 1 : this.iSort == 1 ? 2 : this.iSort == 2 ? 1 : 0;
      console.log(this.iSort);
    },
    listSelectClick(num) {
      //筛选
      this.listActive = num;
      this.selectBox = true;
    },
    selectNone() {
      //筛选消失
      this.selectBox = false;
    },
    handleSearch(searchText) {
      this.searchText = searchText;
      this.search.visible = false;

      this.fetchItemList();
      let route = {
        ...this.$route,
        query: {
          searchText: searchText
        }
      };
      this.$router.replace(route);
    },
    async fetchItemList() {
      try {
        let { searchText, itemTypeId } = this;
        let res = await services.fetchItemList({
          categoryId: itemTypeId,
          searchText
        });
        if (services.$isError(res)) throw new Error(res.message);
        this.itemList = res.data;
        // for (let i = 0; i < 2; i++) {
        //   this.itemList.push(...res.data);
        // }
        console.log(this.itemList);
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.searchText = this.$route.query.searchText || "";
    this.itemTypeId = this.$route.query.itemTypeId || "";
    this.fetchItemList();
  }
};
</script>
