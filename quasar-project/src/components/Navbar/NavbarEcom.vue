<template>
  <nav class=" bg-pink" elevated style="height:50px" id="navbar">
    <div class="container">
      <div class="row flat q-pa-md">
        <div class="row ">
          <EcommerceMenu />
        </div>
      </div>
    </div>
  </nav>




</template>

<script>
import EcommerceMenu from 'components/modules/menu/EcommerceMenu.vue'
export default {
  name: 'NavbarEcom',
  components: { EcommerceMenu },
}

</script>
<style>
.row {
  color: black;
}
</style>
