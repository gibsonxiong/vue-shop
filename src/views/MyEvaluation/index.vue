<style lang="scss" scoped>
@import "~@/css/var";
.evaluate {
  background: #fff;
  padding: 0.1rem;
  margin-top: 0.1rem;
}
.evaluate_t img {
  width: 0.35rem;
  border-radius: 50%;
}
.evaluate span {
  padding-left: 0.05rem;
}
.evaluate_txt {
  padding: 0.1rem 0;
}
.eva_txt_img {
  width: 33.3%;
  height: 1rem;
  margin: auto;
  padding: 0 0.03rem;
}
img {
  object-fit: cover;
}
.ccc {
  color: #ccc;
}
.primary {
  color: $color-primary;
}
.goodsitem {
  background: #f8f8f8;
  display: flex;
  margin-top:0.1rem ;

}
.goodsitem img {
  width: 0.7rem;
  height: 0.7rem;
}
.goodsitem ul li:first-of-type {
  width: 2.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 0.4rem;

}
.goodsitem ul {
  padding: 0.05rem;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'我的评价'"></c-header>
    <div class="c-page-body header-pd">
      <div class="evaluate" v-for="(item,index) in item" :key="index"  @click="$router.push('/evaluation_detail')">
        <div class="evaluate_t" style="display:flex;align-items: center;">
          <img :src="item.header">
          <span>{{item.uname}}</span>
        </div>
        <p style="color:#999;">
          <span>{{item.createTime}}</span>
          <span>颜色分类：{{item.colorType}}</span>
        </p>
        <p class="evaluate_txt">{{item.txt}}</p>
        <img v-for="(txt_img,index) in txt_img" :key="index" class="eva_txt_img" :src="txt_img.img">
        <div class="goodsitem">
          <img :src="item.goodsImg">
          <ul>
            <li>{{item.goodsName}}</li>
            <li>￥{{item.goodsMoney}}</li>
          </ul>
        </div>
        <p style="text-align:right;padding:0.05rem 0;">
          <span
            :class="{ccc:item.iscolor==0,primary:item.iscolor==1}"
            @click="iscolor(item)"
          >{{item.xin}}</span>
          <span class="ccc">0</span>
        </p>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt_img: [
        { img: "http://pic25.photophoto.cn/20121025/0035035954531961_b.jpg" },
        {
          img:
            "http://img02.fumu.com/data/attachment/album/200912/26/21158_1261838181cdba.jpg"
        },
        {
          img:
            "http://img3.imgtn.bdimg.com/it/u=2061381807,3851153182&fm=26&gp=0.jpg"
        }
      ],
      item: [
        {
          header:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549866693683&di=2809ed20f7353ea896749a31db949739&imgtype=0&src=http%3A%2F%2Fpic41.photophoto.cn%2F20161129%2F0005018388660581_b.jpg",
          uname: "mimimiimi1",
          txt:
            "摸料柔软，透气摸着特别舒服，面料柔，透气摸着特别舒服，面料柔软，透气摸着特别舒服，面料柔软，透气摸着特别舒服，面料柔软，透气",
          xin: "❤",
          iscolor: 0,
          createTime: "2018-10-22",
          colorType: "白色",
          goodsImg:
            "http://uploads.sundxs.com/allimg/1710/43-1G009235505-50.jpg",
          goodsName: "暖手宝充电宝两用USB移动电源女随身暖手神器mini可爱防爆",
          goodsMoney: "196.00"
        },
        {
          header:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549866693683&di=2809ed20f7353ea896749a31db949739&imgtype=0&src=http%3A%2F%2Fpic41.photophoto.cn%2F20161129%2F0005018388660581_b.jpg",
          uname: "mimimiimi2",
          txt:
            "摸着特别舒服，面料柔软，透气摸着特别舒服，面料柔，透气摸着特别舒服，面着特别舒服，面料柔软，透气摸着特别舒服，面料柔软，透气",
          xin: "❤",
          iscolor: 0,
          createTime: "2018-10-22",
          colorType: "白色",
          goodsImg:
            "http://uploads.sundxs.com/allimg/1710/43-1G009235505-50.jpg",
          goodsName: "暖手宝充电宝两用USB移动电源女随身暖手神器mini可爱防爆",
          goodsMoney: "196.00"
        },
        {
          header:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549866693683&di=2809ed20f7353ea896749a31db949739&imgtype=0&src=http%3A%2F%2Fpic41.photophoto.cn%2F20161129%2F0005018388660581_b.jpg",
          uname: "mimimiimi3",
          txt:
            "摸着特别舒服，面料柔软，透气摸着特别舒服柔，透气摸着特别舒服，面料柔软，透气摸着特别舒服，面料柔软，透气摸着特别舒服，面料柔软，透气",
          xin: "❤",
          iscolor: 0,
          createTime: "2018-10-22",
          colorType: "白色",
          goodsImg:
            "http://uploads.sundxs.com/allimg/1710/43-1G009235505-50.jpg",
          goodsName: "暖手宝充电宝两用USB移动电源女随身暖手神器mini可爱防爆",
          goodsMoney: "196.00"
        }
      ]
    };
  },
  methods: {
    iscolor(item) {
      item.iscolor = item.iscolor == 0 ? 1 : 0;
    }
  },
  created() {
    console.log(this.$route.params);
  }
};
</script>

