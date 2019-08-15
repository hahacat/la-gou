<template>
  <header class="header" id="header">
    <a href="javascript:;" class="back" @click="goBack">
      <span class="icon"></span>
    </a>
    <h1>拉勾网</h1>
    <router-link to="/" class="to-index" @click="goBack">
      <span class="icon"></span>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Head',
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 45px;
  background: #00b38a;
  color: #fff;
  font-size: 0.18rem;
  line-height: 0.45rem;
  display: flex;
  justify-content: space-between;
  .to-index, .back {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .back {
    .icon {
      width: 9px;
      height: 20px;
      background: {
        image: url('../assets/images/back.png');
        size: cover;
      }
    }
  }
  .to-index {
    .icon {
      width: 20px;
      height: 20px;
      background: {
        image: url('../assets/images/toindex.png');
        size: cover;
      }
    }
  }
}
</style>
