<template>
    
  <q-page class="q-pa-md bg-grey-3">
  <div>Product pricing</div>
  <q-page class="class=bg-grey-1">
  <div class="row">
    <div class="col-6 q-pa-md" >
      <q-card  class="q-pa-md">
        <routerView />
      </q-card>
      </div>
   <div class="col-6">
      <PricingTable />
    </div>
    </div>
 
  </q-page>




</q-page>
</template>

<script>
import PricingTable from 'components/modules/Seller/Pricing/table.vue'
export default {
  props: ['mode','id'],
components: { PricingTable ,}

}
</script>