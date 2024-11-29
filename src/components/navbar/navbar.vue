<script setup>
import {  onMounted, ref} from "vue";

function toggle(){
  let menuList=document.getElementById('menuList')
if (menuList.style.maxHeight=='0px') {
  menuList.style.maxHeight="300px"
  
} else {
  menuList.style.maxHeight='0px'
  
}
 

}

</script>
<template>
  <nav id="logo">
   <div >
    <img src="C:\Users\ThinkPad-L440\Downloads\logo.png" alt="">
    
   </div>
   <div>
    <ul id="menuList" style="max-height: 0px;">
      <li>
        <Router-link to="/">
        <a href="/">Home</a>
      </Router-link>
      </li>
      <li>
        <Router-link to="/page">
        <a href="/page">Pages</a>
      </Router-link>
      
      </li>
      <li>
        <Router-link to="/product">
        <a href="/product">Product</a>
      </Router-link>
      </li>
      <li>
        <Router-link to="/blog">
        <a href="/blog">Blog</a>
      </Router-link>
      </li>
      <li><a href="#">Contact</a></li>
      <!-- <li><img src="C:\Users\ThinkPad-L440\Downloads\profile.png" alt=""></li> -->
      <!-- <li id="rectangle"><a>Join iTech Hub</a><img src="C:\Users\ThinkPad-L440\Downloads\arrowright.png" alt=""></li> -->

    </ul>
   </div>
   <div id="mainright">
    <div id="profile">
        <img src="C:\Users\ThinkPad-L440\Downloads\profile.png" alt="">
    </div>
    <div id="rectangle">
        <p>Join iTech Hub</p>
        <img src="C:\Users\ThinkPad-L440\Downloads\arrowright.png" alt="">

    </div>

   </div>
   <div class="menu-icon">
    <i class="fa-solid fa-bars" @click="()=>toggle()" ></i>
   </div>
  </nav>
  

</template>