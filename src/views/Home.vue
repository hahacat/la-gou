<template>
  <div class="home">
    <div class="to-login">
      
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .home {

  }
  .to-login {
    height: 43px;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
  }
</style>
