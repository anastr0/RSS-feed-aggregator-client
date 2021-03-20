<template>
  <div id="app">
    <Header />
    <RSSParentComponent />
  </div>
</template>

<script>
import Header from "./components/Layout/Header.vue";
import RSSParentComponent from "./components/RSSParentComponent.vue";

export default {
  name: "app",
  components: {
    Header,
    RSSParentComponent,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
}

.col {
  max-width: 70vw;
}

.container-fluid {
  width: 90vw;  
}

.shadows {
  box-shadow: 0px 5px 17px 5px rgb(0 0 0 / 7%);
}

a {
    color: #016378;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: #efefef;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #979797;
}
</style>
