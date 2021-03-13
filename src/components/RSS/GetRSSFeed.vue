<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <SearchBar />
    <SearchResults />
  </div>
</template>

<script>
import SearchBar from 'SearchBar.vue'
import SearchResults from 'SearchResults.vue'

export default {
  name: 'GetRSSFeed',
  components: {
    SearchBar,
    SearchResults
  }
}
</script>

<style>
</style>
