<template>
  <div class="mine">
    <div class="user-info">
      <div class="user-message" v-if="isLogin">
        <a href="javascript:;" class="user-resume">简历></a>
        <div class="user-img">
          <span class="user-avatar"></span>
        </div>
        <p class="user-name">张三丰</p>
      </div>
      <div class="nologin" v-else>
        <router-link to="/login" class="loginbut" >登录/注册</router-link>
      </div>
      <div class="buttons">
        <a href="javascript:;" class="button">投递</a>
        <a href="javascript:;" class="button">面试</a>
        <a href="javascript:;" class="button">邀约</a>
        <a href="javascript:;" class="button">收藏</a>
      </div>
      <a href="javascript:;" class="logout" v-show="isLogin">退出登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {}
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style lang="scss" scoped>
  .mine {
    padding: 0 15px;
    margin-bottom: 45px;
    overflow: hidden;
    .nologin {
      height: 110px;
      width: 125px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .loginbut {
        width: 100%;
        height: 45px;
        line-height: 45px;
        background: #1fc8a1;
        color: #fff;
        font-size: 0.16rem;
      }
    }
    .logout {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #1fc8a1;
      color: #fff;
      font-size: 0.16rem;
    }
    .buttons {
      padding: 10px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-around;
      .button {
        width: 48%;
        height: 86px;
        line-height: 86px;
        background: #1fc8a1;
        color: #fff;
        font-size: 0.14rem;
        margin-top: 10px;
      }
    }
    .user-info {
      margin: 10px 0;
      position: relative;
    }
    .user-resume {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.14rem;
      color: #00b38a;
    }
    .user-message {
      height: 110px;
      .user-img {
        width: 81px;
        height: 81px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .user-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #555;
        }
      }
      .user-name {
        height: 22px;
        line-height: 22px;
        font-size: 0.14rem;
        color: #333;
      }
    }
  }
</style>
