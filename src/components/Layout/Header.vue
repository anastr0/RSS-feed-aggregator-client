<template>
  <b-navbar type="light" variant="faded">
    <b-navbar-brand href="#" active
      ><h4><b>RSS Feed Aggregator</b></h4></b-navbar-brand
    >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-nav-item
          href="https://github.com/anaswaratrajan/RSS-feed-aggregator-client"
          active
        >
          <b-icon icon="github" aria-hidden="true"></b-icon
        ></b-nav-item>
      </b-nav-form>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>
