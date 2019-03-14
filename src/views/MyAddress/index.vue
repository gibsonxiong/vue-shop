<style scoped lang="scss">
@import "~@/css/var";
@import "~@/css/mixin";

.my-ddress_con {
  padding: 0.1rem;
  background: #fff;
  margin-top: 0.05rem;
}
.my-ddress_con div:first-of-type {
  // border-bottom: 1px solid #f4f4f4;
  @include border-bottom();
  padding-bottom: 0.12rem;
  padding-top: 0.1rem;
}
.my-ddress_con div:last-of-type {
  display: flex;
  align-items: center;
  padding-top: 0.1rem;
  color: #666;
}
.my-ddress_con div:first-of-type p:last-of-type {
  color: #666;
}

i {
  padding-right: 0.02rem;
}
.footer {
  width: 100%;
  padding: 0.15rem 0.1rem;
  text-align: center;
  background: $color-primary;
  color: #fff;
  position: absolute;
  bottom: 0;
}
/*复选框*/
.gcs-checkbox {
  display: none;
}
label {
  margin-right: 0.05rem;
}
.gcs-checkbox + label {
  background-color: white;
  border-radius: 50%;
  border: 1px solid #e7e7e7;
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  vertical-align: bottom;
  line-height: 20px;
}
.gcs-checkbox:checked + label {
  background-color: #eee;
  background: $color-primary;
}
.gcs-checkbox:checked + label:after {
  content: "\2714";
  color: white;
}

.tag-wrap {
  flex: 1;
}

.tag {
  padding: 0.01rem 0.04rem;
  background-color: #f94a92;
  color: #fff;
  border-radius: 0.02rem;
  font-size: 0.12rem;
}
</style>

<template>
  <div class="my-ddress-page page">
    <c-header :title="'收货地址'"></c-header>
    <div class="c-page-body header-pd">
      <div v-if="addrList.length > 0">
        <div
          class="my-ddress_con"
          v-for="(item,index) in addrList"
          :key="index"
          @click="select(item.id)"
        >
          <div>
            <p>
              <span>{{item.name}}</span>
              <span>{{item.phone}}</span>
            </p>
            <p>
              <span>{{item.province}}</span>
              <span>{{item.city}}</span>
              <span>{{item.area}}</span>
              <span>{{item.detailAddr}}</span>
            </p>
          </div>
          <div>
            <p class="tag-wrap">
              <span v-if="item.isDefault" class="tag">默认</span>
            </p>
            <!-- <span>
              <input type="checkbox" id="gcs-checkbox" class="gcs-checkbox">
              <label for="gcs-checkbox"></label>
            </span>
            <p style="width:65%">设置默认</p>-->
            <p style="width:35%;text-align:right;">
              <span @click.stop="updateAddr(item.id)">
                <i class="iconfont icon-post"></i>编辑
              </span>
              <span style="padding-left:0.1rem;" @click.stop="removeAddr(item.id)">
                <i class="iconfont icon-delete_light"></i>删除
              </span>
            </p>
          </div>
        </div>
      </div>
      <c-empty-hint v-else-if="!loading" icon="icon-location_light" hint="您没有收货地址哦！"></c-empty-hint>
    </div>
    <div class="footer" @click="addAddr()">
      <i class="iconfont icon-add_light"></i>
      <span>新建地址</span>
    </div>
  </div>
</template>

<script>
import services from "@/services";
import routerCachePage from "@/routerCache/page";

export default {
  mixins: [routerCachePage()],
  data() {
    return {
      isSelect: false,
      addrList: [],
      loading: false
    };
  },
  methods: {
    async fetchAddressList() {
      try {
        this.loading = true;
        this.$showLoading();
        this.addrList = [];
        let res = await services.fetchAddressList();

        if (services.$isError(res)) throw new Error(res.message);

        this.loading = false;
        this.$hideLoading();
        this.addrList = res.data;
      } catch (err) {
        this.loading = false;
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    addAddr() {
      this.$router.push("/addressdetail");
    },
    updateAddr(addressId) {
      this.$router.push({ path: "/addressdetail", query: { addressId } });
    },
    async removeAddr(addressId) {
      try {
        this.$showLoading();
        let res = await services.removeAddress({ addressId });

        if (services.$isError(res)) throw new Error(res.message);

        this.$toast(res.message);

        this.$hideLoading();
        let index = this.addrList.findIndex(item => item.id == addressId);
        this.addrList.splice(index, 1);
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    select(addressId) {
      if (!this.isSelect) return;

      this.$routerCacheEmit("selectAddress", addressId);

      this.$router.back();
    }
  },
  created() {
    this.isSelect = this.$route.query.isSelect == "1";

    this.fetchAddressList();
  }
};
</script>
