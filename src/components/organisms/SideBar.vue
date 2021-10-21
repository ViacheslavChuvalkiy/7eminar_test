<template>
  <div :class="$style.wrapper">
    <span :class="$style.filterVideo" @click = "toogleView">ВІДЕО</span>
    <div :class="$style.filter">
      <FilterBtn
        v-for="filter in filterList"
        :key="filter.id"
        :filterValue="filter.value"
        :filterText="filter.text"
        :filterChecked="filter.isChecked"
      />
    </div>
    <span :class="$style.filterTheme" @click = "toogleView">ТЕМИ</span>
    <div :class="$style.themes" >
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
    ThemeBtn,
  },
  methods: {
    toogleView(){
      console.log(event.currentTarget)
      let el = event.target.nextSibling;
      if (el.style.display === 'none'){
        el.style.display = 'flex';
      }
      else {
        el.style.display = 'none';
      }
    }
  }
}

</script>

<style lang="scss" module>
  @import "./src/assets/vars";
  @import "./src/assets/mixins";

  .wrapper {
    padding: 2rem 1rem;
    min-width: 40%;
    background-color: $white;


    .filter, .themes{
      @include flexColmCenter();
      padding: 1rem 0.5rem;
      transition: all 0.3s ease-in;
     }

    .filterVideo, .filterTheme{
      display: block;
      position: relative;
      padding: 1rem 1rem 1rem 3rem;
      border-radius: 0.8rem 0.8rem  0 0;
      letter-spacing: 0.1rem;
      background-color: $sideBar_option_bg;
      @include headText();
    }

    .filterVideo:after, .filterTheme:after{
      content: ' \142F';
      position: absolute;
      font-size: $fs-main;
      color: $black;
      right: 2rem;
      top: 0.75rem;
    }

    /*.filterVideo:before{*/
    /*  content: url("./src/assets/icons/video.svg");*/
    /*  position: absolute;*/
    /*  width: 1rem;*/
    /*  height: 1rem;*/
    /*  left: 1rem;*/
    /*}*/
  }

</style>