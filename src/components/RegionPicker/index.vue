<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.c-region-picker {
  .mask {
    @include mask(100);
  }
  .inner {
    position: absolute;
    z-index: 110;
    background-color: #fff;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
.header {
  text-align: right;
  padding: 0.1rem;
  button {
    border: 0;
    background: #fff;
    padding: 0.05rem;
    border-radius: 0.1rem;
  }
}

.body{
  padding: 0.2rem 0.05rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0.5;
  transform: translate3d(0, 100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="c-region-picker">
    <transition name="fade">
      <div v-show="visible" class="mask" @click="$emit('maskClick')"></div>
    </transition>
    <transition name="slide">
      <div v-show="visible" class="inner">
        <div class="header">
          <button @click="confirm">完成</button>
        </div>
        <div class="body">
          <mt-picker ref="picker" :slots="slots" @change="onValuesChange" value-key="name"></mt-picker>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import services from "@/services";

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      regionList: [],
      slots: [
        {
          flex: 1,
          values: [],
          textAlign: "center"
        },
        {
          divider: true,
          content: "-"
        },
        {
          flex: 1,
          values: [],
          textAlign: "center"
        },
        {
          divider: true,
          content: "-"
        },
        {
          flex: 1,
          values: [],
          textAlign: "center"
        }
      ],
      cache: {}
    };
  },
  computed: {},
  methods: {
    async fetchRegion() {
      try {
        let res = await services.fetchRegion();

        if (services.$isError(res)) throw new Error(res.message);

        this.regionList = res.data;
        let provList = this.findProvList();

        this.slots[0].values = provList;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    findProvList() {
      return this.regionList.filter(item => !item.parentId);
    },
    findCityList(provId) {
      let cityList;
      if (!(cityList = this.cache[provId])) {
        cityList = this.cache[provId] = this.regionList.filter(
          item => item.parentId == provId
        );
      }
      return cityList;
    },
    findAreaList(cityId) {
      let areaList;
      if (!(areaList = this.cache[cityId])) {
        areaList = this.cache[cityId] = this.regionList.filter(
          item => item.parentId == cityId
        );
      }
      return areaList;
    },
    onValuesChange(picker, values) {
      let cityList = values[0] ? this.findCityList(values[0].id) : [];
      let areaList = values[1] ? this.findAreaList(values[1].id) : [];

      picker.setSlotValues(1, cityList);
      picker.setSlotValues(2, areaList);
    },
    confirm() {
      let values = this.$refs.picker.getValues();
      this.$emit("input", values);
    }
  },
  created() {
    this.fetchRegion();
  }
};
</script>
