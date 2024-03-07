<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-teal-7">
      <div class="row q-pa-md">
        <div style="width:100px">
          <!-- <q-img></q-img> -->
        </div>
        <div class="col">
          <q-input color="text-black" outlined bg-color="white" placeholder="Search products" />
        </div>

        <q-btn-dropdown class="q-mx-md" label="Orders" flat color="white"></q-btn-dropdown>
        <q-btn icon="shopping_cart" unelevated color="amber-5"><q-badge floating>2</q-badge></q-btn>
        <q-btn to="/ecommerce/login" label="Login"> </q-btn>
      </div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import CustomerAuthBtn from 'components/modules/auth/CustomerAuthBtn.vue'
export default {
  components: { CustomerAuthBtn },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
