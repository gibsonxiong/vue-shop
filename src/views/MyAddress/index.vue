<style scoped lang="scss">
@import "~@/css/var";
.c-page-body {
  background: #f3f3f3;
}
.my-ddress_con {
  padding: 0.1rem;
  background: #fff;
  margin-top: 0.05rem;
}
.my-ddress_con div:first-of-type {
  border-bottom: 1px solid #f4f4f4;
  padding-bottom: 0.1rem;
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
.shi_btn {
  width: 100%;
  padding: 0.1rem;
  text-align: center;
  background: $color-primary;
  color: #fff;
  position: fixed;
  bottom: 0;
}
/*复选框*/
.gcs-checkbox {
  display: none;
}
label{
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
</style>

<template>
  <div class="my-ddress-page">
    <c-header :title="'收货地址'"></c-header>
    <div class="c-page-body header-pd">
      <!--  -->
      <div class="my-ddress_con">
        <div>
          <p>
            <span>王伊</span>
            <span>18570414200</span>
          </p>
          <p>
            <span>广东省深圳市宝安区</span>
            <span>观澜街道</span>
            <span>招商观园18-6A</span>
          </p>
        </div>
        <div>
           <span>
            <input type="checkbox" id="gcs-checkbox" class="gcs-checkbox">
            <label for="gcs-checkbox"></label>
          </span>
          <p style="width:65%">设置默认</p>
          <p style="width:35%;text-align:right;">
            <i class="iconfont icon-post"></i>
            <span style="padding-right:0.1rem;">编辑</span>
            <i class="iconfont icon-delete_light"></i>
            <span>删除</span>
          </p>
        </div>
      </div>
      <div class="my-ddress_con">
        <div>
          <p>
            <span>王伊</span>
            <span>18570414200</span>
          </p>
          <p>
            <span>广东省深圳市宝安区</span>
            <span>观澜街道</span>
            <span>招商观园18-6A</span>
          </p>
        </div>
        <div>
           <span>
            <input type="checkbox" id="gcs-checkbox" class="gcs-checkbox">
            <label for="gcs-checkbox"></label>
          </span>
          <p style="width:65%">设置默认</p>
          <p style="width:35%;text-align:right;">
            <i class="iconfont icon-post"></i>
            <span style="padding-right:0.1rem;">编辑</span>
            <i class="iconfont icon-delete_light"></i>
            <span>删除</span>
          </p>
        </div>
      </div>
      <div class="my-ddress_con">
        <div>
          <p>
            <span>王伊</span>
            <span>18570414200</span>
          </p>
          <p>
            <span>广东省深圳市宝安区</span>
            <span>观澜街道</span>
            <span>招商观园18-6A</span>
          </p>
        </div>
        <div>
          <span>
            <input type="checkbox" id="gcs-checkbox" class="gcs-checkbox">
            <label for="gcs-checkbox"></label>
          </span>
          <p style="width:65%">设置默认</p>
          <p style="width:35%;text-align:right;">
            <i class="iconfont icon-post"></i>
            <span style="padding-right:0.1rem;">编辑</span>
            <i class="iconfont icon-delete_light"></i>
            <span>删除</span>
          </p>
        </div>
      </div>
      <!--  -->
      <div class="shi_btn" @click="new_address()">
        <i class="iconfont icon-add_light"></i>
        <span>新建地址</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    new_address() {
      this.$router.push("/addressdetail");
    }
  },
  created() {}
};
</script>
