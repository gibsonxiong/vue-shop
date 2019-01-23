<style lang="less" scoped>
.download-btn {
  @width: 190px;
  @height: 50px;
  display: inline-block;
  padding: 0 10px;
  color: #fff;
  background: #3a3947 url("./download-btn/btn-bg.png") no-repeat;
  background-size: 100% 100%;
  border: none;
  text-align: center;
  font-size: 15px;
  border-radius: 4px;
  min-width: @width;
  height: @height;
  line-height: @height;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }

  .download-btn-img {
    width: 20px;
    margin-right: 10px;
  }
}
</style>

<template>
<a class="download-btn" :href="href">
    <template v-if="type === 'ios'">
        <img  class="download-btn-img" src="./download-btn/ios.png" />iPhone客户端下载
    </template>
     <template v-if="type === 'android'">
        <img  class="download-btn-img" src="./download-btn/android.png" />Android客户端下载
     </template>
</a>
</template>

<script>
export default {
  name: "DownloadBtn",

  props: {
    type: {
      type: String,
      default: "ios"
    },

    href: String
  }
};
</script>
