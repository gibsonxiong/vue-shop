<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.popup_item {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
  border-bottom: 1px solid #f4f4f4;
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
</style>
<template>
  <c-wrap-popup :title="title" :visible="visible" @visibleChange="$emit('visibleChange',false)">
    <div class="popup_item" v-for="(item,index) in data" :key="index" @click="select(item)">
      <p>{{getName(item)}}</p>
      <p>
        <i class="iconfont icon-xuanzhong" v-if="getValue(item) == value"></i>
        <i class="iconfont icon-weixuanzhong" v-else></i>
      </p>
    </div>
  </c-wrap-popup>
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
  methods: {
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

      this.$emit("visibleChange", false);
    }
  },
  created() {}
};
</script>

