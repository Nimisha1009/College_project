<template>


  <SideMenu :menu="menu.seller">
  </SideMenu>




</template>

<script>
import SideMenu from 'components/commons/SideMenu.vue'
import menu from 'src/data/menu.js'
console.log(menu)
export default {
  components: { SideMenu },
  data () {
    return {
      menu
    }
  }

}
</script>