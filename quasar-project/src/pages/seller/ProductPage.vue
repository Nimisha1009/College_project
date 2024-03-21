<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="row items-cente q-my-md">
      <div class="text-h5">Product</div>
      <div><q-btn label="Add" to="" color="green" rounded></q-btn></div>
    </div>
    <div class="row">
      <div class="col-4">
        <router-view />
      </div>
      <div class="col-8">
        <SellerProductTable />
      </div>
    </div>


  </q-page>
</template>

<script>
import SellerProductTable from 'components/modules/products/SellerTable.vue'
export default {
  name: 'ProductPage',
  components: { SellerProductTable },
  props: ['mode'],

}

</script>
