<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
// .pop-enter-active,
// .pop-leave-active {
//   // transform: translateY(0);
//   transition: opacity 0.3s;
// }
// .fade-enter-active,
// .fade-leave-active {
//   transform: translateY(0);
//   transition: 0.3s;
// }
// .pop-enter,
// .pop-leave-to {
//   opacity: 0;
//   // transform: translateY(100%);
// }

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0.8;
  transform: translate3d(0, 100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
        padding: 0.1rem 0.07rem 0.1rem;
      }
      .item_select_des {
        .dex_txt {
          font-size: pxTorem(28);
        }
        .dex_share {
          font-size: pxTorem(16);
          color: $color-primary;
          min-width: 15%;
        }
        .des_price {
          padding: 0.1rem 0rem;
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
            padding-top: pxTorem(20);
            .header_img {
              width: 0.3rem;
              margin-right: 0.05rem;
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
          background: $color-secondly;
        }
        .item_page_footer_buys:last-child {
          background: $color-primary;
        }
      }
    }
  }

  .item_detail_pop_model_hidden {
    @include mask;
  }

  .item_detail_pop_content {
    position: fixed;
    z-index: 110;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    .item_detail_pop_parents {
      position: relative;
      height: 100%;
      padding: 0rem pxTorem(30);
      .item_detail_top_img {
        @include border-bottom($color-border);
        padding: 0.08rem 0rem 0.08rem 1.15rem;
        min-height: 0.9rem;
        .item_detail_img_box {
          position: absolute;
          top: -0.28rem;
          left: 0.15rem;
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
              color: #666;
              font-size: pxTorem(48);
            }
          }
        }
      }
      .item_detail_center {
        height: 3rem;
        overflow: auto;
        padding: 0 0.15rem;
        padding-bottom: 0.6rem;
        margin: 0 -0.15rem;
        .item_detail_select_data {
          padding: 0.08rem 0rem 0rem;
          .select_data_lists {
            &::after {
              content: "";
              display: block;
              clear: both;
            }
            .select_data_item {
              float: left;
              color: #333;
              padding: 0.05rem 0.15rem;
              background: #f8f8f8;
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
          font-size: pxTorem(24);
          margin-bottom: pxTorem(16);
        }
        .item_detail_number {
          @include border-top($color-border);
          padding-top: pxTorem(30);
        }
      }
      .item_detail_confirm {
        // position: absolute;
        // bottom: 0;
        // left: 0;
        // right: 0;
        margin: 0 -0.15rem;
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

          &.btn-secondly {
            background-color: $color-secondly;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.item_details {
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
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
              <div>快递：￥{{itemInfo.postFee}}</div>
              <div>销量：{{itemInfo.saleCount}}件</div>
            </div>
          </div>

          <div class="item_select_classification chen_center_absolute" @click="openPopModel('sku')">
            <div>请选择型号</div>
            <div>
              <i class="iconfont icon-right"></i>
            </div>
          </div>
          <div class="item_select_classification item_white" v-if="itemInfo.rateCount > 0">
            <div class="chen_center_absolute">
              <div>商品评价({{itemInfo.rateCount}})</div>
              <div>
                <router-link
                  class="item_look_more"
                  :to="{ path: '/evaluate', query: { itemId }}"
                >
                  <span>查看更多</span>
                  <i class="iconfont icon-right"></i>
                </router-link>
              </div>
            </div>
            <div v-if="rateList.length > 0">
              <router-link
                :to="{ path: '/evaluate', query: { itemId }}"
                tag="div"
                class="evaluate"
                v-for="(rate,index) in rateList"
                :key="index"
              >
                <div class="evaluate_header">
                  <div class="header_img">
                    <img :src="rate.user.avatar">
                  </div>
                  <div style="color:#777">{{rate.user.nickname}}</div>
                </div>
                <div class="evaluate_des">{{rate.content || '用户没有填写评价内容'}}</div>
                <div class="evaluate_img" v-if="rate.rateImgList.length > 0">
                  <img v-for="(img,imgIndex) in rate.rateImgList" :key="imgIndex" :src="img">
                </div>
              </router-link>
            </div>
            <div
              style="color: #777;font-size: 0.12rem;padding-top: 0.1rem;"
              v-else
            >暂无评价</div>
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

    <c-share :shareShow="share" @shareClose="shareNone"></c-share>

    <transition name="fade">
      <div class="item_detail_pop_model_hidden" @click="closePopModel()" v-show="pop_model"></div>
    </transition>
    <transition name="slide">
      <div class="item_detail_pop_content" v-show="pop_model">
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
                <div style="padding-top:0.05rem;color:#666;">{{selectTip}}</div>
                <!-- <div>{{selectValue.length == 0?'请选择规格': `已选择:${selectValue.join(',')}`}}</div> -->
              </div>
              <div class="item_detail_top_cancel" @click="closePopModel()">
                <i class="iconfont icon-round_close_light"></i>
              </div>
            </div>
          </div>
          <div class="item_detail_center">
            <div style="padding:0.15rem 0;">
              <div
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
              </div>
            </div>
            <div class="chen_center_absolute item_detail_number">
              <div class="select_data_til" style="margin-bottom: 0rem;">
                数量
                <span v-if="selectSku">({{selectSku.quantity}}件)</span>
              </div>
              <div>
                <c-number-input :min="1" :max="20" v-model="quantity"></c-number-input>
              </div>
            </div>
          </div>
          <div v-if="pop_model === 'sku'" class="item_detail_confirm">
            <button class="btn btn-secondly" @click="submit('cart')">加入购物车</button>
            <button class="btn" @click="submit('buy')">立刻购买</button>
          </div>
          <div v-else class="item_detail_confirm" @click="submit(pop_model)">
            <button class="btn">确定</button>
          </div>
        </div>
      </div>
    </transition>
    <!-- </div>
    </div>-->
    <!-- </transition> -->
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
      share: false, //分享组件控制
      rateList: []
    };
  },
  created() {
    this.isLogin = services.$isLogin();

    this.itemId = this.$route.params.itemId;
    this.fetchItem();
    this.fetchItemRateList();

    if (this.isLogin) {
      this.getFavoriteByItemId();
    }
  },
  mounted() {
    this.bindEvent();
  },
  beforeDestroy() {
    this.$preview.self && this.$preview.self.close();
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
        let min = 150;
        let max = 300;
        let scrollTop = Math.max(body.scrollTop, min);
        scrollTop = Math.min(scrollTop, max);
        this.headerOpacity = (scrollTop - min) / (max - min);
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
    async fetchItemRateList() {
      try {
        let { itemId } = this;
        let res = await services.fetchItemRateList({
          itemId
        });

        console.log(res);

        if (services.$isError(res)) throw new Error(res.message);

        this.rateList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    imgDetail() {
      //图片设置data-src
      this.itemInfo.detail = this.itemInfo.detail.replace(/src/g, "data-src");
      this.$nextTick(() => {
        let prews = this.$refs.imgs_detail;
        let prewImgs = [...(prews ? prews.querySelectorAll("img") : [])];
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
          //该属性类型没选择，或者选择属性值的属性类型跟改属性类型相同
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
