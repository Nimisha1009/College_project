<template>
  <q-layout view="lHh Lpr lFf">
   
    <q-header elevated class="bg-pink-4">
      <q-toolbar class="text-white">

        <div class="column">
          <SellerMenu />
         </div>

        <div class="q-pa-md">

          <q-input icon="fa fa-search" rounded outlined bg-color="white" v-model="text" label="Search" />
          <ProfileButton class="q-mx-md" />
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
