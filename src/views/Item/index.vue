<style scoped lang="scss">
@import "~@/css/mixin";
@import "~@/css/var";
@import "~@/css/common";
.item-page {
  height: 100%;
  box-sizing: border-box;
  .mint-swipe {
    height: pxTorem(750);
    width: 100%;
    overflow: hidden;
    .mint-swipe-item {
      text-align: center;
      line-height: pxTorem(750);
      font-size: pxTorem(60);
      font-weight: bold;
      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        > img {
          max-width: 100%;
          max-height: 100%;
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
  .item_select{
    width: 100%;    
    background-color: #F3F3F3;
    padding: 0rem 0rem pxTorem(10);
    .item_white{
      background: #fff;
      padding: pxTorem(18) pxTorem(14) pxTorem(14);
    }
    .item_select_des{      
      .dex_txt{
        font-size: pxTorem(28);
        letter-spacing: 1px;
      }
      .dex_share{
        font-size: pxTorem(16);
        color: #FF5959;
        min-width: 15%;
      }
    }
  }
}
</style>

<template>
  <div class="item-page">
    <c-header :title="'商品详情'" :backType="1" :backText="'返回'">
      <a slot="right">菜单</a>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="item-page">
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
                    新款最牛逼的鞋子
                    新款最牛逼的鞋子
                    新款最牛逼的鞋子
                  </div>
                  <div class="dex_share chen_center_absolute_column">
                    <div><i class="iconfont icon-share_light"></i></div>
                    <div>分享</div>
                  </div>
              </div>
              <div>

              </div>
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
      imgS: [
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
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
