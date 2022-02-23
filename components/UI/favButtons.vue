<template>
  <div class="fav-buttons">
    <my-button
        class="fav-button"
        v-if="this.addToFavShow"
        @click="$store.commit('addToFav', productId)"
        v-bind:class="isProductInFav(productId)">
      Add to favorites
    </my-button>
    <my-button
        class="fav-button"
        v-if="this.removeFromFavShow"
        @click="$store.commit('removeFromFav', productId)">
      Remove from favorites
    </my-button>
  </div>

</template>

<script>
import MyButton from "./MyButton";

export default {
  inject: ['addToFavShow', 'removeFromFavShow'],
  components: {
    MyButton
  },
  props: {
    productId: {
      type: Number,
      required: true
    }
  },

  methods: {
    isProductInFav(id) {
      let isInFavList = this.$store.state.productsInFav.findIndex( item => item['id'] === id );
      return isInFavList > -1 ? 'disabled' : '';
    }
  }
}
</script>
