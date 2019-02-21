<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.popup {

}
.mask {
  @include mask();
}

.popup_con {
  background: #fff;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}
.pay {
  display: flex;
  align-items: center;
}
.icon-xuanzhong,
.icon-weixuanzhong {
  font-size: 0.2rem;
}

.icon-xuanzhong {
  color: $color-primary;
}
.icon-weixuanzhong {
  color: #e7e7e7;
}

.popup_title {
  text-align: center;
  padding: 0.1rem;
  font-size: 18px;
}

.popup_body {
  padding: 0rem 0.1rem 0.1rem;
  height: 3rem;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.1rem 0;
    border-bottom: 1px solid #f4f4f4;
  }
}

.popup_btn {
  color: #fff;
  background: $color-primary;
  text-align: center;
  padding: 0.15rem;
}
</style>
<template>
  <div class="popup" v-show="visible">
    <div class="mask" @click="$emit('popupVisibleChange',false)"></div>
    <div class="popup_con">
      <p class="popup_title">{{title}}</p>
      <ul class="popup_body">
        <li class="pay" v-for="(item,index) in data" :key="index" @click="select(item)">
          <p>{{getName(item)}}</p>
          <p>
            <i class="iconfont icon-xuanzhong" v-if="getValue(item) == value"></i>
            <i class="iconfont icon-weixuanzhong" v-else></i>
          </p>
        </li>
      </ul>
      <div class="popup_btn" @click="$emit('popupVisibleChange',false)">
        <span>关闭</span>
      </div>
    </div>
  </div>
</template>
<script>
function getValueByPath(obj, path) {
  let keys = path.split(".");
  let value = obj;
  keys.some(key => {
    if (!value) return true;
    value = value[key];
  });
  return value;
}

export default {
  props: {
    title: {
      type: String
    },
    nameKey: {
      type: String,
      default: "name"
    },
    valueKey: {
      type: String,
      default: "value"
    },
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {}
  },
  filters: {
    name(name) {
      if (name instanceof Object) {
        return name[this.nameKey] || null;
      } else {
        return name;
      }
    }
  },
  data() {
    return {
      isShowA: true,
      isShowB: false,
      popup: true
    };
  },
  methods: {
    showpopup: function() {
      this.$emit("popEvent", false);
    },
    getName(item) {
      if (item instanceof Object) {
        return getValueByPath(item, this.nameKey) || null;
      } else {
        return item;
      }
    },
    getValue(item) {
      if (item instanceof Object) {
        return getValueByPath(item, this.valueKey) || null;
      } else {
        return item;
      }
    },
    select(item) {
      let value = this.getValue(item);
      let oldValue = this.value;

      this.$emit("input", value);

      if (value != oldValue) {
        this.$emit("select", item);
      }

      this.$emit("popupVisibleChange", false);
    }
  },
  created() {}
};
</script>

