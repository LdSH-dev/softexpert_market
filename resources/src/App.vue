<template>
  <div id="app">
    <MarketNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import MarketNavbar from './components/Core/Navbar.vue'

export default {
  name: 'App',
  components: {
    MarketNavbar
  }
}

</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  
}
body{
  background-color: white;
}
</style>
