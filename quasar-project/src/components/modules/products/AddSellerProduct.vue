<template>
  <q-form>
    <q-select label="Product" :options="product.options" map-options option-label="name"></q-select>
    <q-btn label="Add"></q-btn>
  </q-form>
</template>
<script>
export default {
  data () {
    return {
      product: {
        options: []
      }
    }
  },
  methods: {
    async fetchProducts () {
      let httpClient = await this.$api.get('/items/products')
      this.product.options = httpClient.data.data
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>
