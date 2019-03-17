<style scoped lang="scss">
.temp-page {
}
</style>

<template>
  <div class="temp-page page">
    <c-button1>按钮</c-button1>

    <h2>color</h2>
    <c-button1 color="light">light</c-button1>
    <c-button1 color="dark">dark</c-button1>
    <c-button1 color="primary">primary</c-button1>
    <c-button1 color="secondly">secondly</c-button1>
    <c-button1 color="success">success</c-button1>
    <c-button1 color="warning">warning</c-button1>
    <c-button1 color="danger">danger</c-button1>

    <h2>disabled</h2>
    <c-button1 color="light" disabled>light</c-button1>
    <c-button1 color="dark" disabled>dark</c-button1>
    <c-button1 color="primary" disabled>primary</c-button1>
    <c-button1 color="secondly" disabled>secondly</c-button1>
    <c-button1 color="success" disabled>success</c-button1>
    <c-button1 color="warning" disabled>warning</c-button1>
    <c-button1 color="danger" disabled>danger</c-button1>

    <h2>type</h2>
    <c-button1 type="plain">plain</c-button1>
    <c-button1 type="radius">radius</c-button1>
    <c-button1 type="round">round</c-button1>
    <c-button1 type="link">link</c-button1>

    <c-button1 color="primary" type="plain">plain</c-button1>
    <c-button1 color="primary" type="radius">radius</c-button1>
    <c-button1 color="primary" type="round">round</c-button1>
    <c-button1 color="primary" type="link">link</c-button1>

    <h2>size</h2>
    <c-button1 size="sm">sm</c-button1>
    <c-button1 size="md">md</c-button1>
    <c-button1 size="lg">lg</c-button1>

    <h2>link</h2>
    <c-button1 color="light" link>light</c-button1>
    <c-button1 color="dark" link>dark</c-button1>
    <c-button1 color="primary" link>primary</c-button1>
    <c-button1 color="secondly" link>secondly</c-button1>
    <c-button1 color="success" link>success</c-button1>
    <c-button1 color="warning" link>warning</c-button1>
    <c-button1 color="danger" link>danger</c-button1>

    <h2>ghost</h2>
    <c-button1 color="light" ghost>light</c-button1>
    <c-button1 color="dark" ghost>dark</c-button1>
    <c-button1 color="primary" ghost>primary</c-button1>
    <c-button1 color="secondly" ghost>secondly</c-button1>
    <c-button1 color="success" ghost>success</c-button1>
    <c-button1 color="warning" ghost>warning</c-button1>
    <c-button1 color="danger" ghost>danger</c-button1>

    <h2>block</h2>
    <div style="padding:0 0.15rem">
      <c-button1 size="sm" block>按钮</c-button1>
      <c-button1 size="md" block>按钮</c-button1>
      <c-button1 size="lg" block>按钮</c-button1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
