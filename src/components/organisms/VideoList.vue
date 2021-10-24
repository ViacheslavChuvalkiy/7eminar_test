<template>
  <div :class="[getPageView === 'grid'? $style.wrapperGrid : $style.wrapperList]">
    <VideoItem
      v-for="video in videoList"
      :key="video.id"
      :id="video.id"
      :VideoTitle="video.title"
      :videoAccess="video.access"
      :videoImg="video.covers.main"
      :videoSale="video.options.sale"
      :pageView="getPageView"
    />
  </div>
</template>

<script>

  import VideoItem from "../molecules/VideoItem";
  import {mapGetters} from "vuex";

  export default {
    components: {
      VideoItem,
    },
    computed: {
      ...mapGetters(["videoList", "getPageView"]),
    }
  }
</script>

<style lang="scss" module>
  @import "./src/assets/vars";
  .wrapperGrid {
    display: grid;
    padding: 5rem 0 3rem 0;
    min-height: auto;
    height: auto;
    grid-template-columns: repeat(3, 20rem);
    grid-auto-rows: minmax(25rem, auto);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    text-align: left;
  }
  .wrapperList {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: auto;
    min-height: auto;
    padding: 3rem 0 1rem 2rem;
  }

</style>