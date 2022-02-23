<template>
  <li class="product-grid__item">
    <img :src="this.src" :alt="product.name" />
    <p>
      {{ product.name }} - <strong>{{ product.price }}</strong>
    </p>
    <my-button @click="$store.commit('addToCartOrIncrement', product.id)">Add to cart</my-button>

    <fav-buttons :productId="product.id"></fav-buttons>
  </li>
</template>

<script>
import MyButton from "./UI/MyButton";
import favButtons from "./UI/favButtons";

export default {
  components: {
    MyButton,
    favButtons
  },
  data() {
    return {
      src: require('../assets/img/beer.jpeg') // dummy img as api blocks the default ones
    }
  },
  props: {
    index: {
      type: Object,
      required: false
    },
    product: {
      type: Object,
      required: false
    }
  }
}
</script>