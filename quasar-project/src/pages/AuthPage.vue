<template>
    <q-page class="column">
      <div class="row col">
        <div class="col" v-show="$q.screen.gt.xs" >

          <h6>Image</h6>
</div>
        <q-card class="q-pa-sm" :style="{width: $q.screen.gt.xs ? '380px' : '100%'}">
     <router-view />
     <div class="">
      <div class="row justify-center">
        <a href="" class="float-right " style="text-decoration: none">Forgot Password</a>
      </div>
      
      <div class="column items-center q-my-lg">
        <div>
          <q-btn flat class="text-h5text-center" color="pink-6" size="lg" to="./signup">Create Account</q-btn>
        </div>
        
      
        <span class="text-grey text-center">or sign up using</span>
        <div class="">
            <q-btn icon="fab fa-facebook-f" round color="primary"></q-btn>
        </div>
      </div>

     </div>
    
    </q-card>
      </div>
      
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
