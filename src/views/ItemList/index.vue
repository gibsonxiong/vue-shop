
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
                // text-overflow: ellipsis;
                // display: -webkit-box;
                // -webkit-line-clamp: 2;
                // -webkit-box-orient: vertical;
                // line-height: 1.5em;
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
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="item-list-page">
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
              @click="listActiveClick(0)"
            >综合</div>
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==1}"
              @click="listActiveClick(1)"
            >销量</div>
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==2}"
              @click="listActiveClick(2)"
            >
              价格
              <i></i>
            </div>
            <div
              class="select_item chen_center_absolute_center"
              :class="{'select_item_active':listActive==3}"
              @click="listActiveClick(3)"
            >
              筛选
              <i class="iconfont icon-filter"></i>
            </div>
          </div>
          <div class="list_content">
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
                    <img :src="item.imgSrc">
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
export default {
  data() {
    return {
      searchText: "",
      itemTypeId: "",
      search: {
        visible: false
      },
      listType: false, //商品列表排列方式
      listActive: 0, //列表按钮点击变色
      itemList: []
    };
  },
  methods: {
    showSearch() {
      this.search.visible = true;
    },
    hideSearch() {
      this.search.visible = false;
    },
    listTypeClick() {
      this.listType = !this.listType;
    },
    listActiveClick(num) {
      this.listActive = num;
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
          itemTypeId,
          searchText
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.itemList = res.data;
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
