<template>
  <div :class="$style.videoSearch">
    <input
      type="text"
      v-model="value"
      @change="changeSearch"
    />
    <span></span>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    data: () => ({
      value: "",
    }),
    methods: {
      ...mapMutations(["changeSearchInput"]),
      changeSearch(){
        this.changeSearchInput(this.value)
      }
    }

  }
</script>

<style lang="scss" module>
  @import "src/assets/style.scss";
  .videoSearch {


  }
</style>