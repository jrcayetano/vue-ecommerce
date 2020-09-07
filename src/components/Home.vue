<template>
  <fragment>
    <Header title="hola" />
    <div class="content-main">
      <Sidenav />
      <router-view></router-view>
    </div>
  </fragment>
</template>

<script>
import Header from "./Header.component";
import Sidenav from "./Sidenav.component";
import { Fragment } from "vue-fragment";

export default {
  name: "Home",
  components: {
    Header,
    Sidenav,
    Fragment,
  },
};
</script>

<style lang="scss">
.content-main {
  height: 100%;
  display: grid;
  grid-template-columns: 15% auto;
  justify-items: stretch;
}
</style>
