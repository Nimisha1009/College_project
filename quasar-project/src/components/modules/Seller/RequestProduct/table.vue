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
    name:'RequestTable',
    data () {
      return {
        rows: [],
        columns: [
        { label: 'ID', field: 'id', name: 'id', align: 'left' },
      { label: 'Product name', field: 'name', name: 'name', align: 'left' },
      { label: ' Description', field: 'Description', name: '', align: 'left' },
      { label: 'Category', field: 'category', name: 'name', align: 'left' },
      { label: 'Status', field: 'status', name:'' , align:''},
      { label: 'Image', field: 'image', name:'' , align:''},
       { label: 'Price', field: 'price', name: '' },
      { label: 'action', field: '', name:'actionControl' , align:''},
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
        let httpClient = await this.$api.delete('/items/products_request/' + id)
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
     
     
