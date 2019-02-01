<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.c-search {
  .c-page-body {
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

  .history-wrap {
    padding: 0.15rem;
    .wrap-header {
      @include flexbox(space-between);
    }

    .wrap-title {
      font-size: 0.12rem;
      margin: 0;
      padding: 0;
    }

    .tag-wrap {
      padding-top: 0.1rem;
      overflow: hidden;
    }

    .history-tag {
      float: left;
      padding: 0.07rem 0.1rem;
      background: #eaeaea;
      color: #585858;
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
      <a slot="left" @click="$emit('close')">
        <i class="iconfont icon-back" style="font-size: 0.22rem;"></i>
      </a>
      <c-search-input
        ref="searchInput"
        slot="center"
        v-model="searchText"
        :placeholder="`搜索你喜欢的宝贝`"
        @search="search"
        @input="fetchSearchTip"
        style="width:100%;"
      ></c-search-input>
      <a slot="right" @click="search(searchText)">搜索</a>
    </c-header>
    <div class="c-page-body header-pd">
      <div class="list" v-if="searchText.length > 0">
        <div
          class="item"
          v-for="(item,index) in searchTipList"
          :key="index"
          @click="search(item)"
        >{{item}}</div>
      </div>
      <div class v-else>
        <div class="history-wrap">
          <div class="wrap-header">
            <h3 class="wrap-title">历史搜索</h3>
            <i class="iconfont icon-delete"></i>
          </div>
          <div class="tag-wrap">
            <span
              class="history-tag"
              v-for="(item,index) in searchHistoryList"
              :key="index"
              @click="search(item)"
            >{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import services from "@/services";

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
      searchTipList: [],
      searchHistoryList: []
    };
  },
  watch: {
    visible(val) {
      if (val) {
        this.searchText = this.defaultSearchText;
        this.fetchSearchTip(this.searchText);
        this.$refs.searchInput.focus();
        this.$nextTick(() => {
          this.$refs.header.resizeCenter();
        });
      }
    }
  },
  methods: {
    search(searchText) {
      this.$emit("search", searchText);
    },
    async fetchSearchTip(searchText) {
      if (!searchText) return;

      try {
        let res = await services.fetchSearchTip({
          searchText
        });

        if (services.$isError(res)) throw new Error(res.message);

        this.searchTipList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async fetchSearchHistory() {
      try {
        let res = await services.fetchSearchHistory();

        if (services.$isError(res)) throw new Error(res.message);

        this.searchHistoryList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    }
  },
  created() {
    this.searchText = this.defaultSearchText;

    this.fetchSearchTip(this.searchText);
    this.fetchSearchHistory();
  }
};
</script>
