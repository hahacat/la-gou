<template>
  <div class="search">
    <div class="linputer">
      <div class="lbutton">
        <span class="city">全国</span>
        <span class="cityicon"></span>
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
  .linputer {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    .lbutton {
      width: 88px;
      height: 45px;
      line-height: 45px;
      font-size: 0.14rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .city {
        
      }
      .cityicon {
        width: 8.5px;
        height: 7px;
        background: {
          image: url('../assets/images/cityicon.png');
          size:50% 100% ;
        }
      }
    }
  }
</style>
