<template>
  <div :class="$style.container">
    <SideBar/>
    <Header />
    <div :class="$style.wrapper">
<!--      <VideoList />-->
    </div>
<!--    <Footer />-->
  </div>
</template>

<script>
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
// import VideoList from "./VideoList";
//
// import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    SideBar,
    // VideoList,
    // Footer,
  },
};
</script>

<style lang="scss" module>
@import "src/assets/style.scss";
.container {

}
</style>
