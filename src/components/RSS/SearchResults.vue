<template>
  <b-container class="search-bar" fluid> 
    <b-row>     
        <b-col sm="10">
            <b-form-input v-model="feedUrl" :id="url" placeholder="Enter RSS feed link"></b-form-input>
        </b-col>
        <b-col sm="2">
            <b-button class="search-button" variant="dark">Get feed</b-button>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "SearchBar",
    props: {
        feed: []
    }
  }
</script>

<style scoped> 

</style>