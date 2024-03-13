<template>
    <q-layout view="hHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">
         <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-teal-7'">
           <q-toolbar>
             <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
             <q-toolbar-title>Admin Panel</q-toolbar-title>
             <ProfileButton class="q-mx-md" />
             </q-toolbar>
             </q-header>
           <q-page-container>
          <router-view />
         </q-page-container>
   
         <q-drawer
           v-model="drawer"
           show-if-above
           :width="200"
           :breakpoint="500"
           bordered
           :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-teal-7'">
           <q-scroll-area class="fit">
             <q-list>
               <div class="row">
             <ManagementMenu />
           </div>
             </q-list>
           </q-scroll-area>
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
     }
   
   }
   </script>
   