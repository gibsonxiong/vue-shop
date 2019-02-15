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
input {
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
          <img src="http://img5.imgtn.bdimg.com/it/u=4131357342,2654337999&fm=200&gp=0.jpg">
          <ul>
            <li>康复电卷发棒女答卷神器懒人自动陶瓷刘海烫发器网红款小号不伤发</li>
            <li>
              <span>颜色分类：</span>
              <span>白色28mm</span>
            </li>
          </ul>
        </div>
        <div class="refund_two"  @click="to_popup">
          <p>货物状态</p>
          <p>
            <span>请选择</span>
            <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
              <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
            </span>
          </p>
        </div>
        <div class="refund_three" style="border-top: 1px solid #f4f4f4;">
          <p>退款原因</p>
          <p>
            <span>请选择</span>
            <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
              <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
            </span>
          </p>
        </div>
        <div class="refund_four">退款金额：
          <span>￥</span>
          <span>59.30</span>
        </div>
        <p class="refund_toast">最多￥159.00，含发货邮费￥0.00</p>
        <div class="refund_five">
          退款说明：
          <input placeholder="选填">
        </div>
        <div class="refund_six">
          <p style="padding:0 0 0.1rem 0.05rem;">上传凭证</p>
          <ul class="img_ul">
            <li>
              <!-- <input type="file" name="file" id="upfile" class="file"> -->
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
        <c-popup :popupShow="show_popup" @popEvent="popEvent"></c-popup>
        <div class="refund_seven">
          <p>提交</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      imgs: [],
      imgs_file: [],
      file_show: true,
      show_popup: false
    };
  },
  methods: {
    to_popup() {
      this.show_popup = true;
    },
    popEvent(data) {
      this.show_popup = data;
    },
    img_del(indexof) {
      this.imgs.splice(indexof, 1);
      this.imgs_file.splice(indexof, 1);
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

