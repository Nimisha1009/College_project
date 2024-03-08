<template>
    <q-page class="column">
      <div class="row col">
        <div class="col" v-show="$q.screen.gt.xs" >

          <h6>Image</h6>
</div>
        <q-card class="q-pa-sm" :style="{width: $q.screen.gt.xs ? '420px' : '100%'}">
     <router-view />
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
