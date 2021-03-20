<template>
  <b-container class="search-bar shadows" fluid>
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
    <b-row>
      <div class="example">
        Eg. https://home.cern/api/news/news/feed.rss
      </div></b-row
    >
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
      if (validated(this.feedURL.trim())) {
        addURL(this.feedURL.trim());
      }
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-block: 3rem;
  padding: 30px 15px;
  width: 90vw;
  border: 0.1rem solid #dee2e6;
  border-radius: 0.25rem;
}

.example {
  padding: 5px 20px;
  color: grey;
  font-size: 14px;
}
</style>
