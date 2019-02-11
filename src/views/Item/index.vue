<style lang="scss">
.item_details {
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
.item_page {
  .item_page_content {
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    .mint-swipe {
      height: pxTorem(570);
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
        // .item_details {
        //   img {
        //     width: 100%;
        //     object-fit: cover;
        //   }
        // }
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
  <div class="item_page">
    <c-header :title="'商品详情'">
      <a slot="right">
        <i class="iconfont icon-fenxiang" style="font-size:0.2rem;"></i>
      </a>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="item_page_content">
        <mt-swipe :auto="5000" :showIndicators="true" :speed="600">
          <mt-swipe-item v-for="(val, index) in itemInfo.detailImgSrcs" :key="index">
            <router-link to="/">
              <img :src="val" alt>
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
            <div v-show="itemDetails === '1'" class="item_details" v-html="itemInfo.desc">
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
    <div class="item_page_footer">
      <div class="item_page_footer_content chen_center_absolute">
        <div class="chen_center_absolute_center item_page_footer_follow_wrap">
          <div class="chen_center_absolute_column item_page_footer_follow">
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
    <div class="item_detail_pop_model" v-if="pop_model">
      <div class="item_detail_pop_box">
        <div class="item_detail_pop_model_hidden" @click="closePopModel()"></div>
        <div class="item_detail_pop_content">
          <div class="item_detail_pop_parents">
            <div class="item_detail_top_img">
              <div class="item_detail_img_box">
                <img :src="itemInfo.imgSrc">
              </div>
              <div class="item_detail_top_price">
                <div class="item_detail_top_des">
                  <div class="price_num">
                    ￥{{selectSku ? selectSku.price : itemPrice}}
                    <!-- <span>78.00</span> -->
                  </div>
                  <div v-if="selectSku">库存 {{selectSku.quantity}}件</div>
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
                v-for="(val,index) in itemInfo.props"
                :key="index"
              >
                <div class="select_data_til">{{val.name}}</div>
                <div class="select_data_lists">
                  <div
                    class="select_data_item"
                    v-for="(item,index2) in itemInfo.propValues[index]"
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
                <div class="select_data_til" style="margin-bottom: 0rem;">数量</div>
                <div>
                  <c-number-input :min="1" :max="20" v-model="number_input"></c-number-input>
                </div>
              </li>
            </ul>
            <div v-if="pop_model === 'sku'" class="item_detail_confirm">
              <button class="btn" style="background: #fe9402;" @click="submit('cart')">加入购物车</button>
              <button class="btn" @click="submit('buy')">立刻购买</button>
            </div>
            <div
              v-else
              class="item_detail_confirm"
              @click="submit(pop_model)"
            >
              <button class="btn">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import services from "@/services";

export default {
  data() {
    return {
      itemDetails: "1",
      // imgS: [
      //   //轮播图
      //   {
      //     id: 0,
      //     url:
      //       "http://img5.imgtn.bdimg.com/it/u=3152579570,2101947547&fm=26&gp=0.jpg"
      //   },
      //   {
      //     id: 1,
      //     url:
      //       "http://img4.imgtn.bdimg.com/it/u=1697179575,3344030537&fm=26&gp=0.jpg"
      //   },
      //   {
      //     id: 2,
      //     url:
      //       "http://img0.imgtn.bdimg.com/it/u=3922443166,3222977178&fm=26&gp=0.jpg"
      //   }
      // ],
      // item_details_data: [
      //   //详情图片
      //   {
      //     id: 0,
      //     url:
      //       "http://img2.imgtn.bdimg.com/it/u=1734456176,2066289348&fm=26&gp=0.jpg"
      //   },
      //   {
      //     id: 1,
      //     url:
      //       "http://img1.imgtn.bdimg.com/it/u=404896549,3263823906&fm=26&gp=0.jpg"
      //   },
      //   {
      //     id: 2,
      //     url:
      //       "http://img5.imgtn.bdimg.com/it/u=2451808208,2212241971&fm=26&gp=0.jpg"
      //   },
      //   {
      //     id: 3,
      //     url:
      //       "http://img3.imgtn.bdimg.com/it/u=1334521210,4048204431&fm=26&gp=0.jpg"
      //   },
      //   {
      //     id: 4,
      //     url:
      //       "http://img1.imgtn.bdimg.com/it/u=2091543393,1004231476&fm=11&gp=0.jpg"
      //   }
      // ],
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
      number_input: 1, //输入数量数据
      pop_model: 0, //控制购买详情弹出层
      selectValue: [], //选择规格数据
      disabledList: [], //禁用的数组
      // simulated_data: {
      //   //选择规格模拟后台返回的数据 多规格
      //   difference: [
      //     {
      //       //所有的规格可能情况都在这个数组里
      //       id: "19",
      //       price: "200.00",
      //       stock: "19",
      //       difference: "100,白色"
      //     },
      //     {
      //       id: "20",
      //       price: "300.00",
      //       stock: "29",
      //       difference: "200,白色"
      //     },
      //     {
      //       id: "21",
      //       price: "300.00",
      //       stock: "10",
      //       difference: "100,黑丝"
      //     },
      //     {
      //       id: "22",
      //       price: "300.00",
      //       stock: "0",
      //       difference: "200,黑丝"
      //     },
      //     {
      //       id: "23",
      //       price: "500.00",
      //       stock: "48",
      //       difference: "100,绿色"
      //     },
      //     {
      //       id: "24",
      //       price: "500.00",
      //       stock: "0",
      //       difference: "200,绿色"
      //     }
      //   ],
      //   specifications: [
      //     {
      //       //这里是要被渲染字段
      //       name: "尺寸",
      //       item: [
      //         {
      //           name: "100"
      //         },
      //         {
      //           name: "200"
      //         }
      //       ]
      //     },
      //     {
      //       name: "颜色",
      //       item: [
      //         {
      //           name: "白色"
      //         },
      //         {
      //           name: "黑丝"
      //         },
      //         {
      //           name: "绿色"
      //         }
      //       ]
      //     }
      //   ]
      // },
      itemId: "",
      itemInfo: {}
    };
  },
  created() {
    this.itemId = this.$route.params.itemId;

    this.fetchItem();
  },
  computed: {
    itemPrice() {
      if (!(this.itemInfo && this.itemInfo.skus)) return "";
      let prices = this.itemInfo.skus.map(item => item.price);
      let minPrice = Math.min(...prices);
      let maxPrice = Math.max(...prices);

      if (minPrice == maxPrice) {
        return `${minPrice}`;
      } else {
        return `${minPrice}-${maxPrice}`;
      }
    },
    selectSku() {
      if (!(this.itemInfo && this.itemInfo.skus)) return null;

      let sku = this.itemInfo.skus.filter(sku => {
        return sku.propValueIds === this.selectValue.join(",");
      })[0];

      console.log("selectSku");
      console.log(sku);
      return sku;
    },
    selectTip() {
      if (!(this.itemInfo && this.itemInfo.props)) return "";

      let unselectProps = [];
      let selectPropValues = [];
      this.itemInfo.props.forEach((prop, index) => {
        if (this.selectValue[index] || this.selectValue[index] === 0) {
          let propValue = this.getPropValue(index, this.selectValue[index]);
          selectPropValues.push(propValue ? propValue.name : "");
        } else {
          unselectProps.push(prop.name);
        }
      });
      console.log("selectTip");
      console.log(unselectProps, selectPropValues, this.selectValue);

      if (unselectProps.length === 0) {
        return `已选择：${selectPropValues.join(",")}`;
      } else {
        return `请选择：${unselectProps.join(",")}`;
      }
    }
  },
  methods: {
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
    submit(type) {
      console.log(type);
    },
    selectDataItem(typeIndex, propValueId) {
      if (
        this.disabledList[typeIndex] &&
        this.disabledList[typeIndex].indexOf(propValueId) !== -1
      )
        return;

      //属性选择
      Vue.set(this.selectValue, typeIndex, propValueId);
      // this.selectValue[typeIndex] = propValueId;

      this.disabledList = this.disabledList || [];
      this.itemInfo.props.forEach((item, index) => {
        if (index === typeIndex) return;
        Vue.set(this.disabledList, index, []);
        // this.disabledList[index] = [];
      });

      this.itemInfo.skus.forEach((sku, n) => {
        let propValueIds = sku.propValueIds.split(",");
        //不是相关属性
        if (propValueIds[typeIndex] != propValueId) return;
        //库存不为0
        if (sku.quantity > 0) return;

        propValueIds.forEach((_propValueId, index) => {
          if (typeIndex === index) return;
          this.disabledList[index].push(Number(_propValueId));
        });
      });

      // this.$forceUpdate();
    },
    async fetchItem() {
      try {
        let { itemId } = this;
        let res = await services.fetchItem({
          itemId
        });

        if (services.$isError(res)) throw new Error(res.message);

        res.data.detailImgSrcs = res.data.detailImgSrcs.split(",");
        this.itemInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    getPropValue(index, valueId) {
      return this.itemInfo.propValues[index].find(item => item.id == valueId);
    }
  }
};
</script>
