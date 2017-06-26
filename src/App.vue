<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>

    <div id="demo">
      <form id="search">
        Search <input name="query" v-model="searchQuery">
      </form>
      {{msg}}
      <tableau
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </tableau>
    </div>

  </div>
</template>

<script>
  import Tableau from './components/Tableau.vue'
  import $ from 'jquery'

  export default {
    name: 'app',
    components: { Tableau },
    data() {
        return{
          msg:"vide",
          searchQuery: '',
          gridColumns: ['name', 'power'],
          gridData: [
            { name: 'Chuck Norris', power: Infinity },
            { name: 'Bruce Lee', power: 9000 },
            { name: 'Jackie Chan', power: 7000 },
            { name: 'Jet Li', power: 8000 }
          ]
        }
    },
    mounted() {
      $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET'
      }).then(function(data) {
        console.log(data)
      });
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
