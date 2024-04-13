<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-white">
      <div class="row q-pa-md " >
        <div  style="width:80px">
          <!-- <q-img></q-img> -->
        </div>
        <div class="col">
          <q-input color="text-black" flat outlined bg-color="white" placeholder="Search for a category, Brand or Product" />
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
      <q-navbar><NavbarEcom></NavbarEcom></q-navbar>
   
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    
      <EcommerceFooter></EcommerceFooter>
   
  </q-layout>
</template>

<script>
import CustomerAuthBtn from 'components/modules/auth/CustomerAuthBtn.vue'
import ProfileButton from 'components/modules/profile/Customer.vue'
import EcommerceFooter from 'components/Footers/EcommerceFooter.vue'
import NavbarEcom from 'components/Navbar/NavbarEcom.vue'

export default {
  components: { CustomerAuthBtn, ProfileButton,  EcommerceFooter, NavbarEcom, },
 
}
</script>
<style scoped>
.q-layout {
  min-height: 100vh;
  /* Set the layout to fill the viewport height */
}

.q-page-container {
  flex-grow: 1;
  /* Allow the page container to grow to fill remaining space */
}

.EcommerceFooter{
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  /* Ensure the footer is above other content */
}

</style>
