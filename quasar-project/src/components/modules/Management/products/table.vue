<template>
    <q-table :rows="rows" :columns="columns">
    <template v-slot:body-cell-actionControl="props">
     <q-td>
       <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
       <q-btn icon="delete" @click="deleteData(props.row.id)" unelevated color="red" dense></q-btn>
     </q-td>

   </template>>
</q-table>
    </template>
    <script>
    export default {
        name:'Productstable',
        data(){
            return {
                rows: [],
                columns: [
        { label: 'ID', field: 'id', name: 'id', align: 'left' },
        { label: ' product name', field: 'name', name: 'name', align: 'left' },
        { label: 'product category', field: 'product category', name: '' },
        { label: 'product price', field: 'product price', name: '' },
        { label: 'product Details', field: 'product details', name: 'left' },
        { label: 'product Image', field: 'product Image', name: 'left' },
        { label: 'product status', field: 'product status', name: 'actionControl' },
      ]
            }
        },
        methods: {
            async fetchProducts(){
             let httpClient = await this.$api.get('http://localhost:8055/items/products')
             this.rows = httpClient.data.data
            },
            async deleteData (id) {
      this.$q.dialog({
        title: 'Deleting Data',
        message: 'Are you sure?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        let httpClient = await this.$api.delete('/items/products/' + id)
        this.fetchData()
      })
    }
        },
        created(){
            this.$mitt.on('module-data-changed:products', this.fetchData)
            this.fetchProducts()
        }
    }
    
    </script>