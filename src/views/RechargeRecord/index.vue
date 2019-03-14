<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";

.record {
  background: #fff;
  padding: 0 0.1rem;
}
ul li:first-of-type {
  color: #000;
}
ul li:last-of-type {
  color: #999;
  font-size: 12px;
}
.record_ul {
  display: flex;
  align-items: center;
  // border-bottom: 1px solid #f4f4f4;
  @include border-bottom();
  padding: 0.1rem 0;
}
.recharge_type {
  //   background: #09bb07;
  display: inline-block;
  padding: 0 0.05rem;
  border-radius: 0.03rem;
}
.recharge_type span {
  font-size: 14px;
}
.primary{
  color: $color-primary;
}
.green{
  color: green;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'充值记录'"></c-header>
    <div class="c-page-body header-pd">
      <div class="record">
        <ul class="record_ul" v-for="(val,index) in recharge_item" :key="index">
          <li style="width:87%">
            <ul>
              <li>
                <span>充值金额:</span>
                <span>{{val.money}}</span>
                <span>元</span>
              </li>
              <li>
                <span>{{val.date}}</span>
                <span>{{val.time}}</span>
              </li>
            </ul>
          </li>
          <li style="width:13%;text-align:center;" class="recharge_type">
            <span :class="{green:val.recharge_id==2,primary:val.recharge_id==1}">{{val.recharge_id | recharge_id }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recharge_item: [
        { money: 20.0, date: "2019-08-30", time: "15:22", recharge_id: 1 },
        { money: 10.0, date: "2019-08-10", time: "15:22", recharge_id: 1 },
        { money: 3340.0, date: "2019-08-09", time: "15:22", recharge_id: 2 },
        ]
    };
  },
  filters:{
    recharge_id(val){
      return ({
            "1": "失败",
            "2": "成功"
          })[val] || '';
    }
  },
  methods: {

  },
  created() {}
};
</script>

