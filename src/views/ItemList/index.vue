
<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/common";
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
        color: #f50;
      }
    }
    .list_content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      // padding-bottom: pxTorem(20);
      .list_box {
        // overflow: hidden;
        &::after {
          content: "";
          display: block;
          clear: both;
          height: 1px;
        }
        .list_box_item {
          float: left;
          width: 50%;
          padding: pxTorem(26) pxTorem(18) 0rem;
          overflow: hidden;
          display: block;
          .item_pic {
            width: 100%;
            .pic {
              width: 100%;
              a {
                display: block;
                img {
                  width: 100%;
                  object-fit: cover;
                }
              }
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
              .des_money {
                font-size: pxTorem(34);
                color: #ff5555;
              }
              .buy_btn {
                padding: pxTorem(8) pxTorem(10);
                background: #ff5555;
                color: #fff;
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
              a {
                display: block;
                img {
                  width: 100%;
                  object-fit: cover;
                }
              }
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
              .des_money {
                font-size: pxTorem(34);
                color: #ff5555;
              }
              .buy_btn {
                padding: pxTorem(8) pxTorem(10);
                background: #ff5555;
                color: #fff;
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
          <i class="iconfont icon-sortlight" v-show="!listType"></i>
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
              <li class="list_box_item" v-for="(val,index) in 8" :key="index">
                <div class="item_pic">
                  <div class="pic">
                    <a>
                      <img
                        src="//img.alicdn.com/img/i3/122348980/O1CN01rFHdoM2GCtANhjTGw_!!0-saturn_solar.jpg_250x250.jpg"
                      >
                    </a>
                  </div>
                  <div class="des">
                    <p>简短的消息提示框，支持自定义位置、持续时间和样式</p>
                    <div class="chen_center_absolute">
                      <div class="des_money">￥ 100.00</div>
                      <div class="buy_btn">购买</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <c-search :defaultSearchText="searchText" :visible="search.visible" @hideSearch="hideSearch"></c-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      search: {
        visible: false
      },
      listType: false, //商品列表排列方式
      listActive: 0 //列表按钮点击变色
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
    }
  },
  created() {
    this.searchText = this.$route.query.searchText || "";
  }
};
</script>
