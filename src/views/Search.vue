<template>
  <div class="search">
    <div class="linputer">
      <div class="lbutton">
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
    <div class="fulldialog">
      <div class="fulldialog-content">
        <h2 class="pop-title">热门城市</h2>
        <table></table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'search'
}
</script>

<style lang="scss" scoped>
  $boder: 1px solid #e8e8e8;
  .linputer {
    display: flex;
    border-bottom: $boder;
    background: #ff0;
    .lbutton {
      width: 88px;
      height: 45px;
      line-height: 45px;
      font-size: 0.16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: $boder;
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
        border-left: $boder;
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
