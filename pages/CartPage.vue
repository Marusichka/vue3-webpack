<template>
  <div class="t-cart">
    <navbar></navbar>
    <h2 class="text-center">{{ title }}</h2>
    <div
        class="cart-page__items"
        v-if="$store.state.productsInCart.length > 0"
    >
      <ul>
        <cart-item
            :key="product.id"
            v-for="(product, index) in $store.state.productsInCart"
            :product="product"
            :index="index"
            :productsInCart="$store.state.productsInCart"
        ></cart-item>
      </ul>
      <strong class="cart__total">Total: ${{countTotal()}}</strong>
    </div>

    <p v-else>You have no products in your cart</p>
  </div>

</template>

<script>
import Navbar from "../components/Navbar.vue";
import CartItem from "../components/CartItem";
import totalPriceMixin from "../mixins/totalPriceMixin";

export default {
  components: {
    Navbar,
    CartItem
  },
  mixins: [totalPriceMixin],
  data() {
    return {
      title: "Cart page",
    }
  }
}
</script>


