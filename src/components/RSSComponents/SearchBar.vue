<template>
  <b-container class="search-bar" fluid>
    <b-row>
      <b-col sm="8">
        <input
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          v-model="feedURL"
          placeholder="Enter RSS feed link"
        />
      </b-col>
      <b-col sm="2">
        <button
          type="button"
          class="search-button btn btn-info btn-block"
          v-on:click="$emit('get-feed', feedURL)"
        >
          get feed
        </button>
      </b-col>
      <b-col sm="2">
        <button
          type="button"
          class="search-button btn btn-outline-info btn-block"
          v-on:click="setURLInCookie"
        >
          + daily feed
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { addURL, validated } from "../../utils/fetchers";

export default {
  name: "SearchBar",
  data() {
    return {
      feedURL: "",
    };
  },
  methods: {
    consoleURL: function() {
      console.log("haha");
    },
    setURLInCookie: function(event) {
      event.preventDefault();
      if (validated(this.feedURL)) {
        addURL(this.feedURL);
      } else {
        alert("Enter a URL");
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  padding: 30px 15px;
  width: 90vw;
  box-shadow: 0px 5px 17px 5px rgb(0 0 0 / 7%);
  margin: 2rem 1rem;
  display: inline-block;
}

/*
.search-button {
  width: inherit;
}*/
</style>
