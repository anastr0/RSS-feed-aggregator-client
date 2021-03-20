<template>
  <div id="daily-feed-table">
    <FeedTable
      v-if="itemsFetched"
      :feed="dailyFeed"
      :fieldTableId="feedTableId"
      :fields="fields"
    />
  </div>
</template>

<script>
import { fetchAggregatedRSSFeed, getFeedURLs } from "../../utils/fetchers";
import FeedTable from "./FeedTable.vue";

export default {
  name: "DailyFeedTable",
  components: {
    FeedTable,
  },
  computed: {
    itemsFetched() {
      return this.dailyFeed.length > 0;
    },
  },
  mounted: function() {
    this.$nextTick(function() {
      // fetch aggregated daily feed on load
      const feedURLs = getFeedURLs();
      if (feedURLs !== null) {
        // fetch aggregated feed only if feedURLs list is not empty
        fetchAggregatedRSSFeed(feedURLs).then((data) => {
          console.log(data.RSSFeedList);
          this.dailyFeed = data.RSSFeedList;
        });
      }
    });
  },
  data() {
    return {
      fields: [ 
        {
          key: "title",
          label: "Items",
        },
        {
          key: "pubDate",
          label: "published",
          sortable: true,
        },
        { key: "content", label: "content" },
      ],
      dailyFeed: [],
      feedTableId: "daily-feed-results"
    };
  },
};
</script>
