<style lang="scss" scoped>
@import "~@/css/var";
.c-page-body {
  background: #f3f3f3;
}
.record {
  background: #fff;
  padding: 0 0.1rem;
}
ul li:first-of-type{
    color: #000;
}
ul li:last-of-type {
  color: #999;
    font-size: 12px;
}
.record_ul {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
  padding: 0.1rem 0;
}
.recharge_type {
//   background: #09bb07;
  display: inline-block;
  padding: 0 0.05rem;
  border-radius: 0.03rem;
}
.recharge_type span{
    font-size: 14px;
}
</style>
<template>
  <div class="record-page">
    <c-header :title="'充值记录'"></c-header>
    <div class="c-page-body header-pd">
      <div class="record">
        <ul class="record_ul">
          <li style="width:87%">
            <ul>
              <li>
                <span>充值金额:</span>
                <span>0.05</span>
                <span>元</span>
              </li>
              <li>
                <span>2019-01-28</span>
                <span>15:22</span>
              </li>
            </ul>
          </li>
          <li style="width:13%;text-align:center;" class="recharge_type">
              <span style="color:#09bb07;">成功</span>
          </li>
        </ul>
        <!--  -->
        <ul class="record_ul">
          <li style="width:87%">
            <ul>
              <li>
                <span>充值金额:</span>
                <span>0.05</span>
                <span>元</span>
              </li>
              <li>
                <span>2019-01-28</span>
                <span>15:22</span>
              </li>
            </ul>
          </li>
          <li style="width:13%;text-align:center;" class="recharge_type">
              <span style="color:#09bb07;">成功</span>
          </li>
        </ul>
        <!--  -->
         <!--  -->
        <ul class="record_ul">
          <li style="width:87%">
            <ul>
              <li>
                <span>充值金额:</span>
                <span>0.05</span>
                <span>元</span>
              </li>
              <li>
                <span>2019-01-28</span>
                <span>15:22</span>
              </li>
            </ul>
          </li>
          <li style="width:13%;text-align:center;" class="recharge_type">
              <span style="color:#f84a66;">失败</span>
          </li>
        </ul>
        <!--  -->
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

