<style lang="scss" scoped>
@import "~@/css/mixin";
.logistics {
  .wrap {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    height: 100%;
    .logistics_des {
      @include border-bottom();
      padding: pxTorem(20);
      background: #fff;
      display: flex;
      .des_img {
        width: pxTorem(140);
        height: pxTorem(140);
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
  <div class="logistics page">
    <c-header :title="'物流详情'"></c-header>
    <div class="c-page-body header-pd">
      <div class="wrap">
        <div class="logistics_des">
          <div class="des_img">
            <div class="c-img-box">
              <img :src="firstOrderItem.itemImg">
            </div>
          </div>
          <div class="des_content">
            <p class="logistics_status">{{state == 3 ? '已签收':''}}</p>
            <p>
              <span>{{deliverCompany.name}}</span>:
              <span>{{deliverPostId}}</span>
            </p>
            <p>官方电话: {{deliverCompany.phone}}</p>
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

export default {
  data() {
    return {
      state: 0,
      deliverPostId: "",
      deliverCompany: {},
      logisticsData: [],
      firstOrderItem:{}
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
      try {
        let res = await services.getOrderDeliver({
          orderId: this.orderId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.state = res.data.state;
        this.firstOrderItem = res.data.firstOrderItem;
        this.deliverPostId = res.data.deliverPostId;
        this.deliverCompany = res.data.deliverCompany;
        this.logisticsData = res.data.detailData;
      } catch (err) {
        this.$toast(err.message);
      }
    }
  },
  mounted() {
    this.orderId = this.$route.query.orderId;
    this.getLogis();
  }
};
</script>

