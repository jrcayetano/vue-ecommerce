<template>
  <fragment>
    <b-card
      :title="product.name"
      :img-src="product.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ product.description }}
      </b-card-text>

      <b-button v-on:click="onAddToCart" variant="primary">Buy</b-button>
    </b-card>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import { mapActions } from "vuex";
export default {
  name: "Product",
  components: {
    Fragment,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      addToCart: "addToCart",
    }),
    onAddToCart() {
      const { name, description, image, price } = this.product;
      const product = { name, description, image, price };
      this.addToCart({ product });
    },
  },
};
</script>

<style lang="scss" scoped></style>
