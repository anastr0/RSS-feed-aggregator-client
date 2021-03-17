<template>
  <div id="app">
    <Header />
    <RSSParentComponent />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Footer from './components/Layout/Footer.vue'
import RSSParentComponent from './components/RSSParentComponent.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    RSSParentComponent
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
