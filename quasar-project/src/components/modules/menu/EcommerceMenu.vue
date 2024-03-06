<template>

    <div class="row">
      <Menu :menu="menu.ecommerce"></Menu>
    </div>
  
  
  
  </template>
  
  <script>
  import Menu from 'components/commons/Menu.vue'
  import menu from 'src/data/menu.js'
  console.log(menu)
  export default {
    components: { Menu },
    data () {
      return {
        menu
      }
    }
  
  }
  </script>