<template>
    <q-form>
        <div class="row q-pa-md">
            <div class="text-h5 text-center q-my-lg">Login to continue</div>
            </div>
            <div class="column">
              <div class="full-width column q-gutter-sm">
               <q-input  label="Email" outlined v-model="auth.email"></q-input>
               <q-input  label="password" outlined  v-model="auth.password"></q-input>
               {{ auth }}
                </div>
                  <div class="full-width q-my-md column q-gutter-sm">
                        <q-checkbox v-model="check" label="Remember Me"></q-checkbox>
                        <div class="">
                            <q-btn label="LogIn" style="width:100%" color="primary"  @click="login"></q-btn>
                        </div>
                         </div>
                </div>
        <div class="">
      <div class="row justify-center">
        <q-btn  to="./recovery" flat style="color: black">Forgot Password</q-btn>
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
  data () {
    return {
      auth: {},
    }
  },
  methods: {
    async login () {
      let httpRequest = await this.$axios.post('http://localhost:8055/admin/settings/data-model/auth/login', this.auth)
      console.log(httpRequest)
      let access_token = httpRequest.data.data.access_token
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      localStorage.setItem('access_token', access_token)
     },
    ForgotPassword () {
      console.log("Forgot Password clicked");
    },
    signUp () {
      console.log("Signup clicked");
    },
    loginWithFacebook () {
      console.log("Login with Facebook clicked");
    },
     }
}


</script>