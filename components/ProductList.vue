<template>
  <ul v-if="products.length > 0" class="product-grid">
    <ProductItem
        :product="product"
        :key="product.id"
        v-for="product in products"
    />
  </ul>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>