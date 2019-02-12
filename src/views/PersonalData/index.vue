<style lang="scss" scoped>
@import "~@/css/var";
.personaldata {
  background: #fff;
  padding:0 0.1rem;
}
.header_ing img {
  width: 0.35rem;
  border-radius: 50%;
}
.header_ing span{
    color: #999;
}
li{
    border-bottom: 1px solid #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.1rem 0;
}
</style>
<template>
  <div class="record-page">
    <c-header :title="'个人资料'"></c-header>
    <div class="c-page-body header-pd">
      <div class="personaldata">
        <ul>
          <li>
            <p>头像</p>
            <p class="header_ing">
              <img src="http://img0.imgtn.bdimg.com/it/u=753003090,3267473532&fm=26&gp=0.jpg">
                <span data-v-75dcebf2="" style="transform: rotateZ(180deg); display: inline-block;">
                  <i data-v-75dcebf2="" class="iconfont icon-back_light" style="font-size: 14px;"></i>
                </span>
            </p>
          </li>
          <li>
            <p>昵称</p>
            <p class="header_ing">
                <span>熊大</span>
                <span data-v-75dcebf2="" style="transform: rotateZ(180deg); display: inline-block;">
                  <i data-v-75dcebf2="" class="iconfont icon-back_light" style="font-size: 14px;"></i>
                </span>
            </p>
          </li>
          <li>
            <p>性别</p>
            <p class="header_ing">
                <span>男</span>
                <span data-v-75dcebf2="" style="transform: rotateZ(180deg); display: inline-block;">
                  <i data-v-75dcebf2="" class="iconfont icon-back_light" style="font-size: 14px;"></i>
                </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

