<template>
  <q-form class="bg-pink-1">
    <div class="row q-pa-md  flex flex-center">
      <q-card class="q-pa-md shadow-2 my_card" bordered>
        <q-card-section class="text-center">
          <div class="text-pink text-h5   text-weight-bold">Welcome to Seller Panel</div>
          <div class="text-pink-8">Sign in below to access your account</div>
        </q-card-section>
      </q-card>

    </div>
    <div class="column">
      <div class="full-width column q-gutter-sm">
        <q-input label="Email" outlined v-model="auth.email"></q-input>
        <q-input label="password" outlined v-model="auth.password"></q-input>

      </div>

      <div class="full-width q-my-md column q-gutter-sm">
        <div class="">
          <q-btn :label="authSuccess ? 'Success' : 'Login'" style="width:100%"
            :color="authSuccess ? 'green' : 'primary'" @click="login" :disabled="authInProgress || authSuccess"
            :loading="authInProgress"></q-btn>
        </div>
      </div>
    </div>
    <div class="">
      <div class="row justify-center">
        <q-btn to="./recovery" flat style="color: grey">Forgot Password</q-btn>
      </div>

      <div class="column items-center q-my-lg">
        <div>
          <q-btn flat class="text-h5text-center" color="pink-6" to="/seller/auth/signup">Not reigistered? Created an
            Account</q-btn>
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
        this.$router.replace('/seller/dashboard')
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
