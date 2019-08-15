<template>
  <div class="search">
    <div class="linputer" v-show="!ifCityListShow">
      <div class="lbutton" @click="cityListShow">
        <span class="city">全国</span>
        <span class="cityicon"></span>
      </div>
      <div class="rinputer">
        <input type="text" placeholder="搜索职位或公司" class="inputer">
        <span class="rbutton">
          <em class="buttonicon"></em>
        </span>
      </div>
    </div>
    <div class="fulldialog" v-show="ifCityListShow">
      <div class="fulldialog-content">
        <h2 class="pop-title">热门城市</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>北京</td>
            <td>上海</td>
            <td>广州</td>
          </tr>
          <tr>
            <td>深圳</td>
            <td>成都</td>
            <td>杭州</td>
          </tr>
        </table>
        <h2 class="pop-title">ABCDEF</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>澳门特别行政区</td>
            <td>安庆</td>
            <td>保定</td>
          </tr>
          <tr>
            <td>沧州</td>
            <td>大庆</td>
            <td>鄂尔多斯</td>
          </tr>
          <tr>
            <td>长春</td>
            <td>成都</td>
            <td>重庆</td>
          </tr>
        </table>
        <h2 class="pop-title">GHIJ</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>澳门特别行政区</td>
            <td>安庆</td>
            <td>保定</td>
          </tr>
          <tr>
            <td>沧州</td>
            <td>大庆</td>
            <td>鄂尔多斯</td>
          </tr>
          <tr>
            <td>长春</td>
            <td>成都</td>
            <td>重庆</td>
          </tr>
        </table>
        <h2 class="pop-title">KLMN</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>澳门特别行政区</td>
            <td>安庆</td>
            <td>保定</td>
          </tr>
          <tr>
            <td>沧州</td>
            <td>大庆</td>
            <td>鄂尔多斯</td>
          </tr>
          <tr>
            <td>长春</td>
            <td>成都</td>
            <td>重庆</td>
          </tr>
        </table>
        <h2 class="pop-title">OPQR</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>澳门特别行政区</td>
            <td>安庆</td>
            <td>保定</td>
          </tr>
          <tr>
            <td>沧州</td>
            <td>大庆</td>
            <td>鄂尔多斯</td>
          </tr>
          <tr>
            <td>长春</td>
            <td>成都</td>
            <td>重庆</td>
          </tr>
        </table>
        <h2 class="pop-title">STUV</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>澳门特别行政区</td>
            <td>安庆</td>
            <td>保定</td>
          </tr>
          <tr>
            <td>沧州</td>
            <td>大庆</td>
            <td>鄂尔多斯</td>
          </tr>
          <tr>
            <td>长春</td>
            <td>成都</td>
            <td>重庆</td>
          </tr>
        </table>
        <h2 class="pop-title">WXYZ</h2>
        <table cellpadding="0" class="citylist">
          <tr>
            <td>澳门特别行政区</td>
            <td>安庆</td>
            <td>保定</td>
          </tr>
          <tr>
            <td>沧州</td>
            <td>大庆</td>
            <td>鄂尔多斯</td>
          </tr>
          <tr>
            <td>长春</td>
            <td>成都</td>
            <td>重庆</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search',
  data () {
    return {
      ifCityListShow: false
    }
  },
  methods: {
    cityListShow () {
      this.ifCityListShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
  $border: 1px solid #e8e8e8;
  .fulldialog {
    width: 100%;
    .pop-title {
      line-height: 25px;
      padding: 0 15px;
      font-size: 0.14rem;
      color: #888;
      text-align: left;
      border-bottom: $border;
    }
    .citylist {
      border-bottom: $border;
      width: 100%;
      td {
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 0.16rem;
        color: #333;
        min-width: 100px;
      }
    }
  }
  .linputer {
    display: flex;
    border-bottom: $border;
    background: #ff0;
    .lbutton {
      width: 88px;
      height: 45px;
      line-height: 45px;
      font-size: 0.16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: $border;
      .cityicon {
        width: 15px;
        height: 8px;
        margin-left: 3px;
        background: {
          image: url('../assets/images/cityicon.png');
          size: cover;
        }
      }
    }
    .rinputer {
      flex: 1;
      display: flex;
      .inputer {
        border: none;
        flex: 1;
        padding: 10px 0 10px 10px;
        height: 25px;
        line-height: 25px;
        font-size: 0.16rem;
        color: #333;
      }
      .rbutton {
        width: 20%;
        height: 45px;
        border-left: $border;
        display: flex;
        justify-content: center;
        align-items: center;
        .buttonicon {
          width: 17px;
          height: 17px;
          background: url('../assets/images/search-active.png')
        }
      }
    }
  }
</style>
