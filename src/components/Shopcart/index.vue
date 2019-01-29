<style lang="scss" scoped>
.c-shopcart {

}
</style>

<template>
  <div class="c-shopcart">
    <c-header :title="'购物车'" :backType="0" :theme="'white'"></c-header>
    <div class="c-page-body header-pd tab-pd">
      <div class="item-list" v-if="list && list.length > 0">
        <div>
          <c-number-input v-model="num" :min="0" :max="5"></c-number-input>

          <c-checkbox v-model="bool"></c-checkbox>
        </div>
      </div>
      <c-empty-hint v-else icon="icon-goods_light" hint="您的购物车是空的哦！">
        <button @click="$emit('gotoHome')">顺便逛逛</button>
      </c-empty-hint>
    </div>
  </div>
</template>


<script>
import { CellSwipe } from "mint-ui";

export default {
  components: {
    CellSwipe
  },
  data() {
    return {
      num:'',
      bool:true,
      list: [1]
    };
  }
};
</script>
