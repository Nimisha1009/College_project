<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="bg-blue" style="height: 100px;">
      <q-toolbar>
        <q-btn flat dense round icon="menu" color="black" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="q-pa-xs ">Admin Panel</q-toolbar-title>
        <div class="row items-center ">
          <ProfileButton class="q-mx-xs">
          </ProfileButton>
        </div>
      </q-toolbar>

      <q-toolbar class="bg-white">
        <TopMenu :menu="menu.management" class="text-grey-8" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-drawer class="bg-grey-4" v-model="leftDrawerOpen" show-if-above bordered :width="240">


      <ManagementMenu />

    </q-drawer>
  </q-layout>
</template>

<script>
import ManagementMenu from 'components/modules/menu/ManagementMenu.vue'
import TopMenu from 'components/commons/TopMenu.vue'
import ProfileButton from 'components/modules/profile/Admin.vue'
import menu from 'src/data/menu.js'
export default {
  name: 'MainLayout',
  components: { ManagementMenu, ProfileButton, TopMenu },
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
