<style lang="scss">
.item_details {
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
.pop-enter-active,
.pop-leave-active {
  // transform: translateY(0);
  transition: opacity 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transform: translateY(0);
  transition: 0.3s;
}
.pop-enter,
.pop-leave-to {
  opacity: 0;
  // transform: translateY(100%);
}
.icon-fenxiang {
  position: relative;
  &:after {
    content: "";
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background-color: rgba(245, 245, 245, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}
.item_page {
  .item_page_content {
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    .mint-swipe {
      height: pxTorem(750);
      width: 100%;
      overflow: hidden;
      .mint-swipe-item {
        text-align: center;
        line-height: pxTorem(570);
        font-size: pxTorem(60);
        font-weight: bold;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .mint-swipe-indicators {
        .mint-swipe-indicator {
          background: $color-primary-active;
        }
        .is-active {
          background: #f00;
        }
      }
    }
    .item_select {
      width: 100%;
      background-color: #f3f3f3;
      // padding: 0rem 0rem pxTorem(1);
      .item_white {
        background: #fff;
        padding: pxTorem(18) pxTorem(14) pxTorem(14);
      }
      .item_select_des {
        .dex_txt {
          font-size: pxTorem(28);
          letter-spacing: 1px;
        }
        .dex_share {
          font-size: pxTorem(16);
          color: $color-primary;
          min-width: 15%;
        }
        .des_price {
          padding: pxTorem(5) 0rem;
          .price_now {
            font-size: pxTorem(40);
            color: $color-primary;
          }
          .price_old {
            font-size: 12px;
            text-decoration: line-through;
            color: #cccccc;
          }
        }
        .express_price {
          font-size: 12px;
          color: #7b7b7b;
        }
      }
      .item_select_classification {
        background: #fff;
        font-size: pxTorem(28);
        margin: pxTorem(20) 0rem;
        padding: pxTorem(20) pxTorem(14);
        i {
          opacity: 0.4;
        }
        .item_look_more {
          color: $color-primary-active;
        }
        .evaluate {
          .evaluate_header {
            display: flex;
            align-items: center;
            padding-top: pxTorem(10);
            .header_img {
              width: pxTorem(70);
              img {
                width: 100%;
                object-fit: cover;
              }
            }
          }
          .evaluate_des {
            padding: pxTorem(13) 0px;
          }
          .evaluate_img {
            &::after {
              content: "";
              display: block;
              clear: both;
            }
            img {
              float: left;
              height: 1rem;
              width: 33%;
              object-fit: cover;
              padding: pxTorem(6) pxTorem(6) pxTorem(0) pxTorem(0);
            }
            img:nth-child(3n) {
              padding: pxTorem(6) pxTorem(0) pxTorem(0) pxTorem(0);
            }
          }
        }
      }
      .item_select_shop_name {
        background: #fff;
        font-size: pxTorem(28);
        margin: pxTorem(20) 0rem;
        padding: pxTorem(18) pxTorem(20) pxTorem(18) pxTorem(14);
        .shop_name_img {
          width: pxTorem(80);
          height: pxTorem(80);
          overflow: hidden;
          border-radius: 50%;
          margin-right: pxTorem(8);
          > img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        .shop_name_btn {
          padding: pxTorem(10) pxTorem(28);
          border: 1px solid #fe8888;
          border-radius: pxTorem(40);
          color: #fe8888;
        }
      }
      .item_details_parameters {
        background: #fff;
        font-size: pxTorem(28);
        padding-bottom: pxTorem(123);

        .item_details_checkout {
          > div {
            width: 100%;
            padding: pxTorem(18) 0rem;
            text-align: center;
            border-bottom: 1px solid #d0d0d0;
            transition: 0.3s ease;
            &.details_checkout_active {
              color: $color-primary;
              border-bottom: 1px solid $color-primary;
            }
          }
        }
        .item_parameters {
          padding: pxTorem(10) pxTorem(26);
          .item_parameters_list {
            padding: pxTorem(30) 0rem;
            > div:nth-child(1) {
              min-width: 30%;
              color: #898989;
            }
            > div:nth-child(2) {
              min-width: 70%;
            }
          }
          .item_parameters_list:not(:last-child) {
            border-bottom: 1px solid #f4f4f4;
          }
        }
      }
    }
  }
  .item_page_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: pxTorem(100);
    border-top: 1px solid #eaeaea;
    background: #fff;
    z-index: 3;
    .item_page_footer_content {
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      .item_page_footer_follow_wrap {
        width: 40%;
        .item_page_footer_follow {
          width: 50%;

          &.active {
            color: $color-primary;
          }
        }
      }

      .item_page_footer_buys_wrap {
        width: 60%;
        height: 100%;
        .item_page_footer_buys {
          width: 50%;
          color: #fff;
          height: 100%;
        }
        .item_page_footer_buys:nth-child(1) {
          background: #fe9402;
        }
        .item_page_footer_buys:last-child {
          background: $color-primary;
        }
      }
    }
  }
  .item_detail_pop_model {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    // background: rgba(0, 0, 0, 0.7);
    z-index: 999;
    .item_detail_pop_box {
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 999;
      .item_detail_pop_model_hidden {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        // opacity: 0;
        // transition: opacity 0.6s;
      }
      .pop_model_active {
        opacity: 1;
      }
      .item_detail_pop_content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70%;
        background: #fff;
        z-index: 33;
        .item_detail_pop_parents {
          position: relative;
          height: 100%;
          padding: 0rem pxTorem(16);
          .item_detail_top_img {
            @include border-bottom(#eee);
            padding: 0.08rem 0rem 0.08rem 1.2rem;
            min-height: 1rem;
            .item_detail_img_box {
              position: absolute;
              top: -0.28rem;
              left: 0.1rem;
              width: 1.1rem;
              height: 1.1rem;
              padding: pxTorem(3);
              border-radius: pxTorem(6);
              overflow: hidden;
              background: #fff;
              border: 1px solid rgba(0, 0, 0, 0.1);
              img {
                width: 100%;
                object-fit: cover;
              }
            }
            .item_detail_top_price {
              display: flex;
              height: 100%;
              justify-content: space-between;
              .item_detail_top_des {
                width: 86%;
                .price_num {
                  color: $color-primary;
                  line-height: 1;
                  font-size: 0.18rem;
                  span {
                    font-size: pxTorem(38);
                  }
                }
              }
              .item_detail_top_cancel {
                > i {
                  font-size: pxTorem(48);
                }
              }
            }
          }
          .item_detail_center {
            height: 66%;
            overflow: auto;
            padding-bottom: pxTorem(14);
            .item_detail_select_data {
              padding: pxTorem(20) 0rem pxTorem(15);
              @include border-bottom(#eee);
              .select_data_lists {
                &::after {
                  content: "";
                  display: block;
                  clear: both;
                }
                .select_data_item {
                  float: left;
                  padding: pxTorem(13) pxTorem(23);
                  background: #f5f5f5;
                  overflow: hidden;
                  border-radius: pxTorem(5);
                  margin: 0rem pxTorem(18) pxTorem(18) 0rem;
                }
                .select_data_item_active {
                  background: $color-primary;
                  color: #fff;
                }
                .select_data_item_active_none {
                  color: #bbb;
                }
              }
            }
            .select_data_til {
              font-size: pxTorem(32);
              margin-bottom: pxTorem(16);
            }
            .item_detail_number {
              padding-top: pxTorem(30);
            }
          }
          .item_detail_confirm {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            @include flexbox;
            .btn {
              @include flex;
              padding: pxTorem(30) 0rem;
              text-align: center;
              background: $color-primary;
              color: #fff;
              font-size: pxTorem(32);
              // width: 100%;
              border: 0;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="item_page page">
    <c-header
      :title="'商品详情'"
      theme="transparent"
      :style="{'background-color':`rgba(245, 245, 245,${headerOpacity})`,color:`rgba(68, 68, 68,${headerOpacity})`}"
    >
      <a slot="right">
        <i class="iconfont icon-fenxiang" style="font-size:0.2rem;" @click="shareCeshi"></i>
      </a>
    </c-header>
    <div class="c-page-body">
      <div class="item_page_content" ref="body">
        <mt-swipe :auto="0" :showIndicators="true" :speed="600">
          <mt-swipe-item v-for="(val, index) in itemInfo.imgList" :key="index">
            <router-link to="/">
              <img :src="val">
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
        <div class="item_select">
          <div class="item_select_des item_white">
            <div class="chen_center_absolute">
              <div class="dex_txt">{{itemInfo.name}}</div>
              <!-- <div class="dex_share chen_center_absolute_column">
                <div>
                  <i class="iconfont icon-share_light"></i>
                </div>
                <div>分享</div>
              </div>-->
            </div>
            <div class="des_price">
              <span class="price_now">￥{{itemPrice}}</span>
              <!-- <span class="price_old">￥930</span> -->
            </div>
            <div class="chen_center_absolute express_price">
              <div>快递：15.00</div>
              <div>销量：0 件</div>
            </div>
          </div>

          <div class="item_select_classification chen_center_absolute" @click="openPopModel('sku')">
            <div>请选择型号</div>
            <div>
              <i class="iconfont icon-right"></i>
            </div>
          </div>
          <div class="item_select_classification item_white">
            <div class="chen_center_absolute">
              <div>
                商品评价(
                <span>333</span>)
              </div>
              <router-link :to="{ name: 'evaluate', params: { userId: 123 }}">
                <div class="item_look_more">
                  <span>查看更多</span>
                  <i class="iconfont icon-right"></i>
                </div>
              </router-link>
            </div>
            <div class="evaluate">
              <div class="evaluate_header">
                <div class="header_img">
                  <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549866693683&di=2809ed20f7353ea896749a31db949739&imgtype=0&src=http%3A%2F%2Fpic41.photophoto.cn%2F20161129%2F0005018388660581_b.jpg"
                  >
                </div>
                <div>赵钱孙李</div>
              </div>
              <div
                class="evaluate_des"
              >摸着特别舒服，面料柔软，透气摸着特别舒服，面料柔，透气摸着特别舒服，面着特别舒服，面料柔软，透气摸着特别舒服，面料柔软，透气</div>
              <div class="evaluate_img">
                <img
                  src="//img.alicdn.com/imgextra/i4/3534152336/O1CN011T7vfnPcYMx5A0u_!!3534152336.jpg_2200x2200Q90s50.jpg"
                  v-for="(val,index) in 5"
                  :key="index"
                  preview="1"
                >
              </div>
            </div>
          </div>
          <!-- <div class="item_select_shop_name chen_center_absolute">
            <div class="chen_center_absolute">
              <div class="shop_name_img">
                <img src="http://img3.imgtn.bdimg.com/it/u=761209122,3336350115&fm=26&gp=0.jpg" alt>
              </div>
              <div>我的小店</div>
            </div>
            <div class="shop_name_btn">进店逛逛</div>
          </div>-->
          <div class="item_details_parameters">
            <div class="chen_center_absolute item_details_checkout">
              <div
                :class="{'details_checkout_active':itemDetails === '1'}"
                @click="itemDetailsShow"
              >详情</div>
              <div
                :class="{'details_checkout_active':itemDetails === '0'}"
                @click="itemParametersShow"
              >参数</div>
            </div>
            <!-- <div v-lazy-container="{ selector: 'img' }"> -->
            <div
              v-show="itemDetails === '1'"
              class="item_details"
              ref="imgs_detail"
              v-html="itemInfo.detail"
              v-lazy-container="{ selector: 'img' }"
            >
              <!-- <li v-for="(val, index) in item_details_data" :key="index">
                <img :src="val.url">
              </li>-->
            </div>
            <ul v-show="itemDetails === '0'" class="item_parameters">
              <li
                class="item_parameters_list chen_center_absolute"
                v-for="(val,index) in item_parameters_data"
                :key="index"
              >
                <div>{{val.title}}</div>
                <div>{{val.des}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <c-share :shareShow="share" @shareClose="shareNone"></c-share>
    <div class="item_page_footer">
      <div class="item_page_footer_content chen_center_absolute">
        <div class="chen_center_absolute_center item_page_footer_follow_wrap">
          <div
            class="chen_center_absolute_column item_page_footer_follow"
            :class="{'active':favoriteId}"
            @click="favorite()"
          >
            <i class="iconfont icon-like"></i>
            <span>关注</span>
          </div>
          <!-- <div class="chen_center_absolute_column item_page_footer_follow">
            <i class="iconfont icon-shop"></i>
            <span>店铺</span>
          </div>-->
          <div
            class="chen_center_absolute_column item_page_footer_follow"
            @click="$router.push('/shopcart')"
          >
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
          </div>
        </div>
        <div class="chen_center_absolute_center item_page_footer_buys_wrap">
          <div
            class="chen_center_absolute_column item_page_footer_buys"
            @click="openPopModel('cart')"
          >
            <span>加入购物车</span>
          </div>
          <div
            class="chen_center_absolute_column item_page_footer_buys"
            @click="openPopModel('buy')"
          >
            <span>立刻购买</span>
          </div>
        </div>
      </div>
    </div>
    <transition name="pop">
      <div class="item_detail_pop_model" v-show="pop_model">
        <div class="item_detail_pop_box">
          <div class="item_detail_pop_model_hidden" @click="closePopModel()"></div>
          <div class="item_detail_pop_content">
            <div class="item_detail_pop_parents">
              <div class="item_detail_top_img">
                <div class="item_detail_img_box">
                  <img v-if="itemInfo.imgList" :src="itemInfo.imgList[0]">
                </div>
                <div class="item_detail_top_price">
                  <div class="item_detail_top_des">
                    <div class="price_num">
                      ￥{{selectSku ? selectSku.price : itemPrice}}
                      <!-- <span>78.00</span> -->
                    </div>
                    <!-- <div v-if="selectSku">库存 {{selectSku.quantity}}件</div> -->
                    <div>{{selectTip}}</div>
                    <!-- <div>{{selectValue.length == 0?'请选择规格': `已选择:${selectValue.join(',')}`}}</div> -->
                  </div>
                  <div class="item_detail_top_cancel" @click="closePopModel()">
                    <i class="iconfont icon-round_close_light"></i>
                  </div>
                </div>
              </div>
              <ul class="item_detail_center">
                <li
                  class="item_detail_select_data"
                  v-for="(val,index) in itemInfo.propnames"
                  :key="index"
                >
                  <div class="select_data_til">{{val.name}}</div>
                  <div class="select_data_lists">
                    <div
                      class="select_data_item"
                      v-for="(item,index2) in itemInfo.propvalues[index]"
                      :key="index2"
                      @click="selectDataItem(index, item.id)"
                      :class="{
                      'select_data_item_active_none': disabledList[index] && disabledList[index].includes(item.id),
                      'select_data_item_active':selectValue[index] == item.id
                    }"
                    >{{item.name}}</div>
                  </div>
                </li>
                <li class="chen_center_absolute item_detail_number">
                  <div class="select_data_til" style="margin-bottom: 0rem;">
                    数量
                    <span v-if="selectSku">({{selectSku.quantity}}件)</span>
                  </div>
                  <div>
                    <c-number-input :min="1" :max="20" v-model="quantity"></c-number-input>
                  </div>
                </li>
              </ul>
              <div v-if="pop_model === 'sku'" class="item_detail_confirm">
                <button class="btn" style="background: #fe9402;" @click="submit('cart')">加入购物车</button>
                <button class="btn" @click="submit('buy')">立刻购买</button>
              </div>
              <div v-else class="item_detail_confirm" @click="submit(pop_model)">
                <button class="btn">确定</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import services from "@/services";
import routerCachePage from "@/routerCache/page";

export default {
  mixins: [
    routerCachePage({
      scrollWrapSelector: ".item_page_content"
    })
  ],
  data() {
    return {
      isLogin: false,

      headerOpacity: 0,

      itemDetails: "1",
      item_parameters_data: [
        //参数详情
        {
          id: 0,
          title: "产地",
          des: "广东省 深圳市 罗湖区 笋岗街道"
        },
        {
          id: 1,
          title: "颜色",
          des: "蓝色 白色"
        },
        {
          id: 2,
          title: "面料",
          des: "50%棉 10%氨纶"
        },
        {
          id: 3,
          title: "流行元素",
          des: "潮流韩版"
        },
        {
          id: 4,
          title: "尺码",
          des: "XL,XXL,XXXL"
        },
        {
          id: 5,
          title: "上市年份/季节",
          des: "2019秋季"
        }
      ],
      pop_model: "", //控制购买详情弹出层
      selectValue: [], //选择规格数据
      disabledList: [], //禁用的数组

      itemId: "",
      itemInfo: {},
      quantity: 1,
      favoriteId: "",
      share: false //分享组件控制
    };
  },
  created() {
    this.isLogin = services.$isLogin();

    this.itemId = this.$route.params.itemId;
    this.fetchItem();

    if (this.isLogin) {
      this.getFavoriteByItemId();
    }
  },
  mounted() {
    this.bindEvent();
  },
  beforeDestroy() {
    this.$preview.self.close();
  },
  computed: {
    itemPrice() {
      if (!(this.itemInfo && this.itemInfo.skus)) return "";

      if (this.itemInfo.minPrice == this.itemInfo.maxPrice) {
        return `${this.itemInfo.minPrice}`;
      } else {
        return `${this.itemInfo.minPrice}-${this.itemInfo.maxPrice}`;
      }
    },
    selectSku() {
      if (!(this.itemInfo && this.itemInfo.skus)) return null;

      let sku = this.itemInfo.skus.filter(sku => {
        // console.log(sku.propvalues.join(","), this.selectValue.join(","));
        return sku.propvalues.join(",") === this.selectValue.join(",");
      })[0];

      // console.log("selectSku =>", sku);
      return sku;
    },
    selectTip() {
      if (!(this.itemInfo && this.itemInfo.propnames)) return "";

      let unselectPropnames = [];
      let selectPropvalues = [];
      this.itemInfo.propnames.forEach((prop, index) => {
        if (this.selectValue[index] || this.selectValue[index] === 0) {
          let propValue = this.getPropValue(index, this.selectValue[index]);
          selectPropvalues.push(propValue ? propValue.name : "");
        } else {
          unselectPropnames.push(prop.name);
        }
      });
      // console.log("selectTip");
      // console.log(unselectPropnames, selectPropvalues, this.selectValue);
      if (unselectPropnames.length === 0) {
        return `已选择：${selectPropvalues.join(",")}`;
      } else {
        return `请选择：${unselectPropnames.join(",")}`;
      }
    }
  },
  methods: {
    bindEvent() {
      let body = this.$refs.body;
      body.addEventListener("scroll", () => {
        let end = 100;
        let scrollTop = Math.min(body.scrollTop, end);
        this.headerOpacity = scrollTop / end;
      });
    },
    itemDetailsShow() {
      //商品详情
      this.itemDetails = "1";
    },
    itemParametersShow() {
      //商品参数
      this.itemDetails = "0";
    },
    openPopModel(type) {
      //选择参数
      this.pop_model = type;
    },
    closePopModel() {
      //选择参数
      this.pop_model = "";
    },
    //加入购物车
    async submit(type) {
      let inValid = this.itemInfo.propnames.some((prop, index) => {
        if (!this.selectValue[index]) {
          this.$toast(`请选择${prop.name}`);
          return true;
        }
      });

      if (inValid) return;

      if (type === "cart") {
        try {
          let { itemId } = this;
          let res = await services.addShopcart({
            itemId: this.itemId,
            skuId: this.selectSku.id,
            quantity: this.quantity
          });

          if (services.$isError(res)) throw new Error(res.message);

          this.$toast(res.message);

          this.closePopModel();
        } catch (err) {
          return this.$toast(err.message);
        }
      } else {
        let queryData = [
          {
            itemId: this.itemId,
            skuId: this.selectSku.id,
            quantity: this.quantity
          }
        ];

        queryData = JSON.stringify(queryData);

        this.$router.push({ path: "/confirmorder", query: { p: queryData } });
      }
    },
    selectDataItem(propnameIndex, propValueId) {
      if (
        this.disabledList[propnameIndex] &&
        this.disabledList[propnameIndex].indexOf(propValueId) !== -1
      )
        return;

      //属性选择
      if (this.selectValue[propnameIndex] === propValueId) {
        Vue.set(this.selectValue, propnameIndex, null);
      } else {
        Vue.set(this.selectValue, propnameIndex, propValueId);
      }

      this.checkQuantity();
    },
    checkQuantity() {
      let { skus, propvalues } = this.itemInfo;
      let { selectValue } = this;
      this.disabledList = this.disabledList || [];

      propvalues.forEach((p, index) => {
        let toDisabled = [];
        p.forEach(propvalue => {
          //有该属性值的sku
          let relatedSkus = this.getRelatedSkus(index, propvalue.id);

          let hasQuantity = relatedSkus.some(sku => {
            return sku.quantity > 0;
          });
          //没有库存
          this.disabledList[index] = this.disabledList[index] || [];
          if (!hasQuantity) {
            toDisabled.push(propvalue.id);
          }
        });
        this.disabledList[index] = toDisabled;
      });

      selectValue.forEach((v, i) => {});
    },
    async fetchItem() {
      try {
        let { itemId } = this;
        let res = await services.fetchItem({
          itemId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.itemInfo = res.data;
        this.$nextTick(() => {
          this.imgDetail();
        });

        this.checkQuantity();
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    imgDetail() {
      //图片设置data-src
      this.itemInfo.detail = this.itemInfo.detail.replace(/src/g, "data-src");
      this.$nextTick(() => {
        let prews = this.$refs.imgs_detail;
        let prewImgs = [...prews.querySelectorAll("img")];
        for (let i in prewImgs) {
          prewImgs[i].setAttribute("preview", "2");
        }
        this.$previewRefresh();
      });
    },
    getPropValue(index, valueId) {
      return this.itemInfo.propvalues[index].find(item => item.id == valueId);
    },
    getRelatedSkus(index, valueId) {
      let { propnames, skus } = this.itemInfo;
      let { selectValue } = this;
      return skus.filter(sku => {
        let inSelectedSku = true;
        propnames.forEach((n, i) => {
          //改属性类型没选择，或者选择属性值的属性类型跟改属性类型相同
          if (selectValue[i] == null || selectValue[i] == "" || index == i) {
            inSelectedSku = inSelectedSku && true;
          } else {
            inSelectedSku =
              inSelectedSku && sku.propvalues[i] == selectValue[i];
          }
        });

        return inSelectedSku && sku.propvalues[index] == valueId;
      });
    },
    async favorite() {
      try {
        let { itemId } = this;
        let res;

        //已经收藏
        if (this.favoriteId) {
          res = await services.removeFavorite({
            favoriteId: this.favoriteId
          });

          if (services.$isError(res)) throw new Error(res.message);

          this.$toast(res.message);
          this.favoriteId = "";
        } else {
          res = await services.addFavorite({
            itemId
          });

          if (services.$isError(res)) throw new Error(res.message);

          this.$toast(res.message);
          this.favoriteId = res.data.id;
        }
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async getFavoriteByItemId() {
      try {
        let { itemId } = this;
        let res = await services.getFavoriteByItemId({
          itemId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.favoriteId = res.data ? res.data.id : "";
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    shareCeshi() {
      //分享组件
      this.share = !this.share;
    },
    shareNone(data) {
      //分享组件
      this.share = data;
    }
  }
};
</script>
