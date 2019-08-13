<template>
  <footer class="footer">
    <div class="footer-link to-home">
      <router-link to="/home" class="link">
        <span class="icon"></span>
        <span class="text">职位</span>
      </router-link>
    </div>
    <div class="footer-link to-search">
      <router-link to="/about" class="link">
        <span class="icon"></span>
        <span class="text">搜索</span>
      </router-link>
    </div>
    <div class="footer-link to-mine">
      <router-link to="/mine" class="link">
        <span class="icon"></span>
        <span class="text">我的</span>
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      activeIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 45px;
  display: flex;
  justify-content: space-around;
  background: #f00;
  .footer-link  {
    font: {
      size: 0.18rem;
    }
    line-height: 45px;
    color: #c2cfcc;
    display: flex;
    flex: 1;
    .link {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
    .icon {
      width: 17px;
      height: 17px;
      margin-right: 3px;
    }
  }
  .to-home {
    .icon {
      background: url('../assets/images/home.png');
    }
  }
  .to-search {
    .icon {
      background: url('../assets/images/search.png');
    }
  }
  .to-mine {
    .icon {
      background: url('../assets/images/mine.png');
    }
  }
  .router-link-active {
    background: #ccc;
    .text {
      color: #444;
    }
  }
  .to-home {
    .router-link-active {
      .icon {
        background: url(../assets/images/home-active.png);
      }
    }
  }
  .to-search {
    .router-link-active {
      .icon {
        background: url(../assets/images/search-active.png);
      }
    }
  }
  .to-mine {
    .router-link-active {
      .icon {
        background: url(../assets/images/mine-active.png);
      }
    }
  }
}
</style>
