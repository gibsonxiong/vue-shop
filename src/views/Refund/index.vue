<style lang="scss" scoped>
@import "~@/css/var";
.refund_one {
  display: flex;
  background: #fff;
  padding: 0.1rem;
}
.refund_one img {
  width: 0.7rem;
  height: 0.7rem;
  object-fit: cover;
}
.refund_one ul {
  padding-left: 0.1rem;
}
.refund_one ul li:last-of-type {
  color: #999;
}
.refund_two {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.refund_three {
  padding: 0.1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.refund_four {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0.1rem;
}
.refund_four span {
  color: $color-primary;
}
.refund_toast {
  color: #999;
  padding: 0.1rem;
}
.refund_five {
  background: #fff;
  padding: 0.1rem;
}
.refund_five input {
  border: 0;
  width: 75%;
}
.refund_six {
  background: #fff;
  padding: 0.1rem;
  margin-top: 0.1rem;
}
//

.feedback_add_img {
  display: flex;
  flex-wrap: wrap;
}
#file {
  width: 0.79rem;
  height: 0.79rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}
.img_box {
  width: 0.79rem;
  height: 0.79rem;
  position: relative;
  display: flex;
  margin: 0.05rem;
}
.img_del {
  position: absolute;
  font-size: 0.2rem;
  color: red;
  background: #fff;
  top: -0.13rem;
  left: -0.08rem;
  border-radius: 50%;
}
img {
  width: 100%;
  object-fit: cover;
}
.remark_add {
  width: 0.79rem;
  height: 0.79rem;
  color: #bcbcbc;
  text-align: center;
  border: 1px dashed #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.remark_add p {
  font-size: 0.12rem;
}
.refund_seven {
  color: #fff;
  background: $color-primary;
  text-align: center;
  padding: 0.15rem;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}

</style>
<template>
  <div class="record-page">
    <c-header :title="'申请退款'"></c-header>
    <div class="c-page-body header-pd">
      <div class="refund">
        <div class="refund_one">
          <img :src="item.img">
          <ul>
            <li>{{item.goodsname}}</li>
            <li>
              <span>颜色分类：</span>
              <span>{{item.color}}</span>
            </li>
          </ul>
        </div>
        <div class="refund_two" @click="to_popup(2)">
          <p>货物状态</p>
          <p>
            <span>{{shopStatus}}</span>
            <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
              <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
            </span>
          </p>
        </div>
        <div class="refund_three" style="border-top: 1px solid #f4f4f4;" @click="to_popup(1)">
          <p>退款原因</p>
          <p>
            <span>{{buyFail}}</span>
            <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
              <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
            </span>
          </p>
        </div>
        <div class="refund_four">
          退款金额：
          <span>￥</span>
          <span>{{item.money}}</span>
        </div>
        <p class="refund_toast">最多￥159.00，含发货邮费￥0.00</p>
        <div class="refund_five">
          退款说明：
          <input placeholder="选填" v-model="refund_explain">
        </div>
        <div class="refund_six">
          <p style="padding:0 0 0.1rem 0.05rem;">上传凭证</p>
          <ul class="img_ul">
            <li>
              <!--上传图片  -->
              <div class="feedback_add_img">
                <div class="img_box" v-for="(val,index) in imgs" :key="index">
                  <i class="img_del iconfont icon-roundclosefill" @click="img_del(index)"></i>
                  <img :src="val">
                </div>
                <div class="img_box" v-if="imgs_file.length < 3">
                  <div class="remark_add">
                    <i id="portrait" class="iconfont icon-camera_light"></i>
                    <p>上传凭证</p>
                    <p>(最多3张)</p>
                  </div>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    multiple
                    accept="image/*"
                    @change="file_up($event)"
                  >
                </div>
              </div>
              <!--  -->
            </li>
          </ul>
        </div>
        <c-popup :popupShow="show_popup" :popData="parentsData" :propType="propType" @popDataClick="popDataClick" @popEvent="popEvent"></c-popup>
        <div class="refund_seven" @click="refund_submit">
          <p>提交</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { log } from 'util';
export default {
  data() {
    return {
      imgs: [],
      imgs_file: [],
      refund_explain: "",
      file_show: true,
      show_popup: false,
      item: {
        img:
          "http://img5.imgtn.bdimg.com/it/u=4131357342,2654337999&fm=200&gp=0.jpg",
        goodsname:
          "康复电卷发棒女答卷神器懒人自动陶瓷刘海烫发器网红款小号不伤发",
        color: "白色28mm",
        money: 10.0
      },
      parentsData: [],
      buyFail: '请选择' ,  //退款原因
      shopStatus: '请选择' ,  //退货状态
      propType: 1,

    };
  },
  methods: {
    popDataClick(val){
      if(val.type === 1){
        this.buyFail = val.data;
      }else if(val.type === 2){
        this.shopStatus = val.data;
      }
    },
    to_popup(num) {
      this.show_popup = true;
      if (num == 1) {
        this.propType = 1;
        this.parentsData = [
          { label: "拍错/多拍/不喜欢", value: "拍错/多拍/不喜欢" },
          { label: "快递一直未送到", value: "快递一直未送到" },
          { label: "未按照约定时间发货", value: "未按照约定时间发货" },
          { label: "快递无跟踪记录", value: "快递无跟踪记录" },
          { label: "骑手送错订单", value: "骑手送错订单" },
          { label: "未按照约定时间送达", value: "未按照约定时间送达" },
          { label: "骑手提前点确认送达", value: "骑手提前点确认送达" },
          {label: "商家无法配送，联系我取消", value: "商家无法配送，联系我取消"},
          { label: "配送时间太长", value: "配送时间太长" },
          { label: "其他", value: "其他" }
        ];
      } else if (num == 2) {
        this.propType = 2;
        this.parentsData = [{ label: "暂时没有收到货物", value: "暂时没有收到货物" }];
      }
    },
    popEvent(data) {
      this.show_popup = data;
    },
    img_del(indexof) {
      this.imgs.splice(indexof, 1);
      this.imgs_file.splice(indexof, 1);
    },
    refund_submit() {
      console.log(`退款原因 ${this.buyFail}`);
      console.log(`退货状态 ${this.shopStatus}`);
      //提交
    },
    file_up(event) {
      //图片预览
      let _this = this;
      let file = event.target.files;
      for (let i = 0; i < file.length; i++) {
        if (i >= 3) {
          Toast("最多可上传3张图片");
          return;
        } else {
          _this.imgs_file.push(file[i]);
          if (_this.imgs_file.length >= 3) {
            _this.imgs_file = _this.imgs_file.slice(0, 3);
            _this.file_show = false;
          }
          if (window.FileReader) {
            var fr = new FileReader();
            fr.onloadend = function(e) {
              if (_this.imgs.length >= 3) {
                _this.imgs = _this.imgs.slice(0, 3);
              } else {
                _this.imgs.push(e.target.result);
              }
            };
            fr.readAsDataURL(file[i]);
          }
        }
      }
    }
  },
  created() {}
};
</script>

