<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";
input {
  border: 0;
}

ul {
  background: #fff;
  padding: 0 0.1rem;
}
li {
  @include flexbox();
  padding: 0.15rem 0;
  @include border-bottom();

  .flex-main{
    flex: 1;
  }
}
li span:first-of-type {
  width: 25%;
  display: inline-block;
}


</style>
<style lang="scss">
@import "~@/css/var";
.mint-switch-input:checked + .mint-switch-core {
  border-color: $color-primary !important;
  background-color: $color-primary !important;
}
.mint-switch-core {
  width: 44px;
  height: 24px !important;
}
.mint-switch-core::before {
  height: 22px;
  width: 42px;
}
.mint-switch-core::after {
  height: 22px;
  width: 22px;
}
</style>

<template>
  <div class="address-detail-page page">
    <c-header :title="title"></c-header>
    <div class="c-page-body header-pd">
      <ul>
        <li>
          <span>收货人</span>
          <input class="flex-main" v-model="model.name" placeholder="请填写收货人姓名">
        </li>
        <li>
          <span>联系电话</span>
          <input class="flex-main" v-model="model.phone" placeholder="请填写联系电话">
        </li>
        <li @click="pickerVisible = true">
          <span>所在地区</span>
          <div class="c-input-mask flex-main">
            <input  v-model="address" placeholder="请选择所在地区" readonly="readonly">
          </div>
          <!-- <span
            style="    display: inline-block;width: 67%;"
          >
          {{model.province}} {{model.city}} {{model.area}}</span> -->
          <span style="transform: rotateZ(180deg); display: inline-block;">
            <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
          </span>
        </li>
        <!-- <li>
            <span>所在街道</span>
            <input placeholder="所在街道"/>
        </li>-->
        <li>
          <span>详细地址</span>
          <input class="flex-main" v-model="model.detailAddr" placeholder="街道，楼牌号等">
        </li>
        <li style="display:flex;">
          <p style="width:90%">设置默认地址</p>
          <mt-switch v-model="model.isDefault"></mt-switch>
        </li>
      </ul>
      <div style="width:100%;padding:0.2rem;">
        <c-button @click="submit">保存地址</c-button>
      </div>
      <c-region-picker
        :visible="pickerVisible"
        @maskClick="pickerVisible = false"
        @input="handleRegionChange"
      ></c-region-picker>
    </div>
  </div>
</template>

<script>
import services from "@/services";
export default {
  data() {
    return {
      addressId: "",
      title: "",

      model: {
        name: "",
        phone: "",
        provinceId: "",
        province: "",
        cityId: "",
        city: "",
        areaId: "",
        area: "",
        detailAddr: "",
        isDefault: false
      },
      pickerVisible: false
    };
  },
  computed:{
    address(){
      if(!this.model.province && !this.model.province && !this.model.province) return '';
      return `${this.model.province} ${this.model.city} ${this.model.area}`;
    }
  },
  methods: {
    async fetchAddressInfo() {
      try {
        this.$showLoading();
        let res = await services.fetchAddressInfo({
          addressId: this.addressId
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        Object.assign(this.model, res.data);
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    async submit() {
      try {
        this.$showLoading();
        let res;
        if (this.addressId) {
          res = await services.updateAddress(this.addressId, this.model);
        } else {
          res = await services.addAddress(this.model);
        }

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.$toast(res.message);

        setTimeout(() => {
          this.$router.back();
        }, 1000);
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    handleRegionChange(values) {
      this.model.provinceId = values[0].id;
      this.model.province = values[0].name;
      this.model.cityId = values[1].id;
      this.model.city = values[1].name;
      this.model.areaId = values[2].id;
      this.model.area = values[2].name;
      this.pickerVisible = false;
    }
  },
  created() {
    this.addressId = this.$route.query.addressId;

    if (this.addressId) {
      this.title = "修改地址";
      this.fetchAddressInfo();
    } else {
      this.title = "新建地址";
    }
  }
};
</script>
