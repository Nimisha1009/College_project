<template>
  <q-layout view="lHh Lpr lFf">
   
    <q-header elevated class="bg-teal ">
      <q-toolbar class="text-white">

        <div class="column">
          <SellerMenu />
         </div>

        <div class=" row q-pa-md">

          <q-input icon="fa fa-search" rounded outlined bg-color="white" v-model="text" label="Search" />
         <div class="q-pa-sm bg-teal-9"><ProfileButton class="q-mx-md"  /></div> 
        </div>

      </q-toolbar>
    </q-header>
    <div>jhjj</div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SellerMenu from 'components/modules/menu/SellerMenu.vue'
import ProfileButton from 'components/modules/profile/Seller.vue'

export default {
  name: 'MainLayout',
  components: { SellerMenu ,ProfileButton},
  data () {
  }

}
</script>
