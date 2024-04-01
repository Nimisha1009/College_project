<template>
  <q-layout view="hHh Lpr lff">
      <q-header elevated class="bg-teal" style="height: 50px;">
        <q-toolbar>
          <q-btn flat dense round icon="menu" color="black" aria-label="Menu" @click="toggleLeftDrawer" />
          <q-toolbar-title class="q-pa-xs ">Welcome To SellerPanel</q-toolbar-title>
          <div class="row items-center ">
            <ProfileButton class="q-mx-xs">
            </ProfileButton>
          </div>
        </q-toolbar>
       </q-header>
      <q-page-container>
        <router-view />
     </q-page-container>
      <q-drawer class="bg-green-2" v-model="leftDrawerOpen" show-if-above bordered :width="240">
        <div></div>
        <SellerMenu />
        <div class="support" >Support Hub</div>
   </q-drawer>
  </q-layout>
  </template>
  <script>
  import SellerMenu from 'components/modules/menu/SellerMenu.vue'
  import ProfileButton from 'components/modules/profile/Seller.vue'
  import menu from 'src/data/menu.js'
  export default {
    name: 'MainLayout',
    components: { SellerMenu ,ProfileButton},
    data () {
      return {
        leftDrawerOpen: false,
        menu
      }
    },
    methods: {
      toggleLeftDrawer () {
        this.leftDrawerOpen = !this.leftDrawerOpen
      }
    },
  
  }
  </script>
  <style scoped>
  .support{
    font-family:cursive;
    color: rgb(14, 82, 82);
    font-size: medium;
    padding-top: 110px;
    padding-left: 110px;
    
  }
</style>