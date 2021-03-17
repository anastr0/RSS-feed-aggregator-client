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
          placeholder="Enter RSS link"
        />
      </b-col>
      <b-col sm="2">
        <button
          type="button"
          class="search-button btn btn-secondary btn-block"
          v-on:click="$emit('get-feed', feedURL)"
        >
          get feed
        </button>
      </b-col>
      <b-col sm="2">
        <button
          type="button"
          class="search-button btn btn-secondary btn-block"
          v-on:click="setURLInCookie"
        >
          + daily feed
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { addURL } from "../../utils/fetchers";

export default {
  name: "SearchBar",
  data() {
    return {
      feedURL: "",
    };
  },
  methods: {
    consoleURL: function () {
      console.log("haha");
    },
    setURLInCookie: function (event) {
      alert("Setting cookie "+ this.feedURL)
      event.preventDefault()
      addURL(this.feedURL)
    }
  },
};
</script>

<style scoped>
.search-bar {
  padding: 20px;
  width: 90vw;
}

/*
.search-button {
  width: inherit;
}*/
</style>
