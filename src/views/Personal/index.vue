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
          <li @click.stop="uploadHeadImg">
            <p>头像</p>
            <div class="header_ing">
              <!--  -->
              <div class="head_img">
                <img :src="userInfo.avatar">
              </div>
              <div class="setting_right">
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
            <p class="header_ing" @click="updateNickname">
              <span>{{userInfo.nickname}}</span>
              <span style="transform: rotateZ(180deg); display: inline-block;">
                <i class="iconfont icon-back_light" style="font-size: 14px;"></i>
              </span>
            </p>
          </li>
          <li @click="sheetVisible = true">
            <p>性别</p>
            <p class="header_ing">
              <span>{{userInfo.gender | gender}}</span>
              <span style="transform: rotateZ(180deg); display: inline-block;">
                <i class="iconfont icon-back_light" style="font-size: 14px;"></i>
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
import services from "@/services";
import { Actionsheet } from "mint-ui";

export default {
  data() {
    return {
      userInfo: {},
      actions: [
        {
          name: "女",
          method:()=>{
            this.updateUserInfo({
              gender:'1'
            })
          }
        },
        {
          name: "男",
          method: ()=>{
            this.updateUserInfo({
              gender:'0'
            })
          }
        }
      ],
      sheetVisible: false,
    };
  },
  methods: {
    async fetchUserInfo() {
      try {
        let res = await services.fetchUserInfo();

        if (services.$isError(res)) throw new Error(res.message);

        this.userInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async updateUserInfo(info) {
      try {
        let res = await services.updateUserInfo(info);

        if (services.$isError(res)) throw new Error(res.message);

        this.userInfo = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },

    updateNickname(){
      this.$router.push({path:'/nickname', query:{value:this.userInfo.nickname}});
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
  created() {
    this.fetchUserInfo();
  }
};
</script>

