<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.c-region-picker {
  .mask{
    @include mask(100);
  }
  .inner {
    position: fixed;
    z-index:110;
    background-color: #fff;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
.header{
  text-align: right;
  padding: 0.1rem;
   button{
  border: 0;
  background: #fff;
  padding: 0.05rem;
  border-radius: 0.1rem;
}
}
</style>

<template>
  <div class="c-region-picker">
    <div class="mask" @click="$emit('maskClick')"></div>
    <div class="inner">
      <div class="header">
        <button @click="confirm">完成</button>
      </div>
      <mt-picker ref="picker" :slots="slots" @change="onValuesChange" value-key="name"></mt-picker>
    </div>
  </div>
</template>


<script>
import services from '@/services';

export default {
  props: {},
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
          content: "-",
        },
        {
          flex: 1,
          values: [],
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
        },
        {
          flex: 1,
          values: [],
          textAlign: "center"
        }
      ]
    };
  },
  computed:{

  },
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
    findProvList(){
      return this.regionList.filter(item=>!item.parentId);
    },
    findCityList(provId){
      return this.regionList.filter(item=>item.parentId == provId);
    },
    findAreaList(cityId){
      return this.regionList.filter(item=>item.parentId == cityId);
    },
    onValuesChange(picker, values) {
      let cityList = values[0] ? this.findCityList(values[0].id) : [];
      let areaList = values[1] ? this.findAreaList(values[1].id) : [];

      picker.setSlotValues(1,cityList);
      picker.setSlotValues(2,areaList);
    },
    confirm(){
      let values = this.$refs.picker.getValues();
      this.$emit('input',values);
    }
  },
  created() {
    this.fetchRegion();
  }
};
</script>
