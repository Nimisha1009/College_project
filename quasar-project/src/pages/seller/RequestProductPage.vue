<template>
  <q-page class="class=bg-grey-1">
  <div class="row">
    <div class="col-4 q-pa-md" >
      <q-card class="q-pa-md">
        <routerView></routerView>
      </q-card>
     
    </div>
   <div class="col-8">
      <RequestTable />
    </div>
    </div>
 
  </q-page>

</template>
<script>
import  RequestTable from 'components/modules/Seller/RequestProduct/table.vue'
export default{
  name:'RequestProductPage',
    props: ['mode','id'],
  components: { RequestTable }
}
</script>
