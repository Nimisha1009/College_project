<template>
  <div>
    <q-btn to="/auth/login" label="Login" flat v-if="!profile"> </q-btn>
    <q-avatar color="white" v-else><img :src="'http://localhost:8055/assets/' + profile.avatar">
      <q-menu>
        <q-card style="width: 250px" class="q-pa-md">
          <div class="column items-center q-gutter-md">
            <div class="text-h6">
              {{ profile.first_name }} {{ profile.last_name }}
            </div>
            <div class=" text-grey">
              {{ profile.email }}
            </div>
            <q-btn flat label="Logout" @click="logout"></q-btn>

          </div>
        </q-card>
      </q-menu>
    </q-avatar>
  </div>

</template>
<script>

export default {
  data () {
    return {
      profile: null
    }
  },
  methods: {
    async fetchProfile () {
      let httpClient
      let self = this
      try {
        httpClient = await this.$api.get('/users/me')
      } catch (err) {
        self.profile = null
      }

      this.profile = httpClient.data.data
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$api.defaults.headers.common['Authorization'] = null
      this.fetchProfile()
      this.$router.push('/auth/login')
    }
  },
  created () {
    let self = this
    this.$mitt.on('login-successfull', function () {
      self.fetchProfile()
    })
    this.fetchProfile()
  }
}
</script>
