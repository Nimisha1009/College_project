<template>
    <q-page class="bg-light-green window-height window-width row justify-center items-center">
      <div class="column">
        <div class="row">
          <h5 class="text-h5 text-white q-my-md">Admin Login</h5>
        </div>
        <div class="row">
          <q-card square bordered class="q-pa-lg shadow-1">
            <q-card-section>
              <q-form class="q-gutter-md">
                <q-input square filled clearable v-model="auth.email" type="email" label="email" />
                <q-input square filled clearable v-model="auth.password" type="password" label="password" />
              {{ auth }}
            </q-form>
            </q-card-section>
            <q-card-actions class="q-px-md">
              <q-btn unelevated color="light-green-7" size="lg" class="full-width" label="Login" />
            </q-card-actions>
           
          </q-card>
        </div>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data () {
      return {
        auth: {},
    }
  },
  methods: {
    async login () {
      let httpRequest = await this.$axios.post('http://localhost:8055/auth/login', this.auth)
      console.log(httpRequest)
      let access_token = httpRequest.data.data.access_token
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      localStorage.setItem('access_token', access_token)
      
     },}
    }
   
  
  
  </script>
  
 