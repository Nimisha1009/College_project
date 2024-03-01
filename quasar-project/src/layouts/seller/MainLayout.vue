<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-pink-2">
      <q-toolbar>
        

        <SellerMenu />

       
      </q-toolbar>
    </q-header>

    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import SellerMenu from 'components/modules/menu/SellerMenu.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {SellerMenu},
 
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
