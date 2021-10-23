<template>
  <div :class="$style.wrapper">
    <span :class="$style.videoGridView"></span>
    <span :class="$style.videoListView"></span>
  </div>
</template>

<script>
</script>

<style lang="scss" module>
  @import "./src/assets/mixins";
  .wrapper {
    @include flexRowCenter();
    padding: 0 0.5rem;
    .videoListView {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.3rem 0.4rem;
      background-image: url("../../assets/img/grid.png");
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
    .videoGridView {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.3rem 0.4rem;
      background-image: url("../../assets/img/list.png");
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    }
  }

</style>