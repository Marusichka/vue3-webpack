import {createStore} from "vuex";

export default createStore({
    state: {
        products: [],
        productsInFav: [
            {
                "price":"$12.99",
                "name":"New Belgium Oakspire Bourbon Barrel Ale","rating":{"average":2.0996330805016186,"reviews":342},
                "image":"https://www.totalwine.com/media/sys_master/twmmedia/h8b/h8f/11475320012830.png",
                "id":12
            },
            {
                "price":"$16.99",
                "name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},
                "image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png",
                "id":1
            },
            {
                "price":"$13.99",
                "name":"Blue Moon Belgian White Belgian-Style Wheat Ale",
                "rating":{"average":4.775260833383482,"reviews":305},
                "image":"https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png",
                "id":2
            }
        ],
        productsInCart: [
            {
                "price":"$16.99",
                "name":"Founders All Day IPA","rating":{"average":4.411243509154233,"reviews":453},
                "image":"https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png",
                "id":1,
                "qty": 4
            },
            {
                "price":"$13.99",
                "name":"Blue Moon Belgian White Belgian-Style Wheat Ale",
                "rating":{"average":4.775260833383482,"reviews":305},
                "image":"https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png",
                "id":2,
                "qty": 1
            }
        ]
    },

    mutations: {

        // --------------------  Cart ---------------------

        setTotalPrice(state, totalPrice) {
            state.totalPrice = totalPrice;
        },

        setProducts(state, products) {
            state.products = products;
        },

        addToCartOrIncrement(state, id) {
            let itemIndex = state.productsInCart.findIndex( item => item['id'] === id );

            if(itemIndex > -1) {
                state.productsInCart[itemIndex]["qty"] += 1;
            } else {
                const item = state.products.find((product) => product.id === id);
                state.productsInCart.push({
                    ...item,
                    "qty": 1
                });
            }
        },

        removeCartItemOrDecrement(state, args) {
            const [id, mode] = args;
            const itemIndex = state.productsInCart.findIndex( item => item['id'] === id );
            const itemQty = state.productsInCart[itemIndex]["qty"];

            if((mode === "decrease") && (itemIndex > -1) && itemQty > 1) {
                state.productsInCart[itemIndex]["qty"] -= 1;
            } else if ((mode === "delete") || itemQty < 2) {
                state.productsInCart.splice(itemIndex, 1);
            }
        },

        // --------------------  Fav ---------------------

        addToFav(state, id) {
            let itemIndex = state.productsInFav.findIndex( item => item['id'] === id );

            if(itemIndex < 0) {
                const item = state.products.find((product) => product.id === id);
                state.productsInFav.push(item);
            }
        },

        removeFromFav(state, id) {
            let itemIndex = state.productsInFav.findIndex( item => item['id'] === id );
            state.productsInFav.splice(itemIndex, 1);
        }
    }

})