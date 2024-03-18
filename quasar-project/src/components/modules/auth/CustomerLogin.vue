<template>
  <q-form>
    <div class="row q-pa-md text-center ">
      <div class="text-h5 text-center q-my-lg">Log In/Register</div>
    </div>
    <div class="column">
      <div class="full-width column q-gutter-sm">
        <q-input label="Email" outlined v-model="auth.email"></q-input>
        <q-input label="password" outlined v-model="auth.password"></q-input>
      </div>
      <div class="full-width q-my-md column q-gutter-sm">
        <q-checkbox class="text-grey-8" dense  label="Remember me"/>
        <div class="">
          <q-btn :label="authSuccess ? 'Success' : 'Login'" style="width:100%" dense
            :color="authSuccess ? 'green' : 'primary'" @click="login" :disabled="authInProgress || authSuccess"
            :loading="authInProgress"></q-btn>
        </div>
      </div>
    </div>
    <div class="">
      <div class="row justify-center">
        <q-btn to="./recovery" flat style="color: black">Forgot Password</q-btn>
      </div>

      <div class="column items-center q-my-lg">
        <div>
          
          <q-btn flat class="text-h5 text-center" color="teal" size="lg" to="/auth/signup">Create Account</q-btn>
        </div>


        <span class="text-grey-8 ">By Continuing,you agree to Kids Store's Condition of Use  Privacy and Policy</span>
       
      </div>

    </div>
  </q-form>
</template>
<script>
export default {
  data () {
    return {
      auth: {},
      authInProgress: false,
      authSuccess: false
    }
  },
  methods: {
    async login () {
      this.$api.defaults.headers.common['Authorization'] = null;
      this.authInProgress = true
      let httpRequest
      try {
        httpRequest = await this.$api.post('/auth/login', this.auth)
      } catch (err) {
        console.log(err)
        if (err.response.status === 401) {
          this.$q.dialog({
            message: err?.response?.data?.errors?.[0]?.message
          })
        }
        this.authInProgress = false
        return

      }

      this.authSuccess = true
      this.authInProgress = false
      let access_token = httpRequest.data.data.access_token
      this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      localStorage.setItem('access_token', access_token)

      this.$mitt.emit('login-successfull')
      setTimeout(() => {
        this.$router.replace('/')
      }, 1000)

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
