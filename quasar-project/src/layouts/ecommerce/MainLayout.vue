<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-white">
      <div class="row q-pa-md " >
        <div style="width:80px">
          <!-- <q-img></q-img> -->
        </div>
        <div class="col">
          <q-input color="text-black" outlined bg-color="white" placeholder="Search for a category, Brand or Product" />
        </div>
       
        <q-btn-dropdown class="q-mr-xs" label="Orders" flat color="black"></q-btn-dropdown>
        <q-separator vertical inset />
        <q-btn-dropdown class="q-mr-xs" label="Support" flat color="black"></q-btn-dropdown>
        <q-separator vertical  />
        <q-btn  class="q-mr-xs" icon="shopping_cart" unelevated color="amber-5"><q-badge floating>2</q-badge></q-btn>
        <q-separator vertical  />
        <ProfileButton class="q-mr-xs"/>
        <q-separator vertical/>
        <q-btn  class="q-mr-xs" icon="" unelevated label="shortlist" flat color="black"></q-btn>
        <q-separator vertical/>
        <q-btn class="q-mr-xs"  to="/seller/auth/login" label="Become a seller" flat color="black"></q-btn>
      </div>
      <q-navbar>
      <NavbarEcom></NavbarEcom>
    </q-navbar>
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
import NavbarEcom from 'components/Navbar/NavbarEcom.vue'
export default {
  components: { CustomerAuthBtn, ProfileButton,  EcommerceFooter, NavbarEcom },
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
