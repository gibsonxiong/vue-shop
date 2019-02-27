<style lang="scss" scoped>
@import "~@/css/var";
.star {
  width: 55%;
  font-size: 0;
  padding: 0.1rem 0;
}
.star-item {
  display: inline-block;
  font-size: 0.24rem;
  margin: 0 0.03rem;
  color: $color-primary;
}

ul {
  text-align: center;
  background: #fff;
}

</style>
<template>
  <ul class="star">
    <i
      v-for="(itemClass,index) in itemClasses"
      :key="index"
      :class="itemClass"
      class="star-item iconfont"
      @click="stars(index)"
      track-by="index"
    ></i>
  </ul>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 5
    }
  },
  computed: {
    //计算属性
    itemClasses() {
      let result = []; // 返回的是一个数组,用来遍历输出星星
      let score = Math.floor(this.value * 2) / 2; // 计算所有星星的数量
      let hasDecimal = score % 1 !== 0; // 非整数星星判断
      let integer = Math.floor(score); // 整数星星判断
      for (let i = 0; i < integer; i++) {
        // 整数星星使用on
        result.push("icon-star"); // 一个整数星星就push一个CLS_ON到数组
      }
      if (hasDecimal) {
        // 非整数星星使用half
        result.push("half"); // 类似
      }
      while (result.length < 5) {
        // 余下的用无星星补全,使用off
        result.push("icon-star1");
      }
      return result;
    }
  },
  data() {
    return {};
  },
  methods: {
    stars: function(index) {
      this.$emit("input", index + 1);
    }
  },
  created() {}
};
</script>

