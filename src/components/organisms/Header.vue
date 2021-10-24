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
      <ul @click="toogleShow">
        МІЙ КАБІНЕТ
      <transition name="list">
          <div :class="$style.list" v-if="show">
            <MenuItem
              v-for="list in getUserMenu"
              :key="list.id"
              :listText="list.text"
              :value="list.value"
            />
          </div>
       </transition>
      </ul>
    </div>
  </header>
</template>
<script>

  import MenuItem from "../atoms/MenuItem";
  import {mapGetters} from "vuex";

  export default {
    data: () => ({
      show: false
    }),
    components: {
      MenuItem,
    },
    computed: {
      ...mapGetters(["getUserMenu"]),
    },
    methods: {
      toogleShow(){
        console.log('kdc')
        this.show = !this.show;
      }
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
        width: 100%;
        position: absolute;
        top: 2.5rem;
        color: $white;
        background-color: $black;
      }
    }
  }

  /* list transition*/
  .list-enter-from{
    opacity: 0;
  }
  .list-enter-to{
    opacity: 1;
  }
  .list-enter-active{
      transition: all 0.5s;
  }
  .list-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .list-leave-to{
    opacity: 0;
  }
  .list-leave-active{
    transition: all 0.5s;
  }
</style>