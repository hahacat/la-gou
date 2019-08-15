<template>
  <div class="content">
    <ul class="informations" ref="items">
      <li class="item" v-for="(item, index) in list" :key="index">
        <a href="javascript:;" class="item-link">
          <img :src="item.imgSrc" alt="" class="item-logo">
          <div class="item-desc">
            <h2 class="item-title">{{item.name}}</h2>
            <p class="item-info">
              <span class="item-pos">{{item.position}}</span>
              <span class="item-salary">{{item.salary}}</span>
            </p>
            <p class="item-time">{{item.time}}</p>
          </div>
        </a>
      </li>
      <li class="no-more" v-show="ifTotal">没有更多了</li>
      <li class="get-more" @click="getMore" v-show="!ifTotal">加载更多</li>
    </ul>
    <aside class="copyright">
      <p>©2015 lagou.com, all right reserved </p>
      <nav class="copyright-item">
        <a href="javascript:;" class="link phone active">移动版</a>
        <a href="javascript:;" class="link computer">电脑版</a>
        <a href="#header" class="link toTop">回顶部</a>
      </nav>
    </aside>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      lists: [],
      singleNum: 0,
      ifTotal: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      var height = document.documentElement.clientHeight || document.body.height
      var h = 90
      this.singleNum = Math.floor(height / h)
      axios.get('company.json').then(respons => { 
        this.lists = respons.data
        if (this.lists.length <= this.singleNum) {
          this.ifTotal = true
        }
        for (let i = 0; i < this.singleNum; i++) {
          this.list.push(respons.data[i])
        }
      })
    },
    getMore () {
      let len = this.list.length
      let t = this.lists.length - len
      if (t >= this.singleNum) {
        for (let i = 0; i < this.singleNum; i++) {console.log('a')
          this.list.push(this.lists[len + i])
        }
      } else if (t < this.singleNum && t > 0) { console.log('b')
        for (let i = 0; i < t; i++) {
          this.list.push(this.lists[len + i])
        }
        this.ifTotal = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .item {
    padding: 14px;
    border-bottom: 1px solid #e8e8e8;
    .item-link {
      display: flex;
      justify-content: flex-start;
    }
    .item-logo {
      width: 60px;
      height: 60px;
      margin-right: 0.1rem;
    }
    .item-desc {
      text-align: left;
      flex: 1;
      .item-title {
        font: {
          size: 0.16rem;
          weight: bold;
        }
        margin-bottom: 6px;
      }
      .item-info {
        margin-bottom: 6px;
        height: 15px;
        line-height: 15px;
        display: flex;
        justify-content: space-between;
        font: {
          size: 0.12rem;
          weight: normal;
        }
        .item-pos {
          width: 60%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .item-salary {
          color: #00b38a;
        }
      }
      .item-time {
        font-size: 0.1rem;
        color: #888;
      }
    }
  }
  .get-more, .no-more {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 0.16rem;
    background: #fafafa;
  }
  .copyright {
    padding-top: 30px;
    padding-bottom: 40px;
    color: #333;
    font-size: 0.1rem;
    text-align: center;
    .copyright-item {
      height: 32px;
      line-height: 32px;
      display: flex;
      justify-content: center;
      .link {
        padding: 0 5px;
      }
      .active {
        color: #999;
      }
    }
  }
</style>
