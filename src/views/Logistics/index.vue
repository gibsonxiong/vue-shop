<style lang="scss" scoped>
@import "~@/css/mixin";
.logistics {
  .wrap {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    height: 100%;
    .logistics_des {
      @include border-bottom($color-border);
      padding: pxTorem(20);
      background: #fff;
      display: flex;
      .des_img {
        width: pxTorem(140);
        height: pxTorem(140);
        @include border($color-border);
        overflow: hidden;
        margin-right: 0.1rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .des_content {
        color: #c8c8c8;
        .logistics_status {
          font-size: 0.17rem;
          color: $color-primary;
        }
      }
    }
    .logistics_list {
      flex: 1;
      background: #fff;
      overflow-y: auto;
      overflow-x: hidden;
      table {
        border: none;
        width: 100%;
        display: block;
        padding: 0.2rem 0.1rem 0.2rem 0.15rem;
        color: #a5a5a5;
        tr {
          display: flex;
          width: 100%;
        }
        .table_active {
          color: $color-primary;
          .list_line {
            .line_cir {
              background: $color-primary;
            }
          }
        }
        .list_time {
          width: 16%;
          text-align: right;
          vertical-align: top;
          > div:nth-child(2) {
            font-size: 11px;
          }
        }
        .list_line {
          position: relative;
          width: 7%;
          &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 1px;
            left: 50%;
            transform: translate(-50%);
            background: #a5a5a5;
          }
          .line_cir {
            width: 0.11rem;
            height: 0.11rem;
            border-radius: 50%;
            overflow: hidden;
            background: #a5a5a5;
            position: absolute;
            top: 0px;
            left: 50%;
            transform: translate(-50%);
            z-index: 3;
          }
        }
        .list_des {
          width: 76%;
          vertical-align: top;
          padding-bottom: 0.2rem;
        }
      }
    }
  }
}
</style>
<template>
  <div class="logistics">
    <c-header :title="'物流详情'"></c-header>
    <div class="c-page-body header-pd">
      <div class="wrap">
        <div class="logistics_des">
          <div class="des_img">
            <img src="http://img3.imgtn.bdimg.com/it/u=761209122,3336350115&fm=26&gp=0.jpg">
          </div>
          <div class="des_content">
            <p class="logistics_status">已签收</p>
            <p>
              <span>中通快递</span>:
              <span>131456468465465</span>
            </p>
            <p>官方电话: 12306</p>
          </div>
        </div>
        <div class="logistics_list">
          <table>
            <tr
              v-for="(val,index) in logisticsData"
              :key="index"
              :class="{'table_active': index == 0}"
            >
              <td class="list_time">
                <div>{{val.time | dateDays}}</div>
                <div>{{val.time | dateTimes}}</div>
              </td>
              <td class="list_line">
                <div class="line_cir"></div>
              </td>
              <td class="list_des">
                <div>{{val.context}}</div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import services from "@/services";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      logisticsData: []
    };
  },
  filters: {
    dateDays(val) {
      var d = new Date(val);
      var month =
        d.getMonth() + 1 < 10
          ? "0" + (d.getMonth() + 1)
          : "" + (d.getMonth() + 1);
      var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      return month + "-" + day;
    },
    dateTimes(val) {
      var d = new Date(val);
      var hour = d.getHours() < 10 ? "0" + d.getHours() : "" + d.getHours();
      var minutes =
        d.getMinutes() < 10 ? "0" + d.getMinutes() : "" + d.getMinutes();
      return hour + ":" + minutes;
    }
  },
  methods: {
    async getLogis() {
      let routPars = this.$route.query;
      try {
        let res = await services.logistics(routPars);
        if (services.$isError(res)) throw new Error(res.message);
        this.logisticsData = res.data.data;
      } catch (err) {
        Toast({
          message: "服务错误，请重试！",
          position: "bottom",
          duration: 5000
        });
      }
    }    
  },
  mounted() {
    this.getLogis();
  }
};
</script>

