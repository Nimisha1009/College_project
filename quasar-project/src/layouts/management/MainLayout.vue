<template>
  <q-layout view="hHh Lpr lff" >
    <q-header elevated class="bg-blue">
      <q-toolbar>
        <q-btn flat dense round icon="menu" color="black" aria-label="Menu" @click="toggleLeftDrawer"  />
       <q-toolbar-title >Admin Panel</q-toolbar-title>
       <div class="row items-center ">
         <ProfileButton class="q-mx-md">
          </ProfileButton>
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container >
          <router-view />
         </q-page-container>
        <q-drawer class="bg-grey-4"  v-model="leftDrawerOpen" show-if-above bordered :width="240">

      <q-list>
               <div class="row"  >
             <ManagementMenu  />
            </div>
            </q-list>
            </q-drawer>
 </q-layout>
</template>

<script>
   import ManagementMenu from 'components/modules/menu/ManagementMenu.vue'
   import ProfileButton from 'components/modules/profile/Admin.vue'
    export default {
  name: 'MainLayout',
  components: { ManagementMenu,ProfileButton },
  data () {
    return {
      leftDrawerOpen: false
        }
       },
    methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  },
}
</script>
<style>
.row{
  color: black;
}
</style>





















