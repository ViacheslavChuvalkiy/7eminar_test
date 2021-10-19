<template>
  <label :class="$style.filterOption">
    <input
      type="radio"
      name="filter"
      :value="filterValue"
      :checked="filterChecked"
      @change="changeFilter"
    />
    <span>{{ filterText }}</span>
  </label>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    props: {
      filterValue: String,
      filterText: String,
      filterChecked: Boolean,
    },
    methods: {
      ...mapMutations(["changeActiveFilter"]),
      changeFilter() {
        this.changeActiveFilter(this.filterValue);
      },
    },
  };
</script>


<style lang="scss" module>

</style>