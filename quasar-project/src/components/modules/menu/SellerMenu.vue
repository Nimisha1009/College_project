<template>

  <div class="row">
    <TopMenu :menu="menu.seller"></TopMenu>
  </div>



</template>

<script>
import TopMenu from 'components/commons/TopMenu.vue'
import menu from 'src/data/menu.js'
console.log(menu)
export default {
  components: { TopMenu },
  data () {
    return {
      menu
    }
  }

}
</script>
