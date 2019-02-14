<style lang="scss" scoped>
@import "~@/css/var";
.remark_lable,
textarea,
.img_ul {
  background: #fff;
  padding: 0.1rem;
}
.remark_lable {
  width: 100%;
  text-align: center;
  font-size: 0.15rem;
}
.remark_img {
  margin-top: 0.1rem;
  background: #fff;
}
textarea {
  width: 100%;
  border: 0;
  margin-top: 0.1rem;
  letter-spacing: 0.005rem;
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
i {
  font-size: 0.25rem;
}
.star {
  font-size: 0;
  padding: 0.1rem;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
  width: 0.6rem;
  height: 0.2rem;
  margin-left: 0.1rem;
  background-size: 100%;
}
.star-item.on {
  background-image: url(~@/assets/star-on.png);
  width: 5%;
}
.star-item.half {
  background-image: url(~@/assets/star-half.png);
  width: 5%;
}
.star-item.off {
  background-image: url(~@/assets/star-off.png);
  width: 5%;
}
ul {
  text-align: center;
  background: #fff;
}
.star_num {
  background: #fff;
  text-align: center;
  padding: 0.1rem;
  color: #ff9130;
}
.feedback_add_img{
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
.img_del{
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
</style>
<template>
  <div class="record-page">
    <c-header :title="'评价'"></c-header>
    <div class="c-page-body header-pd">
      <div class="remark">
        <p class="remark_lable">商品描述</p>
        <!-- star -->
        <!-- <img src="~@/assets/star-off.png"/> -->
        <ul class="star">
          <li
            v-for="(itemClass,index) in itemClasses"
            :key="index"
            :class="itemClass"
            class="star-item"
            @click="stars(index)"
            track-by="index"
          ></li>
          <!--性能优化 track-by 数据不改变时不会重新渲染-->
        </ul>
        <!-- <p class="star_num" v-if="score==1">非常差</p>
            <p class="star_num" v-if="score==2">差</p>
            <p class="star_num" v-if="score==3">一般</p>
            <p class="star_num" v-if="score==4">好</p>
        <p class="star_num" v-if="score==5">非常好</p>-->
        <p class="star_num">{{score | score}}</p>
        <div class="remark_img">
          <textarea maxlength="200" rows="5" placeholder="宝贝满足您的期待吗？说说它的优点和美中不足的地方吧"></textarea>
          <ul class="img_ul">
            <li>
              <!-- <input type="file" name="file" id="upfile" class="file"> -->
              <!--上传图片  -->
              <div class="feedback_add_img">
                <div class="img_box" v-for="(val,index) in imgs" :key="index">
                  <i class="img_del iconfont icon-roundclosefill" @click="img_del(index)"></i>
                  <img :src="val">
                </div>
                <div class="img_box" v-if="imgs_file.length < 6">
                  <div class="remark_add">
                    <i id="portrait" class="iconfont icon-camera_light"></i>
                    <p>添加图片</p>
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
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      score: 0,
      imgs: [],
      imgs_file: [],
      file_show: true
    };
  },
  filters: {
    score(val) {
      return (
        {
          "1": "非常差",
          "2": "差",
          "3": "一般",
          "4": "好",
          "5": "非常好"
        }[val] || ""
      );
    }
  },
  computed: {
    //计算属性
    itemClasses() {
      let result = []; // 返回的是一个数组,用来遍历输出星星
      let score = Math.floor(this.score * 2) / 2; // 计算所有星星的数量
      let hasDecimal = score % 1 !== 0; // 非整数星星判断
      let integer = Math.floor(score); // 整数星星判断
      for (let i = 0; i < integer; i++) {
        // 整数星星使用on
        result.push("on"); // 一个整数星星就push一个CLS_ON到数组
      }
      if (hasDecimal) {
        // 非整数星星使用half
        result.push("half"); // 类似
      }
      while (result.length < 5) {
        // 余下的用无星星补全,使用off
        result.push("off");
      }
      return result;
    }
  },
  methods: {
    stars: function(index) {
      this.score = index + 1;
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
        if (i >= 6) {
         Toast('最多可上传6张图片');
          return;
        } else {
          _this.imgs_file.push(file[i]);
          if (_this.imgs_file.length >= 6) {
            _this.imgs_file = _this.imgs_file.slice(0, 6);
            _this.file_show = false;
          }
          if (window.FileReader) {
            var fr = new FileReader();
            fr.onloadend = function(e) {
              if (_this.imgs.length >= 6) {
                _this.imgs = _this.imgs.slice(0, 6);
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

