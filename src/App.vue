<template>
  <div id="app">
    <Content/>
  </div>
</template>

<script>
  import Content from "./components/organisms/Content.vue";
  import { mapMutations } from "vuex";

export default {
  components: {
    Content,
  }
  ,methods: {
    ...mapMutations(["getPageViewFromLocalStorage"]),
  },
  mounted() {
    if (localStorage.tasksList) {
      this.getPageViewFromLocalStorage();
    }
  },
}
</script>

<style>

  #app{
    margin: 0;
    padding: 0;
  }
</style>
