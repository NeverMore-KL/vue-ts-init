<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  beforeCreate() {
    console.log("beforeCreate");
  }
  created() {
    console.log("created");
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#id,
html,
body {
  height: 100%;
}
</style>
