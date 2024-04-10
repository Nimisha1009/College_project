<template>
  <q-page>
    <div class="row">
      <div class="col">
        <SellerProductTable />
      </div>
    </div>

  </q-page>
</template>
<script>
import SellerProductTable from 'components/modules/Seller/Product/table.vue'
export default {
  components: { SellerProductTable }
}
</script>
