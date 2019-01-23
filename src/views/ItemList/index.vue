<style scoped lang="scss">
.item-list-page {

}
</style>

<template>
  <div class="item-list-page">
    <div v-show="!search.visible">
      <c-header>
        <c-search-input slot="center" v-model="searchText" @click.native="showSearch" disabled="disabled" style="width:100%;"></c-search-input>
      </c-header>
      <div class="c-page-body header-pd">

      </div>
      
    </div>
    <c-search :defaultSearchText="searchText" :visible="search.visible" @hideSearch="hideSearch"></c-search>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      search: {
        visible: false
      }
    };
  },
  methods: {
    showSearch() {
      this.search.visible = true;
    },
    hideSearch() {
      this.search.visible = false;
    }
  },
  created() {
    this.searchText = this.$route.query.searchText || "";
  }
};
</script>
