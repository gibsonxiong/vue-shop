<style scoped lang="scss">
.wc-toast {
  position: fixed;
  z-index: 999999;
  line-height: 17px;
}

.wc-toast--default {
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
.wc-toast--center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.wc-toast--top {
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}
.wc-toast-message {
  font-size: 14px;
  padding: 12px 16px;
  text-align: center;
  color: #fff;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.90);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 8px;
  }
  .wc-toast__text {
  }
}
.wc-fade-enter {
  opacity: 0;
}
.wc-fade-enter-active,
.wc-fade-leave-active {
  transition: opacity 0.4s;
}
.wc-fade-leave-active {
  opacity: 0;
}
</style>
<template>
	<transition name="wc-fade">
		<div class="wc-toast" v-if="showing" :class="{'wc-toast--center': location == 'center'|| location =='', 'wc-toast--default': location == 'bottom', 'wc-toast--top': location == 'top'}">
			<div class="wc-toast-message" :style="toastStyle">
				<img :src="imgUrl" alt="" :style="imgStyle" v-if="imgUrl">
				<div class="wc-toast__text" :style="textStyle">{{content}}</div>
			</div>
		</div>
	</transition>
</template>
<script>
import pageChange from "../mixins";

let noop = function() {};

export let defaultOptions = {
  showing: false,
  content: "",
  duration: 2000,
  location: "center",
  toastStyle: {},
  imgStyle: {},
  textStyle: {},
  imgUrl: ""
};

export default {
  mixins: [pageChange],
  data() {
    let data = {};
    return Object.assign({}, defaultOptions, data);
  },

  methods: {
    show(options = {}) {
      let resolve;

      if (typeof options === "string") {
        options = {
          content: options
        };
      }

      /* 设置显示内容 */
      Object.assign(this.$data, defaultOptions);
      Object.assign(this.$data, options);

      /* 显示 */
	    this.showing = true;
	  
      if (this.duration > 0) {
        setTimeout(() => {
          this.hide();
          resolve && resolve();
        }, this.duration);
      }

      return new Promise(_resolve => {
        resolve = _resolve;
      });
    },

    hide() {
      this.showing = false;
    }
  }
};
</script>