<template>
  <div class="sidenav">
    <b-nav vertical>
      <b-nav-item :href="'/home/products'">Products</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
};
</script>

<style lang="scss" scoped>
.sidenav {
  background-color: #17a2b8 !important;
}
.sidenav {
  .nav-item a {
    color: white;
  }
}
</style>
