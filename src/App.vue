<template>
  <div id="app">
    <Head />
    <Index />
  </div>
</template>

<script>
import Index from './views/Index.vue'
import Head from './components/Header.vue'
export default {
  components: {
    Index,
    Head
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
