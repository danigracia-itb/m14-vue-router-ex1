import { createRouter, createWebHistory } from "vue-router"
import HomeVue from "@/components/Home.vue"
import AboutVue from "@/components/About.vue"
import ContactVue from "@/components/Contact.vue"
import ProductListVue from "@/components/ProductList.vue"
import ProductDetailVue from "@/components/ProductDetail.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeVue
        },
        {
            path: "/about",
            name: "about",
            component: AboutVue
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactVue
        },
        {
            path: "/products",
            name: "products",
            component: ProductListVue
        },
        {
            path: "/products/:id",
            name: "productsDetail",
            component: ProductDetailVue
        },
    ]
})

export default router
