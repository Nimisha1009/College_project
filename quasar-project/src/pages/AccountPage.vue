<template>
    <q-page  >
     <q-card class="q-pa-md flex flex-center ">
        <div >
        </div>
       <router-view />
      </q-card>
      
      
    </q-page>
</template>
<script>
export default {
    name: "Login",
  data(){
    return{
        check:false,
        email:'',
        password: ''
        }
  }}
</script>
