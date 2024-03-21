<template>
  <q-table :rows="rows"></q-table>
  </template>
  <script>
  export default {
      name:'ViewOrder',
      data(){
          return {
              rows: [],
          }
      },
      methods: {
          async fetchProducts(){
           let httpClient = await this.$axios.get('http://localhost:8055/items/orders')
           this.rows = httpClient.data.data
          }
      },
      created(){
          this.fetchProducts()
      }
  }
  
  </script>