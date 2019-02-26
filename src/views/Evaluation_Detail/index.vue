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
  width: 100%;
  height: 3rem;
  margin: auto;
  padding: 0.03rem 0;
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
  margin-top: 0.1rem;
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
.iconfont {
  padding-right: 0.05rem;
}
.detail_btn {
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  // display: none;
}
.detail_btn button {
  border: 1px solid #cccccc47;
  padding: 0.15rem;
  width: 50%;
  background: #fff;
}
.evaluation_nother {
  margin-top: 0.1rem;
  background: #fff;
  padding: 0 0.1rem 0.5rem 0.1rem;
}
.evaluation_nother_con {
  display: flex;
  align-items: flex-start;
  padding: 0.1rem 0;
}
.evaluation_nother_con img {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
}
.evaluation_nother_con ul {
  padding-left: 0.1rem;
  width: 82%;
}
.evaluation_nother_con ul li:first-of-type {
  font-weight: 600;
}
.evaluation_nother_con ul li:nth-child(2) span:first-of-type {
  color: #999;
  font-size: 0.12rem;
}
.evaluation_nother_con ul li:nth-child(2) span:last-of-type {
  color: #3a73d2;
  font-size: 0.12rem;
}
</style>
<template>
  <div class="record-page">
    <c-header :title="'我的评价'"></c-header>
    <div class="c-page-body header-pd">
      <div class="evaluate" v-for="(item,index) in item" :key="index">
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
      </div>
      <div class="evaluation_nother">
        <p style="border-bottom: 1px solid #cccccc52;padding: 0.1rem 0;">
          <i class="iconfont icon-comment_light" style="color:#3A73D2"></i>
          全部评论(
          <span>{{othder_item.length}}</span>)
        </p>
        <p style="padding:0.5rem;text-align:center;color:#ccc;" v-show="shopdata">沙发还空着，快来抢吧~</p>
        <div class="evaluation_nother_con" v-for="(val,index) in othder_item" :key="index" >
          <img src="http://img4.imgtn.bdimg.com/it/u=283021115,1881290219&fm=26&gp=0.jpg">
          <ul>
            <li>{{val.name}}</li>
            <li>
              <span>{{val.time}}</span>
              <span @click="delete_evalue()">删除</span>
            </li>
            <li>{{val.txt}}</li>
          </ul>
          <p>
            <i class="iconfont icon-appreciate_light"></i>赞
          </p>
        </div>
      </div>
      <div class="detail_btn">
        <button>
          <i class="iconfont icon-comment_light"></i>评论
        </button>
        <button>
          <i class="iconfont icon-appreciate_light"></i>点赞
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        shopdata:false,
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
        }
      ],
      othder_item: [
        {
          name: "咿呀呦",
          img:
            "http://img4.imgtn.bdimg.com/it/u=283021115,1881290219&fm=26&gp=0.jpg",
          time: "21分钟之前",
          txt: "我们11111"
        },
        {
          name: "咿呀呦",
          img:
            "http://img4.imgtn.bdimg.com/it/u=283021115,1881290219&fm=26&gp=0.jpg",
          time: "21分钟之前",
          txt: "我们11111"
        },
        {
          name: "咿呀呦",
          img:
            "http://img4.imgtn.bdimg.com/it/u=283021115,1881290219&fm=26&gp=0.jpg",
          time: "21分钟之前",
          txt: "我们11111"
        },
        {
          name: "咿呀呦",
          img:
            "http://img4.imgtn.bdimg.com/it/u=283021115,1881290219&fm=26&gp=0.jpg",
          time: "21分钟之前",
          txt: "我们11111"
        }
      ]
    };
  },
  methods: {
    iscolor(item) {
      item.iscolor = item.iscolor == 0 ? 1 : 0;
    },
    delete_evalue(){

    },
    itemdata(){
      console.log("lengh"+this.othder_item.length)
      if (this.othder_item.length == 0 || !this.othder_item) {
          this.shopdata = true;
        } else {
          this.shopdata = false;
        }
    }
  },
  created() {
    this.itemdata();
  }
};
</script>

