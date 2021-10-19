<template>
  <li :class="$style.themeOption"
      value="themeValue"
      @click="clickLink">
      {{themeInfo}}
  </li>

</template>

<script>
  import { mapMutations, mapGetters } from "vuex";

  export default {
    props: {
      themeValue: String,
      themeText: String,
    },
    computed: {
      ...mapGetters(["getThemeCount"]),
      themeInfo(){
        return this.themeText + "(" + this.getThemeCount + ")";
      }
    },
    methods: {
      ...mapMutations(["changeActiveTheme"]),
      clickLink() {
        this.changeActiveTheme(this.themeValue);
      },
    },
  };
</script>


<style lang="scss" module>

</style>