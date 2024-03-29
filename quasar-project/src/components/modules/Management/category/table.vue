<template>
     <q-table :rows="rows" :columns="columns">
    <template v-slot:top>
      <div class="row items-center">
        <div class="text-h5 q-ma-sm">categories</div>
        <q-btn label="Add" color="green" rounded class="q-ma-sm" to="./add" v-if="!$route.params.mode"></q-btn>
      </div>
    </template>
    <template v-slot:body-cell-actionControl="props">
      <q-td>
        <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
        <q-btn icon="delete" @click="deleteData(props.row.id)" unelevated color="red" dense></q-btn>
      </q-td>

    </template>
  </q-table>
   
   </template>
   <script>
   export default {
       name:'CategoryTable',
       data(){
           return {
               rows: [],
               columns: [
       { label: 'ID', field: 'id', name: 'id', align: 'left' },
       { label: 'Category name', field: 'name', name: 'name', align: 'left' },
       { label: 'category Description', field: '', name: '', align: 'left' },
       { label: 'Image', field: '', name: 'actionControl' },
     ]
           }
       },
       methods: {
           async fetchData(){
            let httpClient = await this.$api.get('/items/categories')
            this.rows = httpClient.data.data
           },
           async deleteData (id) {
     this.$q.dialog({
       title: 'Deleting Data',
       message: 'Are you sure?',
       cancel: true,
       persistent: true
     }).onOk(async () => {
       let httpClient = await this.$api.delete('/items/categories/' + id)
       this.fetchData()
     })
   }
       },
       created(){
           this.$mitt.on('module-data-changed:categories', this.fetchData)
           this.fetchData()
       }
   }
   
   </script>