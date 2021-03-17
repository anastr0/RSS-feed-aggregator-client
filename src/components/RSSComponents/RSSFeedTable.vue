<template>
  <b-container class="feed-table" fluid>
    <b-row align-h="center">
      <b-table
        hover
        id="feed-results"
        :current-page="currentPage"
        :per-page="perPage"
        :items="this.items"
        :fields="fields"
        outlined
      >
        <template #cell(pubDate)="data">
          {{ data.item.pubDate.slice(0, 10) }}
        </template>
        <template #cell(link)="data">
          <a :href="`${data.item.link}`">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up-right-square"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              /></svg
          ></a>
        </template>

        <template #cell(content)="row">
          <b-button size="sm" @click="row.toggleDetails">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Title:</b></b-col>
              <b-col>{{ row.item.source }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Title:</b></b-col>
              <b-col>{{ row.item.guid }}</b-col>
            </b-row>
            <b-row class="mb-2">
              <b-col sm="3" class="text-sm-right"><b>Content:</b></b-col>
              <b-col
                ><span class="feed-content" v-html="row.item.description"></span
              ></b-col>
            </b-row>
          </b-card>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="feed-results"
        size="sm"
        limit="1"
      ></b-pagination>
      <div class="row-no">{{ this.rows }} feed items</div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FeedTable",
  props: {
    feed: Array,
  },
  computed: {
    rows() {
      return this.feed.length;
    },
    items() {
      return this.feed;
    },
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
          key: "link",
          label: "Source",
        },
        {
          key: "pubDate",
          label: "published",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
        { key: "content", label: "content" },
      ],
    };
  },
  methods: {
    consoleURL() {
      console.log("Hahha");
    },
  },
};
</script>

<style>
.feed-items {
  width: 80vw;
}

.feed-table {
  width: 90vw;
  box-shadow: 0px 5px 17px 5px rgb(0 0 0 / 7%);
  margin: 2rem 1rem;
  display: inline-block;
}
img {
  max-width: 500px;
}
.row-no {
  padding: 8px;
}
</style>
