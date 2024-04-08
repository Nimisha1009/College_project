<template>
<q-page>
 <div class="row" >
  <div class="col">
    <SellerProducttable />
  </div>
 </div>
</q-page>
  
  </template>
  <script>
  import SellerProducttable from 'components/modules/Seller/Product/table.vue';
  export default{
    components: {SellerProducttable}
  }
  </script>
 