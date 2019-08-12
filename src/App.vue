<template>
  <div id="app">
    <h1 class="header">拉勾网</h1>
    <router-view/>
    <div id="footer">
      <router-link to="/" class="footer-link to-home">
        <span class="icon"></span>
        <span class="text">职位</span>
      </router-link>
      <router-link to="/about" class="footer-link to-search">
        <span class="icon"></span>
        <span class="text">搜索</span>
      </router-link>
      <router-link to="/about" class="footer-link to-mine">
        <span class="icon"></span>
        <span class="text">我的</span>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  height: 45px;
  background: #00b38a;
  color: #fff;
  font-size: 0.18rem;
  line-height: 0.45rem;
}

#footer {
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
    justify-content: center;
    align-items: center;
    .icon {
      width: 17px;
      height: 17px;  
    }
  }
  .to-home {
    .icon {
      background: url(./assets/images/home.png);
    }
  }
  .to-search {
    .icon {
      background: url(./assets/images/search.png);
    }
  }
  .to-mine {
    .icon {
      background: url(./assets/images/mine.png);
    }
  }
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
