<template>
    <q-page class="class=bg-grey-1">
    <div class="row">
      <div class="col-4 q-pa-md" >
        <q-card class="q-pa-md">
          <routerView></routerView>
        </q-card>
       
      </div>
     <div class="col-8">
        <PricingTable />
      </div>
      </div>
   
    </q-page>
  
  </template>
  <script>
  import  PricingTable from 'components/modules/Seller/Pricing/table.vue'
  export default{
    name:'PricingPage',
      props: ['mode'],
    components: { PricingTable }
  }
  </script>
  