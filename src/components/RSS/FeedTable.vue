<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-table
        hover
        id="feed-results"
        :current-page="currentPage"
        :per-page="perPage"
        :items="this.items"
        :fields="fields"
      ></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="feed-results"
      ></b-pagination>
    </b-row>
  </b-container>
</template>

<script>
// import fetcher from "../../utils/fetchers"

export default {
  name: "FeedTable",
  props: {
    feed: Array
  },
  computed: {
    rows() {
      return this.feed.length;
    },
    items() {
      return this.feed
    }
  },
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      perPage: 3,
      currentPage: 1,
      fields: [
        {
          key: "title",
          label: "RSS Feed",
          sortable: false,
        },
        {
          key: "pubDate",
          label: "pubDate",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
      ]
    };
  },
  methods: {
    consoleURL() {
      console.log("Hahha");
    },
  },
};
</script>

<style scoped>
.feed-items {
  width: 80vw;
}
</style>
