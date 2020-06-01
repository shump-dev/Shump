<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  height: 100%;
  width: 100%;
  background-color: #1b1a1a;
}
html, body {
    background-color: #1b1a1a;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
}
</style>