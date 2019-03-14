<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.personaldata {
  background: #fff;
  padding: 0 0.1rem;
}
.header_ing img {
  width: 0.45rem;
  height: 0.45rem;
  object-fit: cover;
  border-radius: 50%;
}
.header_ing span {
  color: #999;
}
li {
  // border-bottom: 1px solid $color-border;
  @include border-bottom();
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.14rem 0;
}
.avatar-wrap {
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_ing {
  display: flex;
  align-items: center;
}
.hiddenInput {
  display: none;
  // position: absolute;
}
.icon-back_light {
  padding-right: 0.05rem;
}
</style>
<template>
  <div class="record-page page">
    <c-header :title="'个人资料'"></c-header>
    <div class="c-page-body header-pd">
      <div class="personaldata">
        <ul>
          <li>
            <label class="avatar-wrap">
              <p>头像</p>
              <div class="header_ing">
                <!--  -->
                <div class="head_img">
                  <img v-if="userInfo.avatar" :src="userInfo.avatar | hostUrl">
                  <img v-else class="avator" src="@/assets/default_avator.jpg">
                </div>
                <div class="setting_right">
                  <div class="caption"></div>
                </div>
                <input type="file" accept="image/*" @change="handleInputChange" class="hiddenInput">
                <!--  -->
                <span data-v-75dcebf2 style="transform: rotateZ(180deg); display: inline-block;">
                  <i data-v-75dcebf2 class="iconfont icon-back_light" style="font-size: 14px;"></i>
                </span>
              </div>
            </label>
          </li>
          <li @click="updateNickname">
            <p>昵称</p>
            <p class="header_ing">
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
          method: () => {
            this.updateUserInfo({
              gender: "1"
            });
          }
        },
        {
          name: "男",
          method: () => {
            this.updateUserInfo({
              gender: "0"
            });
          }
        }
      ],
      sheetVisible: false
    };
  },
  methods: {
    async fetchUserInfo() {
      try {
        this.$showLoading();
        let res = await services.fetchUserInfo();

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.userInfo = res.data;
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },
    async updateUserInfo(info) {
      try {
        this.$showLoading();
        let res = await services.updateUserInfo(info);

        if (services.$isError(res)) throw new Error(res.message);

        this.$hideLoading();
        this.userInfo = res.data;
      } catch (err) {
        this.$hideLoading();
        return this.$toast(err.message);
      }
    },

    updateNickname() {
      this.$router.push({
        path: "/nickname",
        query: { value: this.userInfo.nickname }
      });
    },

    // 打开图片上传
    uploadHeadImg: function() {
      this.$el.querySelector(".hiddenInput").click();
    },

    async handleInputChange(event) {
      //图片预览
      let files = event.target.files;

      try {
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("img", files[i]);
        }

        let res = await services.upload(formData);

        if (services.$isError(res)) throw new Error(res.message);

        let res2 = await this.updateUserInfo({
          avatar:res.data[0].src
        });

      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.fetchUserInfo();
  }
};
</script>

