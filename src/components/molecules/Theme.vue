<template>
  <li :class="$style.themeOption"
      :value="themeValue"
      @click="clickLink">
    {{themeInfo}}
  </li>

</template>

<script>
  import {mapMutations, mapGetters} from "vuex";

  export default {
    props: {
      themeValue: String,
      themeText: String,
    },
    computed: {
      ...mapGetters(["getThemeCount"]),
      themeInfo() {
        if (this.themeValue === 'name' || this.themeValue === 'email' || this.themeValue === 'password' || this.themeValue === 'deleteUser') {
          return this.themeText;
        }
        let c = this.getThemeCount(this.themeValue);
        return this.themeText + "(" + c + ")";
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

  .themeOption {
    padding: 0.5rem;
    font-weight: 300;
    line-height: 1.2rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
</style>