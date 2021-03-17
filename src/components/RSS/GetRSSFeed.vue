<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <SearchBar v-on:get-feed="getFeed" />
    <div>
    <FeedTable v-if="queryDone" v-bind:feed="feed" />
    </div>
    <div>
    <DailyFeedTable />
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import FeedTable from "./FeedTable.vue";
import DailyFeedTable from "./DailyFeedTable.vue";
import { fetchRSSFeed } from "../../utils/fetchers";

export default {
  name: "GetRSSFeed",
  components: {
    SearchBar,
    FeedTable,
    DailyFeedTable
  },
  data() {
    return {
      feed: Array,
      // resultsBackup is needed for frontend filtering of results by isactive checkbox
      queryDone: false,
    };
  },
  methods: {
    getFeed: function(feedURL) {
      console.log(feedURL);
      fetchRSSFeed(feedURL).then((data) => {
        // console.log(data);
        this.queryDone = true;
        this.feed = data.RSSFeedList
        // console.log(this.feed)
      });
      
    },
  },
};
</script>

<style></style>
