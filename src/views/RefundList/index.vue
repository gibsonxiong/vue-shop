<style lang="scss" scoped>
@import "~@/css/var";
li:first-of-type{
    margin: 0;
}
li {
  list-style: none;
  margin-top: 0.1rem; background: #fff;
  -moz-box-shadow:0px 2px 6px #ccc; -webkit-box-shadow:0px 2px 6px #ccc; box-shadow:0px 2px 6px #ccc;
}
.see_de {
  border: 1px solid #ea4f15;
  color: #ea4f15;
  padding: 0.02rem 0.04rem;
  -moz-box-shadow:0px 21px 0px #ea4f15; -webkit-box-shadow:0px 1px 0px #ea4f15; box-shadow:0px 1px 0px #ea4f15;
}
.icon-tuikuan {
  color: #ea4f15;
}
.li_one {
  width: 95%;
  margin: auto;
  padding: 0.1rem 0px;
}
.icon-shoplight,
.icon-tuikuan {
  padding-right: 0.05rem;
}
.li_two {
  width: 100%;
  margin: auto;
  padding: 0.1rem;
  display: flex;
  border-bottom: 1px solid rgb(244, 244, 244);
  background: #f8f8f8;
}
img {
  width: 0.7rem;
  height: 0.7rem;
}
.li_three {
  width: 100%;
  margin: auto;
  padding: 0.1rem;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.li_four {
  width: 95%;
  margin: auto;
  padding: 0.1rem 0px;
  display: flex;
  justify-content: flex-end;
}
</style>
<template>
  <div class="record-page">
    <c-header :title="'退款/售后'"></c-header>
    <div class="c-page-body header-pd">
      <div class="refundlist">
        <ul>
          <li v-for="(val,index) in item" :key="index">
            <div class="li_one" style>
              <i class="iconfont icon-shoplight" style></i>
              <span>{{val.shopname}}</span>
              <span style="transform: rotateZ(180deg); display: inline-block;">
                <i class="iconfont icon-back_light" style="font-size: 14px;"></i>
              </span>
            </div>
            <div class="li_two" style>
              <div style="width: 20%;">
                <img
                  :src="val.refund_img"
                  alt
                  style
                >
              </div>
              <div style="width: 65%; padding: 0px 0.1rem;">
                <span>{{val.goodsname}}</span>
                <p style="color: rgb(153, 153, 153); font-size: 12px;">
                    颜色分类：<span>{{val.color}}</span>
                    尺码<span>{{val.size}}</span>
                </p>
              </div>
              <div style="width: 15%; text-align: right;">
                <div style="color: rgb(153, 153, 153); font-size: 12px;">
                  <span>×</span>
                  <span>{{val.num}}</span>
                </div>
              </div>
            </div>
            <div class="li_three">
              <p style="display: flex;align-items: center;">
                <i class="iconfont icon-tuikuan"></i>
                <span style="padding-right:0.05rem">{{val.type1}}</span>
                <span>{{val.type2}}</span>
              </p>
            </div>
            <div class="li_four">
              <span class="see_de" @click="$router.push('/refund_detail')">查看详情</span>
            </div>
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
      item:[
        {shopname:"母婴用品商城",refund_img:"http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
          goodsname:'商品名称1111',color:'白色',size:'s',num:2,type1:"仅退款",type2:'退款成功'
        },
          {shopname:"母婴用品商城",refund_img:"http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
          goodsname:'商品名称1111',color:'白色',size:'s',num:2,type1:"仅退款",type2:'退款成功'
        },
          {shopname:"母婴用品商城",refund_img:"http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
          goodsname:'商品名称1111',color:'白色',size:'s',num:2,type1:"仅退款",type2:'退款成功'
        },
          {shopname:"母婴用品商城",refund_img:"http://pic.51yuansu.com/pic3/cover/01/03/63/5900afd12fd8d_610.jpg",
          goodsname:'商品名称1111',color:'白色',size:'s',num:2,type1:"仅退款",type2:'退款成功'
        }
      ]
    };
  },
  methods: {},
  created() {}
};
</script>

