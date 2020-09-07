<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Vue-ecommerce</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/home">Home</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <ShoppingCart />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import ShoppingCart from "./ShoppinCart";
export default {
  name: "Header",
  components: {
    ShoppingCart,
  },
  props: {
    title: String,
  },
  data: function() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "normalize-scss";
.header {
  background-color: gray;
}
svg {
  color: white;
}
</style>
