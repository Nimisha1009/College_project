<template>
  <q-table :rows="products">
  </q-table>
</template>
<script>
export default {
  name: 'producttable',
  data () {
    return {
      products: [],
      columns: [
        // { name: 'Product', field: row => row.products_id.name, label: 'products_id' },
        // { name: 'Seller', field: row => row.sellers_id.name, label: 'Seller' },
        // { name: '', field: '', label: '' },
        // { name: '', field: '', label: '' },
      ]
    }
  },
  methods: {
    async fetchProducts () {
      let params = {
        fields: ['*', 'products.*', 'products.products_id.*']
      }
      let httpClient = await this.$api('/items/sellers', { params })
      this.products = httpClient.data.data?.[0]?.products.map(pm => pm.products_id)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
