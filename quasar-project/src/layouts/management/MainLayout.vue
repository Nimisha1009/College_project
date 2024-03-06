<template>
 <q-layout view="hHh Lpr lff" container style="height: 600px" class="shadow-2 rounded-borders">
      <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Admin Panel</q-toolbar-title>
          <q-btn label="profile"/>
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
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-black'">
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


export default {
  name: 'MainLayout',
  components: { ManagementMenu },
  data () {
  }

}
</script>
