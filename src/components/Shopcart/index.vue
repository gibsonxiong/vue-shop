<style lang="scss" scoped>
.c-shopcart {
  .empty-wrap {
    text-align: center;
    padding-top: 0.25rem;
    .icon {
      width: 95px;
    }
    .hint {
      line-height: 22px;
      text-align: center;
      padding: 10px 0;
    }
  }
}
</style>

<template>
  <div class="c-shopcart">
    <c-header :title="'购物车'" :backType="0" :theme="'white'"></c-header>
    <div class="c-page-body header-pd tab-pd">
      <div class="item-list"  v-if="list && list.length > 0">
        <div></div>
      </div>
      <div class="empty-wrap" v-else>
        <img
          class="icon"
          src="https://img.miyabaobei.com/d1/p5/2016/11/14/35/92/35923045c62da157432add71ffcea861189139729.png"
          alt
        >
        <div class="hint">您的购物车是空的哦！</div>
        <div>
          <button @click="$emit('gotoHome')">顺便逛逛</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      list:[
        1
      ]
    };
  },
  
};
</script>
