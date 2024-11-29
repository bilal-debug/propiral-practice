<!-- <script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
    data(){
        return{
            users:{}
            
        }
        
    },

    mounted(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(Response=>{

            
            this.users=Response.data
            
        })
    }
}
  
</script> -->

<script setup>
import axios from "axios";
import { onMounted,ref } from "vue";
const users = ref({})

function del() {
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(Response=>{

        users.value[[0]]=Response.data
 
        
    })


    
    
}



onMounted(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(Response=>{

        
        users.value=Response.data
        
    })
})
  

</script>
<template>
    <table>
        <tr>
            <h1>HTML Table Example</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="(user,index) in users" :key="index" >
                <td>{{ user.id }}</td>
                <td >{{ user.name}}</td>
                <td>{{ user.phone}}</td>
                <td>{{ user.email}}</td>
                <tr>
                    <td>
                        <button> Edit </button>
                    </td>
                    <td>
                        <button @click="del('1')" >delete</button>
                    </td>
                </tr>
                
            </tr>
            
        </tbody>
    </table>
        </tr>
    </table>
</template>
<style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
    </style>