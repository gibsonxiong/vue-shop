<style lang="scss" scoped>
@import "~@/css/var";
.personaldata {
  background: #fff;
  padding: 0 0.1rem;
}
.header_ing img {
  width: 0.35rem;
  height: 0.35rem;
  object-fit: cover;
  border-radius: 50%;
}
.header_ing span {
  color: #999;
}
li {
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.header_ing {
  display: flex;
  align-items: center;
}
.hiddenInput {
  width: 0.35rem;
  height: 0.35rem;
  position: absolute;
  opacity: 0;
}
.icon-back_light {
  padding-right: 0.05rem;
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
            <div class="header_ing">
              <!--  -->
              <div class="head_img">
                <img :src="userInfo.avatar">
              </div>
              <div class="setting_right" @click.stop="uploadHeadImg">
                <div class="caption"></div>
              </div>
              <input type="file" accept="image/*" @change="handleFile" class="hiddenInput">
              <!--  -->
              <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
                <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
              </span>
            </div>
          </li>
          <li>
            <p>昵称</p>
            <p class="header_ing" @click="$router.push('/nickname')">
              <span>熊大</span>
              <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
                <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
              </span>
            </p>
          </li>
          <li>
            <p>性别</p>
            <p class="header_ing" @click="select_sex">
              <span>{{sex}}</span>
              <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
                <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
              </span>
            </p>
          </li>
        </ul>
        <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
      </div>
    </div>
  </div>
</template>
<script>
import { Actionsheet } from "mint-ui";
export default{
  data() {
    return {
      actions: [
        {
          name: "女",
         method : this.girl
        },
        {
          name: "男",
         method : this.boy
        }
      ],
      sheetVisible: false,
      sex:"男",
      userInfo: {
        avatar:
          "http://img0.imgtn.bdimg.com/it/u=753003090,3267473532&fm=26&gp=0.jpg"
      }
    };
  },
  methods: {
    //选择性别
    select_sex: function() {
      this.sheetVisible = true;
    },
    boy: function(){
      this.sex = "男";
    },
    girl: function(){
       this.sex = "女";
    },
    // 打开图片上传
    uploadHeadImg: function() {
      this.$el.querySelector(".hiddenInput").click();
    },
    // 将头像显示
    handleFile: function(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.userInfo.avatar = res.result;
      };
      reader.readAsDataURL(file);
    }
  },
  created() {}
};
</script>

