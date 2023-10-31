import { createRouter, createWebHistory } from "vue-router"
import HomeVue from "@/components/Home.vue"
import AboutVue from "@/components/About.vue"
import ContactVue from "@/components/Contact.vue"

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
        }
    ]
})

export default router
