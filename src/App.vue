<template>
  <div id="app">
    <Header />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <GetRSSFeed />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'
import GetRSSFeed from './components/RSS/GetRSSFeed.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    GetRSSFeed
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
}
</style>
