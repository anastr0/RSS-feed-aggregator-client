<template>
  <b-container class="search-bar" fluid> 
    <b-row>     
        <b-col sm="10">
            <b-form-input v-model="feedUrl" placeholder="Enter RSS link"></b-form-input>
        </b-col>
        <b-col sm="2">
            <b-button class="search-button" variant="dark" v-on:click="consoleURL"> feed</b-button>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import fetchRSSFeed from "../../utils/fetchRSS"

  export default {
    name: "SearchBar",
    data() {
      return {
        feedUrl: '',
        feed: []
      }
    },
    methods: {
        consoleURL () {            
            console.log(fetchRSSFeed)
        }
    }
  }
</script>

<style scoped> 
.search-bar {
    padding: 50px;
}
.search-button {
    width: inherit;
}
</style>