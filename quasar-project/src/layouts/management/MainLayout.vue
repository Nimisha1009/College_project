<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-amber-8">
      <q-toolbar class="text-white">

        <div class="column">
          <ManagementMenu />

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
import ManagementMenu from 'components/modules/menu/ManagementMenu.vue'


export default {
  name: 'MainLayout',
  components: { ManagementMenu },
  data () {
  }

}
</script>
