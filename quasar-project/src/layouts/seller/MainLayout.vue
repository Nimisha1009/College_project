<template>
<q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-teal" style="height: 100px;">
      <q-toolbar>
        <q-btn flat dense round icon="menu" color="black" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="q-pa-xs ">Welcome To SellerPanel</q-toolbar-title>
        <div class="row items-center ">
          <ProfileButton class="q-mx-xs">
          </ProfileButton>
        </div>
      </q-toolbar>
     <q-toolbar class="bg-white">
        <TopMenu :menu="menu.seller" class="text-grey-8" />
        <div class="row q-xs-xs">
           <q-input icon="fa fa-search" rounded outlined bg-color="white" v-model="text" label="Search" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-drawer class="bg-green-2" v-model="leftDrawerOpen" show-if-above bordered :width="240">
 <SellerMenu />
</q-drawer>
</q-layout>
</template>
<script>
import SellerMenu from 'components/modules/menu/SellerMenu.vue'
import ProfileButton from 'components/modules/profile/Seller.vue'
import TopMenu from 'components/commons/TopMenu.vue'
import menu from 'src/data/menu.js'
export default {
  name: 'MainLayout',
  components: { SellerMenu ,ProfileButton,TopMenu},
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
