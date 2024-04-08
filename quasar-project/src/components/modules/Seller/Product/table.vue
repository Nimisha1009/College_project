<template>
    <q-table :rows="rows">
    </q-table>
  </template>
  <script>
  export default{
    name:'SellerProducttable',
    data () {
    return {
      rows: [],
      columns: [
        { label: 'ID', field: 'id', name: 'id', align: 'left' },
         { label: 'From', field: 'from', name: 'from', align: 'left' },
         { label: 'Status', field: 'status', name: '', align: '' },
        { label: 'To', field: 'to', name: 'to', align: 'left' },
        { label: 'Action', field: '', name: 'actionControl' },
      ]
    }
  },
  methods: {
            async fetchData(){
             let httpClient = await this.$api.get('/items/sellers_products')
             this.rows = httpClient.data.data
            },
            async deleteData (id) {
      this.$q.dialog({
        title: 'Deleting Data',
        message: 'Are you sure?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        let httpClient = await this.$api.delete('/items/sellers_products' + id)
        this.fetchData()
      })
    }
        },
        created(){
            this.$mitt.on('module-data-changed:sellers_products', this.fetchData)
            this.fetchData()
        }
    }
</script>
     
     


   
   