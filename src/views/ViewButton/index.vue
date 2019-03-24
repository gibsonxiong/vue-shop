<style scoped lang="scss">
.temp-page {
  .c-page-body {
    background: #fff;
  }
  h2 {
    margin: 20px 10px 5px 10px;
  }

  button {
    margin: 5px;
  }
}
</style>

<template>
  <div class="temp-page page">
    <c-header :title="'Button'"></c-header>
    <div class="c-page-body header-pd">
      <c-button>按钮</c-button>

      <h2>color</h2>
      <c-button color="normal">normal</c-button>
      <c-button color="primary">primary</c-button>
      <c-button color="secondly">secondly</c-button>
      <c-button color="success">success</c-button>
      <c-button color="warning">warning</c-button>
      <c-button color="danger">danger</c-button>

      <h2>disabled</h2>
      <c-button color="normal" disabled>normal</c-button>
      <c-button color="primary" disabled>primary</c-button>
      <c-button color="secondly" disabled>secondly</c-button>
      <c-button color="success" disabled>success</c-button>
      <c-button color="warning" disabled>warning</c-button>
      <c-button color="danger" disabled>danger</c-button>

      <h2>type</h2>
      <c-button type="plain">plain</c-button>
      <c-button type="radius">radius</c-button>
      <c-button type="round">round</c-button>

      <c-button color="primary" type="plain">plain</c-button>
      <c-button color="primary" type="radius">radius</c-button>
      <c-button color="primary" type="round">round</c-button>

      <h2>size</h2>
      <c-button color="primary" size="xs">xs</c-button>
      <c-button color="primary" size="sm">sm</c-button>
      <c-button color="primary" size="md">md</c-button>
      <c-button color="primary" size="lg">lg</c-button>
      <c-button color="primary" size="xl">xl</c-button>

      <h2>block</h2>
      <div style="padding:0 0.1rem;">
        <c-button size="sm" block>按钮</c-button>
        <c-button size="md" block>按钮</c-button>
        <c-button size="lg" block>按钮</c-button>
      </div>

      <h2>link</h2>
      <c-button color="normal" link>normal</c-button>
      <c-button color="primary" link>primary</c-button>
      <c-button color="secondly" link>secondly</c-button>
      <c-button color="success" link>success</c-button>
      <c-button color="warning" link>warning</c-button>
      <c-button color="danger" link>danger</c-button>

      <h2>link icon</h2>
      <c-button color="normal" link icon="icon-delete_light">normal</c-button>
      <c-button color="primary" link icon="icon-delete_light">primary</c-button>
      <c-button color="secondly" link icon="icon-delete_light">secondly</c-button>
      <c-button color="success" link icon="icon-delete_light">success</c-button>
      <c-button color="warning" link icon="icon-delete_light">warning</c-button>
      <c-button color="danger" link icon="icon-delete_light">danger</c-button>

      <h2>link disabled</h2>
      <c-button color="normal" link disabled>normal</c-button>
      <c-button color="primary" link disabled>primary</c-button>
      <c-button color="secondly" link disabled>secondly</c-button>
      <c-button color="success" link disabled>success</c-button>
      <c-button color="warning" link disabled>warning</c-button>
      <c-button color="danger" link disabled>danger</c-button>

      <h2>ghost</h2>
      <c-button color="normal" ghost>normal</c-button>
      <c-button color="primary" ghost>primary</c-button>
      <c-button color="secondly" ghost>secondly</c-button>
      <c-button color="success" ghost>success</c-button>
      <c-button color="warning" ghost>warning</c-button>
      <c-button color="danger" ghost>danger</c-button>

      <h2>ghost icon</h2>
      <c-button color="normal" ghost icon="icon-delete_light">normal</c-button>
      <c-button color="primary" ghost icon="icon-delete_light">primary</c-button>
      <c-button color="secondly" ghost icon="icon-delete_light">secondly</c-button>
      <c-button color="success" ghost icon="icon-delete_light">success</c-button>
      <c-button color="warning" ghost icon="icon-delete_light">warning</c-button>
      <c-button color="danger" ghost icon="icon-delete_light">danger</c-button>

      <h2>ghost disabled</h2>
      <c-button color="normal" ghost disabled>normal</c-button>
      <c-button color="primary" ghost disabled>primary</c-button>
      <c-button color="secondly" ghost disabled>secondly</c-button>
      <c-button color="success" ghost disabled>success</c-button>
      <c-button color="warning" ghost disabled>warning</c-button>
      <c-button color="danger" ghost disabled>danger</c-button>

      <h2>loading</h2>
      <c-button color="normal" ghost icon="icon-delete_light" :loading="loading" @click="submit">按钮</c-button>
      <c-button
        color="normal"
        ghost
        rightIcon="icon-play_forward_fill"
        :loading="loading"
        @click="submit"
      >按钮</c-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    submit() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 4000);
    }
  }
};
</script>
