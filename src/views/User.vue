<template>
  <div class="user">
    <ul class="content">
      <li class="item">
        <h2 class="item-title">职位类型</h2>
        <a href="javascrpt:;" class="item-desc">前端开发</a>
      </li>
      <li class="item">
        <h2 class="item-title">工作地点</h2>
        <a href="javascrpt:;" class="item-desc">北京</a>
      </li>
      <li class="item">
        <h2 class="item-title">期望薪水</h2>
        <a href="javascrpt:;" class="item-desc">没有要求</a>
      </li>
      <li class="item">
        <h2 class="item-title">公司规模</h2>
        <a href="javascrpt:;" class="item-desc">没有要求</a>
      </li>
    </ul>
    <router-link to="/" class="search">开始搜索</router-link>
  </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style lang="scss" scoped>
  .content {
    padding: 20px;
    .item-title {
      display: block;
      color: #ccc;
      font-size: 0.14rem;
      text-align: left;
    }
    .item-desc {
      display: block;
      margin: 10px 0 20px;
      height: 62px;
      line-height: 62px;
      font-size: 0.16rem;
      color: #333;
      background: #f0f0f0;
      border-radius: 2px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 10px;
    }
  }
  .search {
    height: 45px;
    line-height: 45px;
    color: #fff;
    font-size: 0.18rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #00b38a;
    z-index: 10;
  }
</style>
