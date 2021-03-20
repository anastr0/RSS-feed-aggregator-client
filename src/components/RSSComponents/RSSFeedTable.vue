<template>
  <div id="rss-feed-table">
    <FeedTable
      v-if="itemsFetched"
      :feed="feed"
      :fieldTableId="feedTableId"
      :fields="fields"
    />
  </div>
</template>

<script>
import FeedTable from "./FeedTable.vue";

export default {
  name: "RSSFeedTable",
  components: {
    FeedTable,
  },
  props: {
    feed: Array,
  },
  computed: {
    itemsFetched() {
      return this.feed.length > 0;
    },
  },
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "Items",
          sortable: false,
        },
        {
          key: "pubDate",
          label: "published",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
        { key: "content", label: "content" },
      ],
      feedTableId: "rss-feed-results",
    };
  },
};
</script>
