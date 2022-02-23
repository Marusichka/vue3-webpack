<template>
  <li class="cart__line">
    <div class="cart__line-info-wrapper">
      <div class="cart__line-name">{{index+1}} - {{ product.name }}</div>
      <div class="cart__line-qty text-right">
        Qty: {{ product.qty }}
        <br>
        {{ product.price }}
      </div>
      <div class="cart__line-btns text-right">
        <my-button @click="$store.commit('addToCartOrIncrement', product.id)">+</my-button>&nbsp;
        <my-button @click="$store.commit('removeCartItemOrDecrement', [product.id, 'decrease'])">-</my-button>&nbsp;
        <my-button @click="$store.commit('removeCartItemOrDecrement', [product.id, 'delete'])">X</my-button>
      </div>
    </div>
  </li>
</template>

<script>
import MyButton from "./UI/MyButton";

export default {
  components: {
    MyButton
  },
  props: {
    product: {
      type: Object,
      required: false
    },
    index: {
      type: Number,
      required: false
    },
  }
}
</script>