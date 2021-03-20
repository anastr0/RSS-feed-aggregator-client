<template>
  <div id="daily-feed-table">
    <FeedTable
      v-if="itemsMounted"
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
    itemsMounted() {
      return this.dailyFeed.length > 0;
    },
  },
  mounted: function() {
    this.$nextTick(function() {
      const feedURLs = getFeedURLs();
      if (feedURLs !== null) {
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
      feedTableId: "daily-feed-results",
      message: "",
    };
  },
};
</script>
