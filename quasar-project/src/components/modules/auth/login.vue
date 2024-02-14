<template>
    <q-form>
        <div class="row q-pa-md">
            <div class="text-h5 text-center q-my-lg">Login to continue</div>
            </div>
            <div class="column">
              <div class="full-width column q-gutter-sm">
               <q-input v-model="email" label="Email" outlined></q-input>
               <q-input v-model="password" label="password" outlined></q-input>
                </div>
                  <div class="full-width q-my-md column q-gutter-sm">
                        <q-checkbox v-model="check" label="Remember Me"></q-checkbox>
                        <div class="">
                            <q-btn label="Login" style="width:100%" color="primary"></q-btn>
                        </div>
                        
                    </div>
               
           
        </div>
        <div class="">
      <div class="row justify-center">
        <q-btn  to="./forgotpassword" flat style="color: black">Forgot Password</q-btn>
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
    </q-form>
</template>
<script>
export default {

}
</script>