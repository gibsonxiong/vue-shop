<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.c-search {
  .c-page-body{
  }

  .list {
    // position: fixed;
    // top: 0.42rem;
    // bottom: 0;
    // width: 100%;
    background-color: #fff;
    margin-top: -1px;
    padding: 0 0.08rem;
    border-top: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .item {
      font-size: 0.13rem;
      padding: 0.11rem 0.05rem;
      border-bottom: 1px solid $color-border;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .history-wrap{
    padding: 0.15rem;
    .wrap-header{
      @include flexbox(space-between);
    }

    .wrap-title{
      font-size: 0.12rem;
      margin: 0;
      padding: 0;
    }

    .tag-wrap{
      padding-top:0.1rem;
      overflow: hidden;
    }
  
    .history-tag {
      float: left;
      padding: 0.07rem 0.1rem;
      background: #eaeaea;
      color:#585858;
      overflow: hidden;
      border-radius: 0.025rem;
      margin: 0rem 0.12rem 0.12rem 0rem;
    }
  }

}
</style>

<template>
  <div v-show="visible" class="c-search">
    <c-header :backType="0" ref="header" :centerStyle="{'padding-left':'0.42rem'}">
      <a slot="left" @click="hideSearch">
        <i class="iconfont icon-back" style="font-size: 0.22rem;"></i>
      </a>
      <c-search-input
        ref="searchInput"
        slot="center"
        v-model="searchText"
        @search="search"
        style="width:100%;"
      ></c-search-input>
      <a slot="right" @click="search">搜索</a>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="list" v-if="searchText.length > 0">
        <div class="item" v-for="(item,index) in 100" :key="index">美丽动人的小肖</div>
      </div>
      <div class v-else>
        <div class="history-wrap">
          <div class="wrap-header">
            <h3 class="wrap-title">历史搜索</h3>
            <i class="iconfont icon-delete"></i>
          </div>
          <div class="tag-wrap">
            <span class="history-tag" v-for="(item,index) in historyList" :key="index" @click="$router.push({path:'/items',query:{searchText:item}})">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    defaultSearchText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      searchText: "",
      list: [1],
      historyList:[
        '面膜',
        '飞机大炮',
        '无敌帅气的衣服',
        '农药',
        '全钛眼睛框 纯钛',
        'lush',
        'lush洗发水'
      ]
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.$refs.searchInput.focus();
        this.$nextTick(() => {
          this.$refs.header.resizeCenter();
        });
      }
    }
  },
  methods: {
    search() {
      console.log(this.searchText);
    },
    hideSearch() {
      this.$emit("hideSearch");
    },
    getHistory(){
      
    }
  },
  created() {
    this.searchText = this.defaultSearchText;
  }
};
</script>
