<template>
<q-page class="q-pa-md bg-grey-3">
   <div>Request Product</div>
    <div><q-btn label="Add" to="./add" color="green" rounded></q-btn></div>
   <div class="row">
      <div class="col-6 q-pa-md" >
        <q-card class="q-pa-md">
          <routerView></routerView>
        </q-card>
        </div>
     <div class="col-6">
        <RequestTable  />
      </div>
      </div>
   </q-page>
  </template>
  
  <script>
 import RequestTable from 'components/modules/Seller/RequestProduct/table.vue'
  export default {
    props: ['mode','id'],
  components: { RequestTable ,}
  
  }
  </script>

