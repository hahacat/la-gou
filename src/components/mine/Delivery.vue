<template>
  <div class="container">
    <header>
      <a href="javascript:;" class="back" @click="goBack">
        <span class="icon"></span>
      </a>
      <h2 class="title">投递记录</h2>
    </header>
    <section class="content">
      <nav class="tabs">
        <span class="tab all" :class="selectedIndex === 0 ? 'selected' : ''">全部</span>
        <span class="tab invitation" :class="selectedIndex === 1 ? 'selected' : ''">邀请面试</span>
        <span class="tab unsuitable" :class="selectedIndex === 2 ? 'selected' : ''">不合适</span>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: 'delivery',
  data () {
    return {
      selectedIndex: 0
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 11;
  .content {
    .tabs {
      display: flex;
      height: 43px;
      line-height: 43px;
      font-size: 0.14rem;
      color: #555;
      .tab {
        flex: 1;
      }
      .selected {
        background: #f5f5f5;
        color: #00b38a;
      }
    }
  }
  header {
    height: 45px;
    background: #00b38a;
    color: #fff;
    font-size: 0.18rem;
    line-height: 0.45rem;
    position: relative;
    text-align: center;
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 9px;
        height: 20px;
        background: {
          image: url(../../assets/images/back.png);
          size: cover;
        }
      }
    }
  }  
}
</style>
