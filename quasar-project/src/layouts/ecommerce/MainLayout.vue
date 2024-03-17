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
        <ProfileButton class="q-mx-md" />
        <q-btn to="/seller/auth/login" label="Become a seller" flat color="white"></q-btn>
      </div>
    </q-header>
   

    <q-footer>
      <EcommerceFooter></EcommerceFooter>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import CustomerAuthBtn from 'components/modules/auth/CustomerAuthBtn.vue'
import ProfileButton from 'components/modules/profile/Customer.vue'
import EcommerceFooter from 'components/Footers/EcommerceFooter.vue'

export default {
  components: { CustomerAuthBtn, ProfileButton,  EcommerceFooter },
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
