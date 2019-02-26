<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.c-mine {
  .top {
    padding: 0.5rem 0.3rem;
    background: linear-gradient(to right, #ff5fa1, #ff4390);

    .top-wrap {
      @include flexbox;
    }

    .avator {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      margin-right: 0.1rem;
    }

    .nickname {
      color: #fff;
      font-size: 0.16rem;
    }
  }

  .order-wrap {
    padding: 0 0.05rem;
    background-color: #fff;
    @include flexbox;

    .order-item {
      text-align: center;
      padding: 0.1rem 0;
      @include flex;
    }

    .order-item-icon {
      font-size: 0.25rem;
    }
    .order-item-name {
      font-size: 0.12rem;
    }
  }
}
</style>

<template>
  <div class="c-mine">
    <c-header :title="'我的'" :backType="0">
      <router-link slot="right" to="/setting">
        <i class="iconfont icon-setting" style="font-size:0.18rem;"></i>
      </router-link>
    </c-header>
    <div class="c-page-body header-pd tab-pd">
      <div class="top">
        <div class="top-wrap">
          <!-- 已登录 -->
          <template v-if="isLogin">
            <router-link to="/personal">
              <img class="avator" :src="userInfo.avatar">
            </router-link>
            <router-link to="/personal">
              <div class="nickname">{{userInfo.nickname}}</div>
            </router-link>
          </template>
          <!-- 未登录 -->
          <template v-else>
            <router-link to="/login">
              <img class="avator" src="@/assets/default_avator.jpg" alt>
            </router-link>
            <div>
              <router-link to="/login" class="c-btn btn-light">登录 / 注册</router-link>
            </div>
          </template>
        </div>
      </div>

      <c-cell-list style="margin-top:0.15rem;">
        <c-cell
          icon="icon-form"
          :iconStyle="{'color':'rgb(113, 202, 112)'}"
          name="我的订单"
          value="查看全部订单"
          @click="$router.push('/order')"
        ></c-cell>
      </c-cell-list>
      <div class="order-wrap">
        <router-link tag="div" :to="{path:'/order', query:{status:'1'}}" class="order-item">
          <i class="order-item-icon iconfont icon-pay"></i>
          <div class="order-item-name">待付款</div>
        </router-link>
        <router-link tag="div" :to="{path:'/order', query:{status:'2'}}" class="order-item">
          <i class="order-item-icon iconfont icon-deliver"></i>
          <div class="order-item-name">待发货</div>
        </router-link>
        <router-link tag="div" :to="{path:'/order', query:{status:'3'}}" class="order-item">
          <i class="order-item-icon iconfont icon-icon-receive"></i>
          <div class="order-item-name">待收货</div>
        </router-link>
        <router-link tag="div" :to="{path:'/order', query:{status:'4'}}" class="order-item">
          <i class="order-item-icon iconfont icon-comment"></i>
          <div class="order-item-name">待评价</div>
        </router-link>
        <router-link tag="div" :to="{path:'/refundlist'}" class="order-item">
          <i class="order-item-icon iconfont icon-refund"></i>
          <div class="order-item-name">退款/售后</div>
        </router-link>
      </div>

      <c-cell-list style="margin-top:0.15rem;">
        <c-cell
          icon="icon-moneybag"
          :iconStyle="{'color':'rgb(203, 52, 228)'}"
          name="我的余额"
          :value="isLogin && userInfo.balance ? `￥${userInfo.balance}` : ''"
          @click="$router.push('/rechargerecord')"
        ></c-cell>
        <c-cell
          icon="icon-moneybag"
          :iconStyle="{'color':'rgb(203, 52, 228)'}"
          name="充值"
          @click="$router.push('/recharge')"
        ></c-cell>
        <c-cell
          icon="icon-youhuiquan"
          :iconStyle="{'color':'rgb(203, 52, 228)'}"
          name="领取优惠券"
          @click="$router.push('/coupon')"
        ></c-cell>
        <c-cell
          icon="icon-youhuiquan"
          :iconStyle="{'color':'rgb(203, 52, 228)'}"
          name="我的优惠券"
          :value="isLogin && userInfo.couponCount ? `${userInfo.couponCount}张` : ''"
          @click="$router.push('/myCoupon')"
        ></c-cell>
      </c-cell-list>

      <c-cell-list style="margin-top:0.15rem;margin-bottom:0.3rem;">
        <c-cell
          icon="icon-like"
          :iconStyle="{'color':'#f84a66'}"
          name="我的关注"
          @click="$router.push('/mylove')"
        ></c-cell>
        <c-cell
          icon="icon-footprint"
          :iconStyle="{'color':'#E6A23C'}"
          name="我的足迹"
          @click="$router.push('/footprint')"
        ></c-cell>
        <c-cell
          icon="icon-location"
          :iconStyle="{'color':'rgb(104, 167, 234)'}"
          name="收货地址"
          @click="$router.push('/myAddress')"
        ></c-cell>
        <c-cell
          icon="icon-location"
          :iconStyle="{'color':'rgb(104, 167, 234)'}"
          name="我的评价"
          @click="$router.push('/my_ecaluation')"
        ></c-cell>
      </c-cell-list>
      <!-- <div class="c-cell-list">
        <div class="c-cell" v-for="(item,index) in 3" :key="index">
          <div class="c-cell-left">
            <i class="iconfont icon-like"></i>
            <span class="c-cell-name">领取优惠券</span>
          </div>
          <div class="c-cell-right">
            <span class="c-cell-value">还不错</span>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>


<script>
import services from "@/services";
import routerCacheComponent from "@/routerCache/component";

export default {
  mixins: [
    routerCacheComponent({
      scrollWrapSelector: ".c-page-body"
    })
  ],
  data() {
    return {
      isLogin: false,
      userInfo: {}
    };
  },
  methods: {
    async fetchUserInfo() {
      try {
        let { itemId } = this;
        let res = await services.fetchUserInfo();

        if (services.$isError(res)) throw new Error(res.message);

        this.userInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },

  created() {
    this.isLogin = services.$isLogin();

    if (this.isLogin) {
      this.fetchUserInfo();
    }
  }
};
</script>
