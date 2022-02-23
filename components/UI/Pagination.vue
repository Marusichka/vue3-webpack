<template>
  <ul class="pagination">
    <li
        class="pagination__item"
        v-if="pageStart_ > 1"
        @click="$emit('changePage',pageStart_ - 1)"
    >
      &lt; Prev</li>
    <li class="pagination__item" v-for="pageNumber in paginationRange"
         :key="pageNumber"
         :class="{
           'current-page': page === pageNumber
         }"
        @click="$emit('changePage',pageNumber)"
    >
      {{ pageNumber }}
    </li>
    <li
        class="pagination__item"
        v-if="pageEnd_ < this.$props.totalPages"
        @click="$emit('changePage',pageEnd_ + 1)"
    >
      Next >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: false
    },
    totalPages: {
      type: Number,
      required: false
    },
    isProductsLoading: {
      type: Boolean,
      required: false
    },
    pageStart: {
      type: Number,
      required: false
    },
    pageEnd: {
      type: Number,
      required: false
    },
  },

  data() {
    return {
      paginationRange: [],
      pageStart_: 0,
      pageEnd_: 0
    }
  },

  methods: {
    pageRange(page,pageCount){
      let start = page-2,
          end = page+2;
      let visiblePagesArray = [];

      if(end>pageCount){
        start-=(end-pageCount);
        end=pageCount;
      }
      if(start<=0){
        end+=((start-1)*(-1));
        start=1;
      }

      end = end>pageCount?pageCount:end;
      this.pageStart_ = start;
      this.pageEnd_ = end;

      for (let step = start; step < end+1; step++) {
        visiblePagesArray.push(step)
      }
      this.paginationRange = visiblePagesArray;
    }
  },

  mounted () {
      this.pageRange(this.$props.page, this.$props.totalPages);
  },

  watch: {
    page() {
      this.pageRange(this.$props.page, this.$props.totalPages);
    },
    isProductsLoading() {
      this.pageRange(this.$props.page, this.$props.totalPages);
    }
  }
}
</script>