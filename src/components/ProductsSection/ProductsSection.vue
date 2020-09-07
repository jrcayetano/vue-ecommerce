<template>
  <div class="product-section">
    <h1>Product</h1>
    <div class="product-list-wrapper">
      <Product
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import http from "axios";
export default {
  name: "ProductsSection",
  components: {
    Product,
  },
  data: function() {
    return { products: [] };
  },
  computed: {},
  mounted() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      return http
        .get("http://localhost:3001/products")
        .then((response) => (this.products = [...response.data]));
    },
  },
};
</script>

<style lang="scss">
.product-list-wrapper {
  display: grid;
  grid-template-columns: 25% 25% 25%;
  justify-content: center;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
}
</style>
