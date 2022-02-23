<template>
  <div class="minicart">
    <ul v-if="$store.state.productsInCart.length > 0">
      <cart-item
        :key="product.id"
        v-for="(product, index) in $store.state.productsInCart"
        :product="product"
        :index="index"
        :productsInCart="$store.state.productsInCart"
        @click="countTotal"
      ></cart-item>
    </ul>
    <strong class="cart__total">Total: ${{countTotal()}}</strong>
  </div>
</template>

<script>
import totalPriceMixin from "../mixins/totalPriceMixin";
import CartItem from "./CartItem";

export default {
  components: {
    CartItem
  },
  mixins: [totalPriceMixin]
}
</script>