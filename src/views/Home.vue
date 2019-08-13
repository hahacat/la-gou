<template>
  <div class="home">
    <div class="user-info">
      <span class="info">10秒钟定制职位</span>
      <router-link class="go" to="/user">
        <span class="icon"></span>
        <span class="text">编辑</span>
      </router-link>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/index/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>
  .user-info {
    height: 43px;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
    font-size: 0.14rem;
    color: #555;
    line-height: 43px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info {
      text-align: left;
    }
    .go {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 30px;
      padding: 0 15px;
      background: #f5f5f5;
      border-radius: 15px;
      line-height: 30px;
      color: #00b38a;
      .icon {
        width: 10px;
        height: 10px;
        background: url(../assets/images/edit.png);
        margin-right: 4px;
      }
    }
  }
</style>
