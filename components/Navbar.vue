<template>
  <nav class="nav">
    <ul class="navigation">
      <li class="navigation__item">
        <my-button @click="$router.push('/')"><b>Home</b></my-button>
      </li>
      <li class="navigation__item">
        <router-link to="/cart">Cart</router-link>
      </li>
      <li class="navigation__item">
        <router-link to="/favorites">Favorites</router-link>
      </li>
    </ul>

    <!--    Cart icon   -->
    <div @click="isMinicartOpen = !isMinicartOpen" class="cart-icon">
      <img :src="src" alt="cart icon" />
      <strong>{{$store.state.productsInCart.length}}</strong>
    </div>

    <!--    MiniCart    -->
    <mini-cart v-if="isMinicartOpen"></mini-cart>
  </nav>
</template>

<script>
import MyButton from "./UI/MyButton";
import MiniCart from "./MiniCart";

export default {
  components: {
    MyButton,
    MiniCart
  },
  data() {
    return {
      isMinicartOpen: false,
      src: require('../assets/img/cart-icon.png')
    }
  },
  props: {
    productsInCart: {
      type: Array,
      required: false
    },
    cartQty: {
      type: Number,
      required: false
    }
  }
}
</script>