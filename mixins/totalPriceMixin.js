export default {
    methods: {
        countTotal() {
            let totalPrice = this.$store.state.productsInCart.reduce((acc, item) => {
            let curPrice = Number(item.price.replace(/[^\d.-]/g, '')).toFixed(2);
                let totalLine = curPrice * item.qty;
                return acc + totalLine;
            }, 0);
            return totalPrice.toFixed(2);
        }
    }
}