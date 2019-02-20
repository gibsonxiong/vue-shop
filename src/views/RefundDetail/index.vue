<style lang="scss" scoped>
@import "~@/css/var";
.refund_detail_one {
  padding: 0.2rem;
  background: $color-primary;
  color: #fff;
}
.refund_detail_two {
  background: #fff;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.refund_detail_two p:last-of-type {
  color: $color-primary;
}
.refund_detail_three {
  margin-top: 0.1rem;
  background: #fff;
//   padding: 0.1rem;
}
.refund_detail_three_label{
     padding: 0.1rem;
}
.refund_detail_three div{
    padding: 0.1rem;
    display: flex;
    background: #f5f5f5;
}
.refund_detail_three ul{
    padding:0 0.1rem;
}
.refund_detail_three ul li:last-of-type{
    color: #999;
    font-size: 0.12rem;
    padding: 0.05rem 0;
}
img{
    width: 0.7rem;
    height: 0.7rem;
    object-fit: cover;
}
.refund_detail_four{
    background:#fff;
    padding: 0.1rem; 
}
.refund_detail_four p{
    padding: 0.025rem 0;
    color: #999;
    font-size: 0.12rem;
}
</style>
<template>
  <div class="record-page">
    <c-header :title="'退款详情'"></c-header>
    <div class="c-page-body header-pd">
      <div class="refund_detail">
        <div class="refund_detail_one">
          <p>{{item.refund_type}}</p>
          <p>
            <span>{{item.date}}</span>
            <span>{{item.time}}</span>
          </p>
        </div>
        <div class="refund_detail_two">
          <p>退款总金额</p>
          <p>
            <span>￥</span>
            <span>{{item.moeny}}</span>
          </p>
        </div>
        <div class="refund_detail_three">
          <p class="refund_detail_three_label">退款信息</p>
          <div>
            <img
              :src="item.img"
            >
            <ul>
              <li>
                <p>{{item.name}}</p>
              </li>
              <li>
                <p>
                  颜色分类：
                  <span>{{item.color}}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="refund_detail_four">
            <p>
                <span>退款原因：</span>
                <span>{{item.cause}}</span>
            </p>
             <p>
                <span>退款金额：</span>
                <span>￥</span>
                <span>{{item.no_num}}</span>
            </p>
             <p>
                <span>申请件数：</span>
                <span>{{item.sum}}</span>
            </p>
            <p>
                <span>申请时间：</span>
                <span>{{item.createdate}}</span>
                <span>{{item.createtime}}</span>
            </p>
            <p>
                <span>退款编号：</span>
                <span>{{item.id}}</span>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        item:{refund_type:'急速退款，天猫先行垫付，退款成功',date:"2019年09月30日",time:'09:50',moeny:18.50
        ,img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550123135563&di=81f7c2a9f3b5db3e37428c581af2b100&imgtype=0&src=http%3A%2F%2Fimg001.hc360.cn%2Fy6%2FM04%2F18%2F8D%2FwKhQtFYzPt-ETUWRAAAAAFdz2uk773.jpg..300x300.jpg'
        ,name:'镜前灯LED免打孔浴室卫生间化妆灯镜钉壁灯北欧简约风现代镜柜灯',color:'升级40厘米LED',
        cause:'升级40厘米LED',no_num:18.20,sum:12,createdate:"2018-02-26",createtime:'23:20',id:1184053946759148
        }
    };
  },
  methods: {},
  created() {}
};
</script>

