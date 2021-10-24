<template>
  <header>
    <div :class="$style.logo">
      <img src="../../assets/img/logo.png" alt="logo img">
    </div>
    <div :class="$style.info">
      <a href="mailto:info@kadroland.com">info@kadroland.com</a>
      <a href="tel:+380442245525">(044) 224-55-25</a>
    </div>
    <div :class="$style.menu">
      <ul>
        МІЙ КАБІНЕТ
        <div :class="$style.list">
          <MenuItem
            v-for="list in getUserMenu"
            :key="list.id"
            :listText="list.text"
            :value="list.value"
          />
        </div>
      </ul>
    </div>
  </header>
</template>
<script>

  import MenuItem from "../atoms/MenuItem";
  import {mapGetters} from "vuex";

  export default {
    components: {
      MenuItem,
    },
    computed: {
      ...mapGetters(["getUserMenu"]),
    }
  }

</script>
<style lang="scss" module>
  @import "./src/assets/vars";
  header {
    display: flex;
    width: 100%;
    background-color: $black;
    z-index: 999;
    .logo {
      padding: 1rem 0 0.3rem 1.5rem;
      width: 70%;
    }
    .info {
      padding: 1rem 0 0.5rem 1.5rem;
      width: 30%;
      a {
        line-height: 2;
        vertical-align: sub;
        padding: 0 1rem;
        text-decoration: none;
        color: $links-btn;
      }
    }
    .menu {
      padding: 1rem 0 0.5rem 1.5rem;
      width: 20%;
      ul {
        width: 75%;
        text-align: center;
        margin: 0 2rem 0 0;
        float: right;
        line-height: 2.2rem;
        letter-spacing: 1.5px;
        font-size: $fs-main;
        font-weight: 700;
        color: $white;
        border: 1px solid $white;
        border-radius: 15px;
        position: relative;
        cursor: pointer;
        &:hover{
          color: $links-btn;
          background-color: $white;
        }
        &:after{
          content: '\003E';
          position: absolute;
          right: 1rem;
          top: 0;
        }
      }

      .list {
        display: none;
        width: 100%;
        position: absolute;
        color: $white;
        background-color: $black;
      }
    }
  }
</style>