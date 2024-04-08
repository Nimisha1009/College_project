<template>
    <q-table :rows="rows">
    </q-table>
  </template>
  <script>
  export default{
    name:'SellerProducttable',
    data () {
    return {
      products: [],
      
      columns: [
        { label: 'ID', field: 'id', name: 'id', align: 'left' },
         { label: 'Product_id', field: row=> row.products_id.name, name: '', align: '' },
         { label: 'seller_id', field: row=> row.sellers_id.name, name: '', align: '' },
      ]
    }
  },
  methods: {
            async fetchData(){
              let params = {
                fields: []
              }
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
     
     


   
   