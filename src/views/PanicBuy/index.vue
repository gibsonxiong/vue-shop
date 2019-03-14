<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
.buy_time {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  background: $color-primary-gradient;

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.buy_time_ul {
  color: rgba(#fff, 0.6);
  padding: 0.1rem;
  min-width:0.7rem;
  &.active {
    color: #fff;
  }
}
.buy_time_ul div:first-of-type {
  font-size: 0.2rem;
      text-align: center;
}
.buy_time_ul div:last-of-type {
  font-size: 0.12rem;
  text-align: center;
  white-space: nowrap;
}
.color_fff {
  color: #fff;
}

.buy_con {
  margin: 0.1rem;
  border-radius: 0.1rem;
  background: #fff;
  ul {
    li {
      display: flex;
      align-items: center;
      padding: 0.1rem;
      img {
        width: 0.9rem;
        height: 0.9rem;
        object-fit: cover;
      }

      .buy_con_right {
        padding-left: 0.1rem;
        flex: 1;
        .p1 {
          font-size: 0.14rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          height: 0.38rem;
        }
        .p2 {
          font-weight: 600;
        }
        .p3 {
          color: #fff;
          width: 50%;
          border-radius: 1rem;
          font-size: 0.12rem;
          padding: 0 0.01rem;
        }
        .p4 {
          display: flex;
          align-items: center;
        }
        .p4 span:first-of-type {
          font-size: 0.18rem;
          color: $color-primary;
        }
        .p4 span:nth-child(2) {
          color: #999;
          text-decoration: line-through;
          font-size: 0.12rem;
          padding: 0.02rem;
        }
        .rob {
          color: $color-primary;
          font-size: 0.12rem;
          text-align: right;
          span {
            border: 1px solid $color-primary;
            border-radius: 0.1rem;
            padding: 0.02rem 0.05rem;
          }
        }
      }
    }
  }
}
.percent {
  color: $color-primary;
  position: absolute;
  right: 5%;
  top: 25%;
  font-size: 0.12rem;
}

.progress-wrap {
  @include flexbox;
}

.sold-count {
  color: #999;
  font-size: 0.12rem;
  margin-left: 0.05rem;
}
</style>
<style lang="scss">
@import "~@/css/var";
.mt-progress-runway {
  border-radius: 1rem;
  background: #fbe9e9;
}
.mt-progress-progress {
  transition: width 0.3s ease-out;
  background-color: $color-primary;
  border-radius: 1rem;
}
</style>


<template>
  <div class="footprint-page page">
    <c-header :title="'限时抢购'"></c-header>
    <div class="c-page-body header-pd">
      <div class="panic_buy">
        <div class="buy_time" ref="navWrap">
          <div
            class="buy_time_ul"
            v-for="(item,index) in flashbuyList"
            :key="index"
            :class="{active: activeFlashbuyId == item.id }"
            @click="changeActive(item.id)"
          >
            <div>{{item.startTime | date('hh:mm')}}</div>
            <div>{{statusList[index]}}</div>
          </div>
        </div>
        <div class="buy_con">
          <ul>
            <li v-for="(item,index) in flashbuyItemList" :key="index" @click="$router.push(`/items/${item.itemId}`)">
              <img v-lazy="item.itemImg">
              <div class="buy_con_right">
                <p class="p1">{{item.itemName}}</p>
                <div class="progress-wrap">
                  <p class="p3" style="position:relative;">
                    <mt-progress :value="item.progress" :bar-height="14"></mt-progress>
                    <span
                      style="position: absolute;
                      left: 5%;
                      font-size: 0.12rem;
                      top: 25%;"
                    >{{item.progress == 100 ? '已抢完': item.progress == 100 ? '即将抢完' : `${item.progress}%`}}</span>
                  </p>
                  <span class="sold-count">{{`已抢${item.soldCount}件`}}</span>
                </div>
                
                <div style="display:flex;align-items: center;justify-content: space-between;">
                  <p class="p4">
                    <span>￥{{item.flashPrice}}</span>
                    <span>￥{{item.itemPrice}}</span>
                  </p>
                  <P class="rob">
                    <span v-if="item.status == 0">预热中</span>
                    <span v-else-if="item.status == 1">马上抢</span>
                  </P>
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
import services from "@/services";
import routerCachePage from "@/routerCache/page";
import utils from "@/utils";

export default {
  mixins: [
    routerCachePage({
      scrollWrapSelector: ".c-page-body"
    })
  ],
  data() {
    return {
      content_item: [
        {
          img:
            "http://img12.360buyimg.com/n0/jfs/t2800/191/708482304/109675/c1b7d865/5722d923N5588b197.jpg",
          title: "2019夏季新款女士长袖潮流T恤",
          title2: "前两小时第二件半价",
          price: 49,
          Dprice: 149,
          value: 66,
          num: 11
        },
        {
          img:
            "http://img12.360buyimg.com/n0/jfs/t2800/191/708482304/109675/c1b7d865/5722d923N5588b197.jpg",
          title:
            "2019夏季新款女士长袖潮流T恤2019夏季新款女士长袖潮流T恤2019夏季新款女士长袖潮流T恤2019夏季新款女士长袖潮流T恤",
          title2: "前两小时第二件半价",
          price: 49,
          Dprice: 149,
          value: 65,
          num: 33
        },
        {
          img:
            "http://img12.360buyimg.com/n0/jfs/t2800/191/708482304/109675/c1b7d865/5722d923N5588b197.jpg",
          title: "2019夏季新款女士长袖潮流T恤",
          title2: "前两小时第二件半价",
          price: 49,
          Dprice: 149,
          value: 96,
          num: 89
        }
      ],
      flashbuyList: [],
      activeFlashbuyId: "",
      flashbuyItemList: [],
      scrollTimeId: null
    };
  },
  computed: {
    statusList() {
      let hasStart = false;
      let clone = this.flashbuyList.slice();
      let dayLast;
      return clone
        .reverse()
        .map(item => {
          let now = new Date();
          let startTime = new Date(item.startTime);
          if (now >= startTime) {
            if (hasStart) {
              return "已开抢";
            } else {
              hasStart = true;
              return "进行中";
            }
          } else {
            if (startTime > utils.getDayEndTime(now)) {
              return "明天开抢";
            } else {
              return "即将开抢";
            }
          }
        })
        .reverse();
    }
  },
  methods: {
    async fetchFlashbuyList() {
      try {
        this.$showLoading();
        let res = await services.fetchFlashbuyList();

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.flashbuyList = res.data.list;
        if (this.flashbuyList.length > 0) {
          if(!this.activeFlashbuyId){
            this.activeFlashbuyId = res.data.currentId;
          }
          this.fetchFlashbuyItemList();

          //定位
          this.$nextTick(() => {
            this.positionActive();
          });
        }
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    positionActive() {
      let wrap = this.$refs.navWrap;
      let activeItem = wrap.querySelector(".active");

      let containerWidth = wrap.clientWidth;
      let containerScrollWidth = wrap.scrollWidth;
      let width = activeItem.clientWidth;
      let left = activeItem.offsetLeft;
      let scrollLeft = wrap.scrollLeft;

      let distScrollLeft = left - (containerWidth - width) / 2;
      if (distScrollLeft <= 0) {
        distScrollLeft = 0;
      } else if (distScrollLeft + containerWidth >= containerScrollWidth) {
        distScrollLeft = containerScrollWidth - containerWidth;
      }

      this.scroll(wrap, scrollLeft, distScrollLeft);
    },
    scroll(elem, scrollLeft, distScrollLeft) {
      this.scrollTimeId && clearTimeout(this.scrollTimeId);
      let c = (distScrollLeft - scrollLeft) / 10;

      let run = () => {
        let d = elem.scrollLeft + c;

        if (c >= 0) {
          if (d >= distScrollLeft) {
            elem.scrollLeft = distScrollLeft;
            return;
          }
        } else {
          if (d <= distScrollLeft) {
            elem.scrollLeft = distScrollLeft;
            return;
          }
        }

        elem.scrollLeft = d;

        this.scrollTimeId = setTimeout(() => {
          run();
        }, 1000 / 60);
      };

      run();
    },
    changeActive(activeFlashbuyId) {
      if (this.activeFlashbuyId == activeFlashbuyId) return;

      this.activeFlashbuyId = activeFlashbuyId;

      this.fetchFlashbuyItemList();

      this.$nextTick(() => {
        this.positionActive();
      });
    },
    async fetchFlashbuyItemList() {
      try {
        this.$showLoading();
        let flashbuyId = this.activeFlashbuyId;
        this.flashbuyItemList = [];

        let res = await services.fetchFlashbuyItemList({
          flashbuyId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.flashbuyItemList = res.data;
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.fetchFlashbuyList();
    
  }
};
</script>
