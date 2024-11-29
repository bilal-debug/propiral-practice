import { createWebHistory,createRouter } from "vue-router";
import  Home  from "./components/views/mainpage.vue";
import Product from "./components/views/product.vue";
import page from "./components/views/page.vue";
import Blog from "./components/views/blog.vue";


const routes=[
    {
        name:"Home",
        path:"/",
        component:Home
    },
    {
        name:"Product",
        path:"/product",
        component:Product
    },
    {
        name:"page",
        path:"/page",
        component:page
    },
    {
        name:"blog",
        path:"/blog",
        component:Blog
    }
    
    
    
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router
