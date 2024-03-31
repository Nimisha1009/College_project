
<template>
    <q-page class="bg-grey-3">
      <div class="row" v-if="mode === 'detail'">
      <SellerDetail  :data-id="id" class="col" />
      </div>
      <div class="column" v-else>
        <q-card v-if="['add', 'edit'].includes(mode)" class="q-ma-md self-center">
          <SellerForm :mode="mode" :id="id" />
        </q-card>
        <SellerTable class="col q-ma-md" v-if="!mode" />
      </div>
  
 </q-page>
  
  
  
  </template>
  <script>
  import SellerForm from 'components/modules/Management/seller/form.vue'
  import  SellerTable from 'components/modules/Management/seller/table.vue'
  import   SellerDetail from 'components/modules/Management/seller/Detail.vue'
  
  export default {
    props: ['mode', 'id'],
    components: { SellerForm ,SellerTable ,SellerDetail }
  }
  </script>
  