<script setup>
import {  ref} from "vue";
import Navbar from "./components/navbar/navbar.vue";
import Mainpage from "./components/views/mainpage.vue";
import Footerbar from "./components/footerbar/footerbar.vue";
import Employees from "./components/views/page.vue";
import page from "./components/views/page.vue";
import Blog from "./components/views/blog.vue";
</script>
<template>
    
    <Navbar/>
    
    <router-view></router-view>
      
 <!-- <Footerbar/>  -->
</template>