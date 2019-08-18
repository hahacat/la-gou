<template>
  <div class="search">
    <div class="linputer" v-show="!ifCityListShow">
      <div class="lbutton" @click="cityListShow">
        <span class="city">{{currentCity}}</span>
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
          <tr v-for="(item, index) in hotCity" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
        <h2 class="pop-title">ABCDEF</h2>
        <table cellpadding="0" class="citylist">
          <tr v-for="(item, index) in cityLists1" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
        <h2 class="pop-title">GHIJ</h2>
        <table cellpadding="0" class="citylist">
          <tr v-for="(item, index) in cityLists2" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
        <h2 class="pop-title">KLMN</h2>
        <table cellpadding="0" class="citylist">
          <tr v-for="(item, index) in cityLists3" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
        <h2 class="pop-title">OPQR</h2>
        <table cellpadding="0" class="citylist">
          <tr v-for="(item, index) in cityLists4" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
        <h2 class="pop-title">STUV</h2>
        <table cellpadding="0" class="citylist">
          <tr v-for="(item, index) in cityLists5" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
        <h2 class="pop-title">WXYZ</h2>
        <table cellpadding="0" class="citylist">
          <tr v-for="(item, index) in cityLists6" :key="index">
            <td v-for="item in item" :key="item.id" @click="setCurrentCity(item.name)">{{item.name}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axiox from 'axios'
export default {
  name: 'search',
  data () {
    return {
      ifCityListShow: false,
      currentCity: '全国',
      hotCity: [],
      cityLists1: [],
      cityLists2: [],
      cityLists3: [],
      cityLists4: [],
      cityLists5: [],
      cityLists6: []
    }
  },
  methods: {
    cityListShow () {
      this.ifCityListShow = true
    },
    getNewArr (arr, size) {
      let length = arr.length
      if (!length || !size || size < 1) {
        return []
      }
      let result = new Array(Math.ceil(length / size))
      let index = 0
      let resIndex = 0
      while (index < length) {
        result[resIndex++] = arr.slice(index, (index += size))
      }
      return result
    },
    getCityLists () {
      axiox.get('citylists.json').then((respons) => {
        let cityLists = respons.data
        let hotCity = []
        let cityLists1 = []
        let cityLists2 = []
        let cityLists4 = []
        let cityLists3 = []
        let cityLists5 = []
        let cityLists6 = []
        for (let i = 0; i < cityLists.length; i++) {
          if (cityLists[i].hot) {
            hotCity.push(cityLists[i])
          }
          if (cityLists[i].code.toUpperCase() <= 'F') {
            cityLists1.push(cityLists[i])
          } else if (cityLists[i].code.toUpperCase() <= 'J') {
            cityLists2.push(cityLists[i])
          } else if (cityLists[i].code.toUpperCase() <= 'N') {
            cityLists3.push(cityLists[i])
          } else if (cityLists[i].code.toUpperCase() <= 'R') {
            cityLists4.push(cityLists[i])
          } else if (cityLists[i].code.toUpperCase() <= 'V') {
            cityLists5.push(cityLists[i])
          } else {
            cityLists6.push(cityLists[i])
          }
        }
        this.hotCity = this.getNewArr(hotCity, 3)
        this.cityLists6 = this.getNewArr(cityLists6, 3)
        this.cityLists5 = this.getNewArr(cityLists5, 3)
        this.cityLists4 = this.getNewArr(cityLists4, 3)
        this.cityLists3 = this.getNewArr(cityLists3, 3)
        this.cityLists2 = this.getNewArr(cityLists2, 3)
        this.cityLists1 = this.getNewArr(cityLists1, 3)
      })
    },
    setCurrentCity (cityName) {
      this.currentCity = cityName
      this.ifCityListShow = false
    }
  },
  created () {
    this.getCityLists()
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
      font-size: 0.16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: $border;
      .city {
        max-width: 70px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
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
