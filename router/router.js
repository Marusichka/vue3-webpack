import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";
import Favorites from "../pages/Favorites";


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/cart',
        component: CartPage
    },
    {
        path: '/favorites',
        component: Favorites
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;