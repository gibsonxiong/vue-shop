<style lang="less" scoped>
.imagebox {
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

<template>
  <div class="imagebox">
    <img v-show="imgShowing" ref="img" :src="src" :style="imgStyle" @load="load"/>
  </div>

</template>

<script>
import domUtils from "../dom-utils";

export default {
  name: "Imagebox",

  props: {
    src: {
      type: String
    },
    defaultSrc: {
      type: String
    }
  },

  data() {
    return {
      imgShowing: false,
      imgStyle: {}
    };
  },

  methods: {
    load() {
      let img = this.$refs.img;

      let naturalWidth = img.naturalWidth;
      let naturalHeight = img.naturalHeight;
      let naturalRatio = naturalWidth / naturalHeight;

      let width = domUtils.getStyle(this.$el, "width");
      let height = domUtils.getStyle(this.$el, "height");
      let ratio = width / height;

      if (naturalRatio > ratio) {
        this.imgStyle = {
          height: "100%"
        };
      } else {
        this.imgStyle = {
          width: "100%"
        };
      }

      this.imgShowing = true;
      this.$forceUpdate();
    }
  },

  created() {
    window.addEventListener("resize", () => {
      this.load();
    });
  }
};
</script>



