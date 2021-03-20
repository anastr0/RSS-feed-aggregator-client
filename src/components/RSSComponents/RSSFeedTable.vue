<template>
  <FeedTable :feed="feed" :fieldTableId="feedTableId" :fields="fields" />
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
  data() {
    return {
      fields: [
        {
          key: "title",
          label: "RSS Feed",
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
