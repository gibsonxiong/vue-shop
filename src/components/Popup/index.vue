<style lang="scss" scoped>
@import "~@/css/var";
.popup {
  padding: 0.1rem;
  position: absolute;
  bottom: 0;
  z-index: 100;
  right: 0;
  left: 0;
  height: 100%;
  background: rgba(#000, 0.7);
}
.popup_con {
  background: #fff;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  height: 60%;
  overflow: auto;
}
.pay {
  display: flex;
  align-items: center;
}
.icon-weixin1 {
  font-size: 0.3rem;
  padding-right: 0.1rem;
  color: #09bb07;
}
.icon-zhifubao {
  font: size 0.18rem;
  padding-right: 0.1rem;
  color: #00a1e9;
}
.icon-xuanzhong {
  color: $color-primary;
}
.icon-weixuanzhong {
  color: #e7e7e7;
}
li {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}

li:last-of-type {
  border-top: 1px solid #f4f4f4;
}
.popup_label {
  text-align: center;
  padding: 0.1rem;
  font-size: 18px;
}
.popup_btn {
  color: #fff;
  background: $color-primary;
  text-align: center;
  padding: 0.15rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
ul {
  padding: 0.1rem;
  height: 3rem;
  box-sizing: border-box;
  overflow: scroll;
}
</style>
<style>
.mint-radio-label {
  margin-left: 0px;
  padding-right: 1rem;
  display: inline-block;
}
.mint-radio-input:checked + .mint-radio-core {
  background-color: #f94a92;
  border-color: #f94a92;
}
</style>

<template>
  <div class="popup" v-if="popupShow">
    <div class="popup_con">
      <p class="popup_label">货物状态</p>
      <ul>
        <li class="pay">
          <mt-cell>
            <mt-radio align="right" v-model="mod" :options="popData" @change="check"></mt-radio>
          </mt-cell>
        </li>
      </ul>
      <div class="popup_btn" @click="showpopup">
        <span>关闭</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    popupShow: false,
    popData: {
      type: Array,
      default: []
    },
    propType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      popup: true,
      item_type: [{ not_received: "未收到货" }],
      item_cause: [],
      mod: ""
    };
  },
  watch: {
    mod(val) {
      this.$emit("popDataClick", {
        type: this.propType,
        data: val
      });
    }
  },
  methods: {
    showpopup: function() {
      this.$emit("popEvent", false);
    },
    check: function() {
    
    },
    getData() {
      let num = this.type;
      switch (num) {
        case 1:
          this.item_cause = [
            { label: "拍错/多拍/不喜欢", value: "拍错/多拍/不喜欢" },
            { label: "快递一直未送到", value: "快递一直未送到" },
            { label: "未按照约定时间发货", value: "未按照约定时间发货" },
            { label: "快递无跟踪记录", value: "快递无跟踪记录" },
            { label: "骑手送错订单", value: "骑手送错订单" },
            { label: "未按照约定时间送达", value: "未按照约定时间送达" },
            { label: "骑手提前点确认送达", value: "骑手提前点确认送达" },
            {
              label: "商家无法配送，联系我取消",
              value: "商家无法配送，联系我取消"
            },
            { label: "配送时间太长", value: "配送时间太长" },
            { label: "其他", value: "其他" }
          ];
          break;
        case 2:
          this.item_cause = [
            { label: "暂时没有收到货物", value: "暂时没有收到货物" }
          ];
          break;
      }
    }
  },
  mounted() {
    // this.getData();
  }
};
</script>

