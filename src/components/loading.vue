<template>
  <div element-loading-text="拼命加载中"
    element-loading-background="rgba(255, 255, 255, 0.6)"
    v-loading.fullscreen.lock="this.$store.state.loading.show "
    >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false
      }
    }
  };
</script>

<style>
  body {
    margin: 0;
  }
</style>