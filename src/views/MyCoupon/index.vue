<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/common";
@import "~@/css/mixin";

.coupon_page {
  box-sizing: border-box;
  .header_r {
    i {
      font-size: pxTorem(44);
    }
  }
  .coupon_wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
    .coupon_til {
      background: #fff;
      display: flex;
      .til_list {
        padding: pxTorem(25) 0px;
        text-align: center;
        flex: 1;
      }
      .til_list_active {
        color: #fe5455;
        @include border-bottom(#fe5455, 2px);
      }
    }
    .coupon_lists {
      flex: 1;
      overflow: auto;
      background: #efeff4;
      padding: pxTorem(30) pxTorem(20);
      .list_box {
        .list_item {
          display: flex;
          justify-content: center;
          border-radius: 4px;
          overflow: hidden;
          padding-bottom: pxTorem(30);
          .item_l {
            width: 26%;
            background: #fe5455;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: pxTorem(30) 0rem;
            color: #fff;
            .num {
              font-size: 12px;
              span {
                font-size: pxTorem(38);
                font-weight: bold;
              }
            }
          }
          .item_r {
            flex: 1;
            background: #fff;
            padding: pxTorem(26) pxTorem(30) pxTorem(18) pxTorem(18);
            .r_til {
              font-size: pxTorem(34);
            }
            .r_des {
              color: #666666;
            }
            .r_surplus {
              color: #b3b3b3;
              font-weight: 600;
            }
            .r_footer {
              color: #999999;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="coupon_page">
    <c-header :title="'我的优惠券'" :backType="1">
      <div slot="right" class="header_r">
        <i class="iconfont icon-my_light"></i>
      </div>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="coupon_wrap">
        <div class="coupon_til">
          <div
            class="til_list"
            :class="{'til_list_active':tilActive === 0}"
            @click="tilActiveClick(0)"
          >未使用</div>
          <div
            class="til_list"
            :class="{'til_list_active':tilActive === 1}"
            @click="tilActiveClick(1)"
          >已使用</div>
          <div
            class="til_list"
            :class="{'til_list_active':tilActive === 2}"
            @click="tilActiveClick(2)"
          >已过期</div>
        </div>
        <div class="coupon_lists">
          <ul class="list_box">
            <li class="list_item" v-for="(val,index) in currencyList" :key="index">
              <div class="item_l chen_center_absolute_column">
                <p class="num">
                  ￥
                  <span>{{val.price | add}}</span>
                </p>
                <p class="des">无金额门槛</p>
              </div>
              <div class="item_r">
                <p class="r_til">{{val.des}}</p>
                <p class="r_des">消费任意金额立减20</p>
                <p class="r_surplus">
                  剩余
                  <span>1</span>/
                  <span>0</span>张
                </p>
                <div class="chen_center_absolute r_footer">
                  <div>即领取日一天内有效</div>
                  <div>已发完</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tilActive: 0, //使用与否
      lists: [
        //type  0-未使用    1-已使用    2-已过期
        {
          price: 10,
          des: "笑笑女装",
          type: 0
        },
        {
          price: 50,
          des: "涛涛皮鞋",
          type: 0
        },
        {
          price: 110,
          des: "小猫宠物",
          type: 1
        },
        {
          price: 20,
          des: "大米粮油",
          type: 1
        },
        {
          price: 5,
          des: "海尔精装电器",
          type: 1
        },
        {
          price: 43,
          des: "双十二店铺",
          type: 2
        }
      ],
      currencyList: [], //当前所展示数据
    };
  },
  filters:{
    add(val){
      if (!val) return '';
      val = Math.floor(val);
      return val;
    }
  },
  created() {
    this.tilLists();
  },
  mounted() {},
  methods: {
    tilActiveClick(num) {
      //使用按钮点击
      this.tilActive = num;
      this.tilLists(num);
    },
    tilLists(num) {
      //优惠券数据
      let type = num || this.tilActive;
      this.currencyList = this.lists.filter(item => {
        return item.type === type;
      });
      //   let arr = this.lists.filter(item => {
      //     return item.price += 100;
      //   });
    },
    
  }
};
</script>
