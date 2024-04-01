<template>
  <q-table :rows="rows" :columns="columns">
 <template v-slot:top>
   <div class="row items-center">
     <div class="text-h5 q-ma-sm">Request Products</div>
     <q-btn label="Request" color="green" rounded class="q-ma-sm" to="./add" v-if="!$route.params.mode"></q-btn>
   </div>
    </template>
    <template v-slot:body-cell-actionControl="props">
   <q-td>
  <q-btn icon="delete" @click="deleteData(props.row.id)" unelevated color="red" dense></q-btn>
   </q-td>
</template>>
</q-table>
 </template>
 <script>
 export default {
     name:'RequestTable',
     data(){
         return {
             rows: [],
             columns: [
     { label: 'ID', field: 'id', name: 'id', align: 'left' },
     { label: 'Product name', field: 'name', name: 'name', align: 'left' },
     { label: 'Category', field: 'categories_id', name: 'categories_id', align:'' },
     { label: 'Price', field: 'price', name: 'price', align:'' },
     { label: 'Date', field: 'date', name: 'date', align:'' },
     { label: 'Description', field: 'Description', name:'description',  align:'' },
     { label: 'Image', field: 'image', name:'image',  align:'' },
     { label: 'Status', field: 'status', name:'status' , align:''},
     { label: 'Action', field: '', name: 'actionControl' },
   ]
         }
     },
     methods: {
         async fetchData(){
          let httpClient = await this.$api.get('/items/products_request')
          this.rows = httpClient.data.data
         },
         async deleteData (id) {
      this.$q.dialog({
       title: 'Deleting Data',
       message: 'Are you sure?',
       cancel: true,
       persistent: true
       }).onOk(async () => {
     let httpClient = await this.$api.delete('/items/products_request/'+ id)
     this.fetchData()
   })
 }
     },
     created(){
         this.$mitt.on('module-data-changed:products_request', this.fetchData)
         this.fetchData()
     }
 }
 
 </script>
       
  
