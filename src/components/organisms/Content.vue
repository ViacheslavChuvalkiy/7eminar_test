<template>
  <div :class="$style.container">
    <SideBar/>
<!--    <div :class="$style.wrapper">-->
<!--      <Header />-->
<!--&lt;!&ndash;      <VideoList />&ndash;&gt;-->
<!--    </div>-->
<!--    <Footer />-->
  </div>
</template>

<script>
// import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
// import VideoList from "./VideoList";
//
// import Footer from "./Footer.vue";

export default {
  components: {
    // Header,
    SideBar,
    // VideoList,
    // Footer,
  },
};
</script>

<style lang="scss" module>
@import "src/assets/style.scss";
.container {
  display: flex;
  width: calc(100vw - (100vw - 100%));
  height: 100vh;

}
</style>
