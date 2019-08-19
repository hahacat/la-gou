<template>
  <section class="login">
    <header>
      <h2 class="title">注册拉勾</h2>
      <router-link to="/login" class="to-reg">登录</router-link>
    </header>
    <form action="" method="post" class="form_body user-form">
      <div class="phone-wrapper">
        <span class="area_code" v-text="defaultCode" @click="selectCode"></span>
        <input type="text" placeholder="请输入常用手机号" class="user-input user-name" v-model="telNumber" @blur="checkoutTel">
      </div>
      <div class="area_code_list" v-show="ifCodeListShow">
        <dl class="list">
          <dt class="list-title">常用</dt>
          <dd class="list-item" v-for="item in codeLists" :key="item.code" :data-code="item.code" @click="changeCode(item.code)">{{item.name}}</dd>
        </dl>
      </div>
      <div class="phone-wrapper code-wrapper">
        <input type="text" placeholder="请输入收到的验证码" class="user-input user-password" v-model="identifyingCode">
        <input type="button" value="获取验证码" class="get-code" @click="getIdentifyingCode">
      </div>
      <input type="button" value="注册" class="user-submit">
    </form>
    <div class="change-login">
      <span class="text">注册拉勾代表你已同意</span>
      <a href="javascript:;" class="text link">《拉勾用户协议》</a>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      codeLists: [],
      ifCodeListShow: false,
      defaultCode: '0086',
      telNumber: '',
      identifyingCode: ''
    }
  },
  created () {
    this.getCodeLists()
  },
  methods: {
    getCodeLists () {
      axios.get('/telcode.json').then((response) => {
        this.codeLists = response.data
      })
    },
    selectCode () {
      this.ifCodeListShow = true
    },
    changeCode (code) {
      this.ifCodeListShow = false
      this.defaultCode = code
    },
    getIdentifyingCode () {
      let random = Math.floor(Math.random() * 10000 + 1)
      this.identifyingCode = (Array(4).join(0) + random).slice(-4)
    },
    checkoutTel () {
      var reg = /^1{1}\d{10}/
      // this.telNumber 
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    padding: 0.3rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 11;
    .change-login {
      margin-top: 0.25rem;
      font-size: 0.14rem;
      text-align: left;
      .text {
        color: #00b38a;
      }
      .link {
        color: #666;
      }
    }
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
      .area_code_list {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background: #fff;
        text-align: left;
        .list-title {
          font-size: 0.14rem;
          line-height: 0.18rem;
          background: #F9F9FA;
          color: #666;
          padding-left: 0.2rem;
        }
        .list-item {
          font-size: 0.18rem;
          padding-left: 0.15rem;
          color: #333;
          line-height: 0.4rem;
          box-shadow: inset 0 -1px 0 0 rgba(232,233,235,.5);
          border-bottom: 1px solid #ccc;
        }
      }
      .phone-wrapper {
        position: relative;
        font-size: 0.18rem;
        line-height: 0.22rem;
        text-align: left;
        overflow: hidden;
        border-bottom: 1px solid #E8E9EB;
        .area_code {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0.7rem;
          box-sizing: border-box;
          padding: 0.1rem 0;
          &::after {
            content: '';
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-top: 4px solid #000;
            display: inline-block;
            margin-left: 4px;
          }
        }
        .user-input {
          width: 100%;
          box-sizing: border-box;
          padding: 0.1rem 0 0.1rem 0.8rem;
          border: none;
          font-size: 0.18rem;
          color: #333;
        }
      }
      .code-wrapper {
        display: flex;
        margin-bottom: 0.45rem;
        margin-top: 0.1rem;
        .user-input {
          padding-left: 0;
        }
        .get-code {
          border: none;
          font-size: 0.14rem;
          color: #666;
          background: #fff;
          line-height: 0.22rem;
          height: 0.4rem;
          text-align: right;
        }
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
