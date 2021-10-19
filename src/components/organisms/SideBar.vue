<template>
  <div :class="$style.wrapper">
    <div :class="$style.filter">
      <FilterBtn
        v-for="filter in filterList"
        :key="filter.id"
        :filterValue="filter.value"
        :filterText="filter.text"
        :filterChecked="filter.isChecked"
      />
    </div>
    <div :class="$style.themes">
      <ThemeBtn
        v-for="theme in themesList"
        :key="theme.id"
        :themeValue="theme.value"
        :themeText="theme.text"
      />
    </div>
  </div>
</template>

<script>

  import FilterBtn from "../molecules/Filter";
  import ThemeBtn from "../molecules/Theme";
  import { mapGetters } from "vuex";

export default{
  computed: {
    ...mapGetters(["filterList", "themesList"]),
  },
  components: {
    FilterBtn,
    ThemeBtn
  },
}

</script>

<style lang="scss" module>

</style>