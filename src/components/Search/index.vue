<style lang="scss" scoped>
@import "~@/css/var";
@import "~@/css/mixin";
.c-search {
  .list {
    position: absolute;
    top: 0.42rem;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    margin-top: -1px;
    padding: 0 0.08rem;
    // border-top: 1px solid $color-border;
    // border-bottom: 1px solid $color-border;
    @include border-top();
    // @include border-bottom();
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    .item {
      font-size: 0.14rem;
      padding: 0.15rem 0.05rem;
      // border-bottom: 1px solid $color-border;
@include border-bottom();

      // &:last-child {
      //   border-bottom: none;
      // }


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
    <c-header :backType="0" ref="header" :leftPadding="false">
      <!-- <a slot="left" @click="$emit('close')">
        <i class="iconfont icon-back" style="font-size: 0.22rem;"></i>
      </a>-->
      <c-search-input
        ref="searchInput"
        slot="center"
        v-model="searchText"
        :placeholder="`搜索你喜欢的宝贝`"
        @search="search(searchText)"
        @input="throttleFetchSearchTip"
        style="width:100%;"
      ></c-search-input>
      <!-- <a slot="right" @click="search(searchText)">搜索</a> -->
      <a slot="right" @click="$emit('close')">取消</a>
    </c-header>
    <div class="c-page-body">
      <div class="c-header-pd">
        <div class="list" v-if="searchText.length > 0">
          <div
            class="item"
            v-for="(item,index) in searchTipList"
            :key="index"
            @click="search(item[0])"
          >{{item[0]}}</div>
        </div>
        <div v-show="searchText.length == 0" class>
          <div class="history-wrap" v-if="searchHistoryList.length > 0">
            <div class="wrap-header">
              <h3 class="wrap-title">历史搜索</h3>
              <i class="iconfont icon-delete" @click="deleteSearchHistory"></i>
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
  </div>
</template>


<script>
import services from "@/services";

function throttle(method, context, args, duration = 300) {
  clearTimeout(method.tId);
  method.tId = setTimeout(function() {
    method.apply(context, args);
  }, duration);
}

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
        this.fetchSearchHistory();
        this.fetchSearchTip(this.searchText);
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
          this.$refs.header.resizeCenter();
        });
      }
    }
  },
  methods: {
    search(searchText) {
      this.$refs.searchInput.blur();
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
    throttleFetchSearchTip(searchText) {
      throttle(this.fetchSearchTip, this, [searchText]);
    },
    async fetchSearchHistory() {
      try {
        let res = await services.fetchSearchHistory();

        if (services.$isError(res)) throw new Error(res.message);

        this.searchHistoryList = res.data;
      } catch (err) {
        return this.$toast(err.message);
      }
    },
    async deleteSearchHistory(){
      try {
        let result = await this.$popup.confirm('确定删除全部历史记录？');

        if(result !=='confirm') return;

        let res = await services.deleteSearchHistory();

        if (services.$isError(res)) throw new Error(res.message);

        this.searchHistoryList = [];
        this.$toast(res.message);
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
