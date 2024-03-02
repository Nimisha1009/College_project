<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-pink-4">
      <q-toolbar class="text-white">

        <div class="column">
          <SellerMenu />

        </div>

        <div class="q-pa-md">

          <q-input icon="fa fa-search" rounded outlined v-model="text" label="Search" />

        </div>

      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SellerMenu from 'components/modules/menu/SellerMenu.vue'


export default {
  name: 'MainLayout',
  components: { SellerMenu },
  data () {
  }

}
</script>
