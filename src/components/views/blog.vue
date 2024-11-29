<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import axios from "axios";

const users=ref([])

onMounted(()=>{

    axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
 
    users.value=response.data;
  });


})




</script>
<template>
<h2>ok</h2>
</template>