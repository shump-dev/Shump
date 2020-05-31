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
#main {
  height: 100%;
  width: 100%;
}
html, body {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    align-items: center;
}
</style>