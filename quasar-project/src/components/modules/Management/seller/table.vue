<template>
    <q-table :rows="rows" :columns="columns">
   <template v-slot:top>
     <div class="row items-center">
       <div class="text-h5 q-ma-sm">Sellers</div>
       <q-btn label="Add" color="green" rounded class="q-ma-sm" to="./add" v-if="!$route.params.mode"></q-btn>
     </div>
   </template>
   <template v-slot:body-cell-actionControl="props">
     <q-td>
       <q-btn icon="visibility" :to="'./detail/' + props.row.id" unelevated color="green" dense></q-btn>
       <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
       <q-btn icon="delete" @click="deleteData(props.row.id)" unelevated color="red" dense></q-btn>
     </q-td>
  </template>>
</q-table>
   </template>
   <script>
   export default {
       name:'SellerTable',
       data(){
           return {
               rows: [],
               columns: [
       { label: 'ID', field: 'id', name: 'id', align: 'left' },
       { label: 'Seller name', field: 'name', name: 'name', align: 'left' },
     { label: 'Email', field: 'Email', name:'Email',  align:'' },
       { label: 'Image', field: 'image', name:'image',  align:'' },
       { label: 'status', field: 'status', name:'status' , align:''},
       { label: 'Gender', field: 'gender', name:'gender' , align:''},
       { label: 'AdhaarNumber', field: 'adhaar_number', name:'adhaar_number' , align:''},
       { label: 'Adress', field: 'address', name:'adress' , align:''},
       { label: 'Website name', field: 'website_name', name:'website_name' , align:''},
       { label: 'Website Url', field: 'website_url', name:'website_name' , align:''},
       { label: 'Action', field: '', name: 'actionControl' },
     ]
           }
       },
       methods: {
           async fetchData(){
            let httpClient = await this.$api.get('/items/sellers')
            this.rows = httpClient.data.data
           },
           async deleteData (id) {
     this.$q.dialog({
       title: 'Deleting Data',
       message: 'Are you sure?',
       cancel: true,
       persistent: true
     }).onOk(async () => {
       let httpClient = await this.$api.delete('/items/sellers/' + id)
       this.fetchData()
     })
   }
       },
       created(){
           this.$mitt.on('module-data-changed:sellers', this.fetchData)
           this.fetchData()
       }
   }
   
   </script>
  
 

  