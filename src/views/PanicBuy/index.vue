<style scoped lang="scss">
@import "~@/css/var";
.buy_time {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  background: $color-primary;
}
.buy_time_ul {
  color: rgba(#fff, 0.5);
  padding: 0.1rem;
  &.active {
    color: #fff;
  }
}
.buy_time_ul li:first-of-type {
  font-size: 0.2rem;
}
.buy_time_ul li:last-of-type {
  font-size: 0.12rem;
  text-align: center;
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
        width: 100%;
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
          align-items:center;
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
</style>
<style>
.mt-progress-runway {
  border-radius: 1rem;
}
.mt-progress-progress {
  background-color: #f94a92;
  border-radius: 1rem;
}
</style>


<template>
  <div class="footprint-page">
    <c-header :title="'淘抢购'"></c-header>
    <div class="c-page-body header-pd">
      <div class="panic_buy">
        <div class="buy_time">
          <ul
            :class="{active: val.time == activeTime }"
            class="buy_time_ul"
            v-for="(val,index) in item"
            :key="index"
            @click="activeTime=val.time"
          >
            <li>{{val.time}}</li>
            <li>{{time > val.time ?'已开抢': time == val.time ? '进行中' : '即将开场'}}</li>
          </ul>
        </div>
        <div class="buy_con">
          <ul>
            <li v-for="(val,index) in content_item" :key="index">
              <img :src="val.img">
              <div class="buy_con_right">
                <p class="p1">{{val.title}}</p>
                <p class="p3" style="position:relative;">
                  <mt-progress :value="val.value" :bar-height="14"></mt-progress>
                  <span
                  v-if="val.value<80"
                    style="position: absolute;
                    left: 5%;
                    font-size: 0.12rem;
                    top: 25%;"
                  >已抢{{val.num}}件</span>
                  <span v-else  style="position: absolute;
                    left: 5%;
                    font-size: 0.12rem;
                    top: 25%;">即将抢完</span>
                  <span class="percent">{{val.value}}%</span>
                </p>
                <div style="display:flex;align-items: center;justify-content: space-between;">
                  <p class="p4">
                    <span>￥{{val.price}}</span>
                    <span>￥{{val.Dprice}}</span>
                  </p>
                  <P class="rob">
                    <span>马上抢</span>
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
import { Progress } from "mint-ui";
export default {
  data() {
    return {
      activeTime:'12:00',  
      time: "12:00",
      item: [
        { time: "11:00" },
        { time: "12:00" },
        { time: "13:00" },
        { time: "14:00" },
        { time: "15:00" },
        { time: "13:00" },
        { time: "14:00" },
        { time: "15:00" },
        { time: "17:00" },
        { time: "19:00" },
        { time: "21:00" },
        { time: "22:00" },
        { time: "23:00" },
        { time: "00:00" },
        { time: "08:00" },
        { time: "10:00" },
        { time: "11:00" },
        { time: "12:00" },
        { time: "13:00" },
        { time: "14:00" },
        { time: "15:00" },
        { time: "17:00" },
        { time: "19:00" },
        { time: "15:00" },
        { time: "21:00" },
        { time: "22:00" },
        { time: "23:00" }
      ],
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
      ]
    };
  },
  methods: {},
  created() {}
};
</script>
