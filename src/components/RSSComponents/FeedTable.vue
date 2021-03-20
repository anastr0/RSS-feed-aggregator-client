<template>
  <b-container class="feed-table" fluid>
    <b-row align-h="center">
      <b-table
        hover
        v-bind:id="feedTableId"
        :current-page="currentPage"
        :per-page="perPage"
        :items="feed"
        :fields="fields"
      >
      <!-- custom width to published and content field-->
        <template #table-colgroup="scope">  
          <col
            v-for="field in scope.fields"
            :key="field.key"
            :style="{
              width:
                field.key === 'pubDate' || field.key === 'content'
                  ? '10px'
                  : '1000px',
            }"
          />
        </template>

        <!-- title field render with link to source -->
        <template #cell(title)="data">
          <a :href="`${data.item.link}`" class="link-info">{{
            data.item.title
          }}</a>
        </template>

        <!-- published date remove time and timezone data from string-->
        <template #cell(pubDate)="data">
          {{ data.item.pubDate.slice(0, 10) }}
        </template>

        <!-- content toggle -->
        <template #cell(content)="row">
          <b-button
            variant="outline-info"
            class="mb-2 content"
            @click="row.toggleDetails"
          >
            <b-icon icon="justify" aria-hidden="true"></b-icon>
          </b-button>
        </template>

        <template #row-details="row">
          <b-card>
            <b-row v-if="row.item.source" class="mb-2">
              <b-col sm="1" class="text-sm-right"><b>Source:</b></b-col>
              <b-col>{{ row.item.source }}</b-col>
            </b-row>
            <b-row v-if="row.item.description" class="mb-2">
              <b-col sm="1" class="text-sm-right"><b>Content:</b></b-col>
              <b-col
                ><span class="feed-content" v-html="row.item.description"></span
              ></b-col>
            </b-row>
          </b-card>
        </template>
      </b-table>

      <!-- pagination nav -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        :aria-controls="feedTableId"
        size="sm"
        limit="1"
        align="center"
      >
      </b-pagination>
      <div class="row-no">{{ this.rows }} feed items</div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "FeedTable",
  props: {
    feedTableId: String,
    feed: Array,
    fields: Array,
  },
  computed: {
    rows() {
      return this.feed.length;
    },
  },
  data() {
    return {
      perPage: 6,
      currentPage: 1,
    };
  },
};
</script>

<style>
.feed-table {
  margin-block-end: 1rem;
  width: inherit;
}

.feed-content {
  size: inherit;
}

img {
  max-width: 500px;
}
.row-no {
  padding: 8px;
}

.page-item.active .page-link {
  background-color: #3da3b8 !important;
  border-color: #3da3b8 !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0rem !important;
}
.btn.content {
  padding: 0.1rem 0.5rem;
}
</style>
