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
          color: #ff5959;
          min-width: 15%;
        }
        .des_price {
          padding: pxTorem(5) 0rem;
          .price_now {
            font-size: pxTorem(40);
            color: #ff5555;
          }
          .price_old {
            font-size: 12px;
            text-decoration: line-through;
            color: #cccccc;
          }
        }
        .express_price{
          font-size: 12px;
          color: #7B7B7B;
        }
      }
      .item_select_classification {
        background: #fff;
        font-size: pxTorem(28);
        margin: pxTorem(20) 0rem;
        padding: pxTorem(15) pxTorem(14);
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
              border-bottom: 1px solid #ff5555;
            }
          }
        }
        .item_details {
          img {
            width: 100%;
            object-fit: cover;
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
        width: 50%;
        .item_page_footer_follow {
          width: 50%;
        }
      }

      .item_page_footer_buys_wrap {
        width: 50%;
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
          background: #fd5555;
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
            height: pxTorem(116);
            @include border-bottom(#eee);
            padding-left: pxTorem(180);
            .item_detail_img_box {
              position: absolute;
              top: -6%;
              left: 3%;
              width: pxTorem(140);
              height: pxTorem(140);
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
                  color: #ff5555;
                  padding-bottom: pxTorem(5);
                  padding-top: pxTorem(5);
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
                  background: #ff5555;
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
            padding: pxTorem(18) 0rem;
            text-align: center;
            background: #fd5555;
            color: #fff;
            font-size: pxTorem(34);
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="item_page">
    <c-header :title="'商品详情'" :backType="1" :backText="'返回'">
      <a slot="right">菜单</a>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="item_page_content">
        <mt-swipe :auto="5000" :showIndicators="true" :speed="600">
          <mt-swipe-item v-for="(val, index) in imgS" :key="index">
            <router-link to="/">
              <img :src="val.url" alt="婴儿产品图">
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
        <div class="item_select">
          <div class="item_select_des item_white">
            <div class="chen_center_absolute">
              <div class="dex_txt">
                新款最牛逼的鞋子
                新款最牛逼的鞋子
                新款最牛逼的鞋子
              </div>
              <div class="dex_share chen_center_absolute_column">
                <div>
                  <i class="iconfont icon-share_light"></i>
                </div>
                <div>分享</div>
              </div>
            </div>
            <div class="des_price">
              <span class="price_now">￥
                <span>59</span>
              </span>
              <span class="price_old">￥930</span>
            </div>
            <div class="chen_center_absolute express_price">
              <div>快递：15.00</div>
              <div>销量：0 件</div>
            </div>
          </div>
          <div class="item_select_classification chen_center_absolute" @click="closePopModel(1)">
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
          </div> -->
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
            <ul v-show="itemDetails === '1'" class="item_details">
              <li v-for="(val, index) in item_details_data" :key="index">
                <img :src="val.url">
              </li>
            </ul>
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
          <div class="chen_center_absolute_column item_page_footer_follow" @click="$router.push('/shopcart')">
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
          </div>
        </div>
        <div class="chen_center_absolute_center item_page_footer_buys_wrap">
          <div class="chen_center_absolute_column item_page_footer_buys" @click="closePopModel(1)">
            <span>加入购物车</span>
          </div>
          <div class="chen_center_absolute_column item_page_footer_buys" @click="closePopModel(1)">
            <span>立刻购买</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item_detail_pop_model" v-if="pop_model">
      <div class="item_detail_pop_box">
        <div class="item_detail_pop_model_hidden" @click="closePopModel(0)"></div>
        <div class="item_detail_pop_content">
          <div class="item_detail_pop_parents">
            <div class="item_detail_top_img">
              <div class="item_detail_img_box">
                <img
                  src="//gw.alicdn.com/bao/uploaded/i2/2010197355/O1CN011ZH7Nc24CdYb7wOWq_!!2010197355.jpg_200x200Q50s50.jpg"
                >
              </div>
              <div class="item_detail_top_price">
                <div class="item_detail_top_des">
                  <div class="price_num">
                    ￥
                    <span>78.00</span>
                  </div>
                  <div>{{selectValue.length == 0?'请选择规格':selectValue.join(',')}}</div>
                </div>
                <div class="item_detail_top_cancel" @click="closePopModel(0)">
                  <i class="iconfont icon-round_close_light"></i>
                </div>
              </div>
            </div>
            <ul class="item_detail_center">
              <li
                class="item_detail_select_data"
                v-for="(val,index1) in simulated_data.specifications"
                :key="index1"
              >
                <div class="select_data_til">{{val.name}}</div>
                <div class="select_data_lists">
                  <div
                    class="select_data_item"
                    v-for="(item,index2) in val.item"
                    :key="index2"
                    @click="selectDataItem(index1, item.name)"
                    :class="[disabledList[index1] && disabledList[index1].indexOf(item.name) !== -1?'select_data_item_active_none':'',selectValue[index1] === item.name?'select_data_item_active':'']"
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
            <div class="item_detail_confirm" @click="buyConfirm">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemDetails: "1",
      imgS: [
        //轮播图
        {
          id: 0,
          url:
            "http://img5.imgtn.bdimg.com/it/u=3152579570,2101947547&fm=26&gp=0.jpg"
        },
        {
          id: 1,
          url:
            "http://img4.imgtn.bdimg.com/it/u=1697179575,3344030537&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          url:
            "http://img0.imgtn.bdimg.com/it/u=3922443166,3222977178&fm=26&gp=0.jpg"
        }
      ],
      item_details_data: [
        //详情图片
        {
          id: 0,
          url:
            "http://img2.imgtn.bdimg.com/it/u=1734456176,2066289348&fm=26&gp=0.jpg"
        },
        {
          id: 1,
          url:
            "http://img1.imgtn.bdimg.com/it/u=404896549,3263823906&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          url:
            "http://img5.imgtn.bdimg.com/it/u=2451808208,2212241971&fm=26&gp=0.jpg"
        },
        {
          id: 3,
          url:
            "http://img3.imgtn.bdimg.com/it/u=1334521210,4048204431&fm=26&gp=0.jpg"
        },
        {
          id: 4,
          url:
            "http://img1.imgtn.bdimg.com/it/u=2091543393,1004231476&fm=11&gp=0.jpg"
        }
      ],
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
      number_input: 0, //输入数量数据
      pop_model: 0, //控制购买详情弹出层
      item_active: null, //选择规格按钮样式
      selectValue: [], //选择规格数据
      disabledList: [], //禁用的数组
      simulated_data: {
        //选择规格模拟后台返回的数据 多规格
        difference: [
          {
            //所有的规格可能情况都在这个数组里
            id: "19",
            price: "200.00",
            stock: "19",
            difference: "100,白色"
          },
          {
            id: "20",
            price: "300.00",
            stock: "29",
            difference: "200,白色"
          },
          {
            id: "21",
            price: "300.00",
            stock: "10",
            difference: "100,黑丝"
          },
          {
            id: "22",
            price: "300.00",
            stock: "0",
            difference: "200,黑丝"
          },
          {
            id: "23",
            price: "500.00",
            stock: "48",
            difference: "100,绿色"
          },
          {
            id: "24",
            price: "500.00",
            stock: "0",
            difference: "200,绿色"
          }
        ],
        specifications: [
          {
            //这里是要被渲染字段
            name: "尺寸",
            item: [
              {
                name: "100"
              },
              {
                name: "200"
              }
            ]
          },
          {
            name: "颜色",
            item: [
              {
                name: "白色"
              },
              {
                name: "黑丝"
              },
              {
                name: "绿色"
              }
            ]
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    itemDetailsShow() {
      //商品详情
      this.itemDetails = "1";
    },
    itemParametersShow() {
      //商品参数
      this.itemDetails = "0";
    },
    closePopModel(bol) {
      //选择参数
      this.pop_model = bol;
    },
    buyConfirm() {
      //确认购买按钮
    },
    selectDataItem(typeIndex, value) {
      if(this.disabledList[typeIndex] && this.disabledList[typeIndex].indexOf(value) !== -1) return;
      this.disabledList = this.disabledList || [];
      this.simulated_data.specifications.forEach((item,index)=>{
        if(index === typeIndex) return;
        this.disabledList[index] = [];
      });
      this.selectValue[typeIndex] = value;
      this.simulated_data.difference.forEach((val, n) => {
        let types = val.difference.split(",");
        if (types[typeIndex] !== value) return;
        if (val.stock != 0) return;
        types.forEach((type, index) => {
          if (typeIndex === index) return;
          console.log(`typeIndex === index 时`);
          this.disabledList[index].push(type);
        });
      });
      this.$forceUpdate();
    }
  }
};
</script>
