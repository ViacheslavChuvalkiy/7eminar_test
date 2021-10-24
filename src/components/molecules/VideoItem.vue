<template>
  <div :class="[pageView === 'grid'? $style.gridStyle : $style.listStyle]">
    <div :class="$style.imgBlock" :style="`background-image: url( ${videoImg})`"></div>
    <p>{{VideoTitle}}</p>
    <button :class="$style.videoSaleBtn" v-if="videoSale">ПРИДБАТИ</button>
    <button :class="$style.videoShowBtn" v-else>ДИВИТИСЬ</button>
  </div>
</template>

<script>

  export default {
    props: {
      id: Number,
      VideoTitle: String,
      videoAccess: Boolean,
      videoImg: String,
      videoSale: Boolean,
      pageView: String,
    },
  };
</script>

<style lang="scss" module>
  @import "./src/assets/vars";
  .gridStyle, .listStyle {
    p {
      height: 5rem;
      overflow: hidden;
      margin: 1rem 0 3rem 0;
      padding: 0 2rem 0 1rem;
      font-size: 1.5rem;
      line-height: 1.7rem;
      font-weight: 400;
    }
    .videoShowBtn, .videoSaleBtn {
      display: block;
      position: relative;
      margin: 0 auto;
      width: 15rem;
      padding: 0.5rem 1rem;
      box-sizing: border-box;
      border-radius: 1rem;
      letter-spacing: 2px;
      font-size: $fs-small;
      font-weight: 700;
      cursor: pointer;
    }
    .videoShowBtn:hover, .videoSaleBtn:hover {
      background-color: $hover-btn;
    }
    .videoShowBtn {
      border: 1px solid $border;
      &:after {
        content: url("../../assets/img/arrow.png");
        position: absolute;
        top: -0.2rem;
        right: -0.1rem;
      }
      &:hover {
        &:after {
          opacity: 0.5;
        }
      }
    }
    .videoSaleBtn {
      border: 2px solid $active;
      background-color: $active;
      color: $white;
      &:after {
        content: '\003E';
        position: absolute;
        color: $white;
        top: 0;
        font-size: $fs-large;
        right: 1rem;
      }
      &:hover {
        border: 2px solid $hover;
        background-color: $hover;
      }
    }
  }

  .gridStyle {
    .imgBlock {
      height: 22rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  .listStyle {
    display: inline-block;
    position: relative;
    padding: 2rem 0;
    .imgBlock {
      display: inline-block;
      width: 10rem;
      height: 10rem;
      background-size: cover;
      background-repeat: no-repeat;
    }
    p{
      display: inline-block;
      margin: 0 1rem 6rem 1rem;
      height: auto;
      max-width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 3.5rem;
    }
    .videoSaleBtn, .videoShowBtn{
      display: inline-block;
      position: absolute;
      left: 20rem;
      bottom: 3rem;
    }
  }

</style>