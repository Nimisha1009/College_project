<template>
     <q-form>
        <div class="row q-pa-md">
            <div class="text-h5 text-center q-my-lg">Sign up Now</div>
            </div>
            <div class="column">
                    <div class="full-width column q-gutter-sm">
                        <q-input v-model="user_name" label="User name" outlined></q-input>
                        <q-input v-model="email" label="Email" outlined></q-input>
                        <q-input v-model="password" label="Password" outlined></q-input>
                        <q-input v-model="password" label="Mobile no" outlined></q-input>
                        <div class="q-gutter-sm">
                             </div>
                        <div class="q-gutter-sm">
                     <q-radio v-model="male"  label="Male" />
                      <q-radio v-model="female"  label="Female" />
                    </div>
                    <div class="">
                           <q-btn label="sign up" style="width:50%" color="primary"></q-btn>
                           <q-btn  to="./login"  label="Login?"  flat style="color: blue"></q-btn>
                        </div>
                      
                      </div>
                 
                    </div>
               </q-form>
   
   
</template>
<script>
export default{
     name:'SellerSignup',
}
</script>