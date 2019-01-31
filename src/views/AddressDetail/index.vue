<style scoped lang="scss">
@import "~@/css/var";
  input{
    border: 0;
    color: #b2b2b2;
  }
  .c-page-body{
    background: #f3f3f3;
  }
  ul{
    background: #fff;
    padding:0 0.1rem;
  }
  li{
    padding: 0.1rem 0;
    border-bottom: 1px solid #f4f4f4;
  }
  li span{
    width: 20%;
    display: inline-block;
    color: #666;
  }
</style>
<style lang="scss">
@import "~@/css/var";
 .mint-switch-input:checked + .mint-switch-core{
        border-color: $color-primary !important;
    background-color: $color-primary !important;
  }
  .mint-switch-core {
    width:44px;
    height: 24px !important;
  }
  .mint-switch-core::before{
    height: 22px;
    width:42px;
  }
   .mint-switch-core::after{
    height: 22px;
    width:22px;
  }
</style>

<template>
  <div class="address-detail-page">
    <c-header :title="'新建地址'"></c-header>
    <div class="c-page-body header-pd">
        <ul>
          <li>
            <span>收货人</span>
            <input placeholder="请填写收货人姓名"/>
          </li>
          <li>
            <span>联系电话</span>
            <input placeholder="请填写联系电话"/>
          </li>
          <li>
            <span>所在地区</span>
            <input placeholder="所在地区"/> 
          </li>
          <li>
            <span>所在街道</span>
            <input placeholder="所在街道"/>
          </li>
           <li>
            <span>详细地址</span>
            <input placeholder="街道，楼牌号等"/>
          </li>
           <li style="display:flex;">
            <p style="width:90%">设置默认地址</p>
            <mt-switch ></mt-switch>
          </li>
        </ul>
        <c-button :title="'保存地址'"></c-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
  },
  created() {}
};
</script>
