<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";

const products=ref(null)


onMounted(()=>{

    axios
  .get("https://api-tal.magnified.com.sg/api/products/")
  .then(function (response) {
 
    products.value=response.data;
  });


})
</script>


<template>
<div v-if="products">
    <div id="banner" class="banner-base">
        <div id="main-banner-inner">
            <h1 class="h1p">Explore Sound-Absorbing Solutions for Every Space</h1>

            <p >At The Acoustic Lab, we provide premium acoustic furniture, panels, and fixtures designed to reduce noise and elevate your environment. Our products combine modern design with superior sound absorption, making them perfect for homes, offices, and commercial spaces. Browse our collection to discover the perfect balance of style and serenity for your space.</p>
        </div>
        <div></div>
    </div><br>
    

   <div class="imp" > 
        <div class="imp-1" v-for="(product,index) in products.data " :key="index">
            <div class="imp-1-i">
               
               
                <img :src="'https://api-tal.magnified.com.sg' +  product.attributes.images.data[0].attributes.url" alt="">
                
            </div>
            <div class="imp-1-1" >
              
                
                <h2>{{ product.attributes.name }}</h2>
                <p class="imp-1-1-p" >{{ product.attributes.description[0].children[0].text }}</p>
            </div>
          
            <div class="discover-icon" >
                <div>
                    <p><a :href="'http://localhost:5173/product/' + product.attributes.slug ">Discover</a></p>
                </div>
                <div>
                    <img src="C:\Users\ThinkPad-L440\Downloads\arrowright.png" alt="">
                </div>
            </div>
        </div>
        
    </div> 


   
</div>
</template>
<style>
    
    #main-banner-inner{
        width: 60%;
    }

    @media screen  and (max-width: 600px) {
        #main-banner-inner{
            width: 100%;
        }
    }
    .h1p{
        font-family: "DM Serif Text", system-ui;
        font-weight: 400;
        color: #232922;
        font-size: 55px;
        line-height: 1;
        margin-bottom: 56px;
    }
    .imp{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        margin-top: 150px;
        margin-left: 80px;
        margin-right: 80px;
       gap: 50px;
        
    }
    .imp-1-1-p{
        overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;


    }

    .imp-1-i img{
            width: 100%;
            height: 100%;
            

            object-fit: cover;
        }
       
    .imp-1-i{
        height:300px;
        
    }
    .imp-1 img{
        justify-content: center;
    }
    .imp-1-1{
        margin-top: 40px;
        margin-bottom: 20px;
    }
    .imp-1-1 h2{
        margin-bottom: 20px;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2rem;
    }
    .discover-icon{
        display: flex;
        align-items: center;
        outline: 2px solid grey;
        width: fit-content;
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 12px;
        padding-bottom: 12px;
        border-radius: 9999px;
    }
    .pics{
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-left: 80px;
        margin-right: 80px;
        gap: 50px;
        margin-top: 90px;
    }
    .pics img{
        width: 100%;
            height: 300px;
            

            object-fit: cover;
    }
    .move{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width:1057px){
    
        .h1p{
        font-family: "DM Serif Text", system-ui;
        font-weight: 400;
        color: #232922;
        font-size: 28px;
        width: 100%;
       
        margin-bottom: 56px;
    }
    .imp{
        display: flex;
        flex-wrap: wrap;
        margin-left: 30px;
        margin-right: 30px;
        
    }
    .pics{
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
    margin-right: 30px;
    }

    

    }
</style>