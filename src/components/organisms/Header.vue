<template>
  <div :class="$style.wrapper">
    <h1>{{getActiveTheme}}</h1>
    <VideoSearch/>
    <HeaderMenu/>
  </div>
</template>

<script>

  import VideoSearch from "../atoms/VideoSearch";
  import { mapGetters } from "vuex";

  export default {
    components: {
      VideoSearch
    },
    computed:{
     ...mapGetters("getActiveTheme")
    }

  }
</script>

<style lang="scss" module>

</style>