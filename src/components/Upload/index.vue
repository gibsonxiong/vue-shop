<style lang="scss" scoped>
@import "~@/css/var";
.feedback_add_img {
  display: flex;
  flex-wrap: wrap;
}

.remark_add {
  position: relative;
  width: 0.79rem;
  height: 0.79rem;
  color: #bcbcbc;
  text-align: center;
  border: 1px dashed #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .icon-camera_light {
    font-size: 0.25rem;
  }

  p {
    font-size: 0.12rem;
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
  height: 0.25rem;
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
  <div class="feedback_add_img">
    <div class="img_box" v-for="(val,index) in data" :key="index">
      <i class="img_del iconfont icon-roundclosefill" @click="remove(index)"></i>
      <img :src="val | hostUrl">
    </div>
    <div class="img_box" v-if="data.length < maxLength">
      <div class="remark_add">
        <template v-if="uploadProgress >= 0">
          <mt-progress :value="uploadProgress" style="width:80%"></mt-progress>
          <p>上传中</p>
        </template>
        <template v-else>
          <i id="portrait" class="iconfont icon-camera_light"></i>
          <p>添加图片</p>
          <input
            type="file"
            name="file"
            id="file"
            multiple
            accept="image/*"
            @change="handleInputChange($event)"
          >
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import services from '@/services';

export default {
  props: {
    data:{
      type:Array,
      default(){
        return [];
      }
    },
    maxLength:{
      type:[String,Number],
      default:6
    }
  },
  data() {
    return {
      uploadProgress: -1
    };
  },
  methods: {
    remove(index) {
      this.$emit('remove', index);
    },
    async handleInputChange(event) {
      //图片预览
      let files = event.target.files;

      try {
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("img", files[i]);
        }

        let res = await services.upload(formData, e => {
          let p = (e.loaded / e.total) * 100;
          this.uploadProgress = p;

          if (p >= 100) {
            this.uploadProgress = -1;
          }
        });

        if (services.$isError(res)) throw new Error(res.message);

        res.data.forEach(item => {
          if (this.data.length >= this.maxLength) {
            return;
          }
          this.$emit('add', item.src);
        });
      } catch (err) {
        this.uploadProgress = -1;
        return this.$toast(err.message);
      }
    }
  },
  created() {}
};
</script>

