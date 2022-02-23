<template>
  <div class="t-fav">
    <navbar></navbar>
    <h2 class="text-center">{{ title }}</h2>

    <product-list
        :products="$store.state.productsInFav"
    />

  </div>


</template>

<script>
import Navbar from "../components/Navbar.vue";
import ProductList from "../components/ProductList";

export default {
  components: {
    Navbar,
    ProductList
  },
  data() {
    return {
      title: "Favorites page",
    }
  },
  provide: {
    removeFromFavShow: true,
    addToFavShow: false
  },
}
</script>