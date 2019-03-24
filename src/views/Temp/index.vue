<style scoped lang="scss">
.temp-page {
  .c-page-body {
    background: #fff;
  }
  h2 {
    margin: 20px 0 5px;
  }

  button {
    margin: 5px;
  }
}
</style>

<template>
  <div class="temp-page page">
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading:false
    };
  },
  methods: {
    submit(){
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 4000);
    }
  }
};
</script>
