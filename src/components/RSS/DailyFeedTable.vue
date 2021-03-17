<template>
  <b-container v-if="itemsMounted" fluid>
    <b-row align-h="center">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="daily-feed-results"
      ></b-pagination>
      <b-table
        hover
        id="daily-feed-results"
        :current-page="currentPage"
        :per-page="perPage"
        :items="this.items"
        :fields="fields"
      ></b-table>
    </b-row>
  </b-container>
</template>

<script>
import { fetchAggregatedRSSFeed } from "../../utils/fetchers"

export default {
  name: "DailyFeedTable",
  computed: {
    rows() {
      return this.dailyFeed.length;
    },
    items() {
      return this.dailyFeed
    },
    itemsMounted () {
        return this.dailyFeed.length>0
    }
  },
  mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
    fetchAggregatedRSSFeed().then((data) => {
      console.log(data.RSSFeedList.length)
        this.dailyFeed = data.RSSFeedList
    })
  })
},
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      perPage: 3,
      currentPage: 1,
      fields: [
        {
          key: "title",
          label: "Daily Feed",
          sortable: false,
        },
        {
          key: "pubDate",
          label: "pubDate",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
      ], dailyFeed: []
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
