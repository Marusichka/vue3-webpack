<template>
  <div class="t-home">
    <navbar></navbar>
    <h2 class="text-center">{{ title }}</h2>
      <product-list
          v-if="!isProductsLoading"
          :products="products"
      />
      <div class="text-center" v-else>Processing...</div>
    <pagination
        :page="page"
        :totalPages="totalPages"
        :pageStart="pageStart"
        :pageEnd="pageEnd"
        :isProductsLoading="isProductsLoading"
        @changePage="changePage"
    >
    </pagination>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from 'vuex';
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar.vue";
import Pagination from "../components/UI/Pagination";

export default {
  components: {
    ProductList,
    Navbar,
    Pagination
  },
  data() {
    return {
      title: "Products",
      page: 1,
      pageStart: 1,
      pageEnd: 5,
      limit: 8,
      totalPages: 0,
      totalProducts: 180,
      isProductsLoading: false
    }
  },

  methods: {
    async fetchProducts() {
      try {
        this.isProductsLoading = true;
        const response = await axios.get("https://api.sampleapis.com/beers/ale" , {
        });

        this.totalPages = Math.ceil(this.totalProducts / this.limit)
        const productsOffset = (this.page - 1) * this.limit;
        const segmentArray = response.data.slice(productsOffset, productsOffset+this.limit);
        this.$store.commit('setProducts', segmentArray)
      }
      catch (e) {
        alert("fetchProducts ERROR")
      } finally {
        this.isProductsLoading = false;
      }
    },

    changePage(pageNumber) {
      this.page = pageNumber;
    }
  },

  computed: {
    ...mapState({
      products: state => state.products
    })
  },

  provide: {
    addToFavShow: true,
    removeFromFavShow: false
  },

  mounted () {
    this.fetchProducts();
  },

  watch: {
    page() {
      this.fetchProducts();
    }
  }
}
</script>