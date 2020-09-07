<template>
  <div>
    <b-button variant="info" v-on:click="clickShippongCart">
      <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
      <b-badge variant="light"> {{ shoppingList.length }}</b-badge>
    </b-button>
    <div
      class="shopping-cart-list"
      v-if="shoppingList && shoppingList.length && shoppingList.length > 0"
    >
      <span v-for="item in shoppingList" :key="item.name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ShoppingCart",
  methods: {
    clickShippongCart: function() {
      console.log("clicked shopping cart");
    },
  },
  computed: {
    ...mapGetters({ shoppingList: "shoppingCart" }),
  },
};
</script>
