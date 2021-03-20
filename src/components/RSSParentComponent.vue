<template>
  <div>
    <!-- Progress bar -->
    <b-progress
      class="w-100"
      variant="info"
      :max="maxLoadingTime"
      height=".3rem"
    >
      <b-progress-bar :value="loadingTime"></b-progress-bar>
    </b-progress>

    <!--Searchbar -->
    <SearchBar v-on:get-feed="getFeed" />

    <!-- FeedCard with scrollspy for feed tables-->
    <b-card v-if="showFeedCard" no-body>
      <b-nav pills small slot="header" v-b-scrollspy:nav-scroller>
        <b-nav-item href="#rss-feed-table">Search feed</b-nav-item>
        <b-nav-item href="#daily-feed-table">Daily feed</b-nav-item>
      </b-nav>
      <b-card-body
        id="nav-scroller"
        ref="content"
        style="position:relative; height:438px; width: fit-content; overflow-y:scroll;"
      >
        <RSSFeedTable v-if="queryDone" v-bind:feed="feed" />
        <DailyFeedTable />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import SearchBar from "./RSSComponents/SearchBar.vue";
import RSSFeedTable from "./RSSComponents/RSSFeedTable.vue";
import DailyFeedTable from "./RSSComponents/DailyFeedTable.vue";
import { fetchRSSFeed, validated, getFeedURLs } from "../utils/fetchers";

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
  computed: {
    showFeedCard() {
      const feedURLs = getFeedURLs();
      return this.queryDone || feedURLs !== null;
    },
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    getFeed: function(feedURL) {
      // fetch RSS feed for given feedURL query
      if (validated(feedURL.trim())) {
        this.startLoading();
        fetchRSSFeed(feedURL.trim()).then((data) => {
          this.feed = data.RSSFeedList;
          if(this.feed.length > 0) {
            this.queryDone = true;
            return 
          } else {
            alert("Error fetching feed")
          }
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

<style scoped>
.card {
  width: 90vw;
  margin: auto;
}

.card-body {
  padding: 0 !important;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #3da3b8;
}
</style>
