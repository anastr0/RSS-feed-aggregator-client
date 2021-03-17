<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <b-progress class="w-100" variant="info" :max="maxLoadingTime" height=".3rem">
      <b-progress-bar :value="loadingTime"></b-progress-bar>
    </b-progress>
    <SearchBar v-on:get-feed="getFeed" />
    <RSSFeedTable v-if="queryDone" v-bind:feed="feed" />
    <DailyFeedTable />
  </div>
</template>

<script>
import SearchBar from "./RSSComponents/SearchBar.vue";
import RSSFeedTable from "./RSSComponents/RSSFeedTable.vue";
import DailyFeedTable from "./RSSComponents/DailyFeedTable.vue";
import { fetchRSSFeed, validated } from "../utils/fetchers";

export default {
  name: "RSSParentComponent",
  components: {
    SearchBar,
    RSSFeedTable,
    DailyFeedTable,
  },
  data() {
    return {
      feed: Array(),
      // resultsBackup is needed for frontend filtering of results by isactive checkbox
      queryDone: false,
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
    };
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval();

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++;
          }, 1000);
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false;
        }
      }
    },
  },
  created() {
    this.$_loadingTimeInterval = null;
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    getFeed: function(feedURL) {
      console.log(feedURL);
      // feedURL = "https://home.cern/api/news/news/feed.rss"

      if (validated(feedURL.trim())) {
        this.startLoading();
        fetchRSSFeed(feedURL.trim()).then((data) => {
          this.queryDone = true;
          this.feed = data.RSSFeedList;
        });
      }
    },
    startLoading: function() {
      this.loading = true;
      this.loadingTime = 0;
    },
    clearLoadingTimeInterval: function() {
      clearInterval(this.$_loadingTimeInterval);
      this.$_loadingTimeInterval = null;
    },
  },
};
</script>

<style></style>
