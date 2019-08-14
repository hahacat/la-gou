<template>
  <section class="login">
    <header>
      <h2 class="title">登录拉勾</h2>
      <router-link to="/register" class="to-reg">注册</router-link>
    </header>
    <form action="" method="post" class="form_body user-form">
      <input type="text" placeholder="请输入已验证的手机号或邮箱" class="user-input user-name">
      <input type="text" placeholder="请输入密码" class="user-input user-password">
      <input type="submit" value="登录" class="user-submit">
    </form>
  </section>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
  .login {
    padding: 0.3rem;
    box-sizing: border-box;
    width: 100%;
    // height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 11;
    header {
      line-height: 0.26rem;
      display: flex;
      justify-content: space-between;
      margin: 0.05rem 0 0.4rem;
      .title {
        font: {
          size: 0.2rem;
          weight: 400;
        }
      }
      .to-reg {
        font-size: 0.14rem;
        color: #00b380;
      }
    }
    .user-form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      input::placeholder {
        color: #ccc;
      }
      .user-input {
        box-sizing: border-box;
        padding: 0.1rem 0;
        border: none;
        border-bottom: 1px solid #E8E9EB;
        font-size: 0.18rem;
        color: #333;
      }
      .user-name {
        margin-bottom: 5px;
      }
      .user-password {
        margin-bottom: 0.45rem;
      }
      .user-submit {
        height: 0.44rem;
        background: #00b38a;
        border: none;
        border-radius: 3px;
        color: #fff;
        font-size: 0.18rem;
      }
    }
  }
</style>
