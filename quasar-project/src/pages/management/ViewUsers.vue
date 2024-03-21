<template>
  <q-table :rows="rows"></q-table>
  </template>
  <script>
  export default {
      name:'Viewusers',
      data(){
          return {
              rows: [],
          }
      },
      methods: {
          async fetchProducts(){
           let httpClient = await this.$axios.get('http://localhost:8055/items/users')
           this.rows = httpClient.data.data
          }
      },
      created(){
          this.fetchProducts()
      }
  }
  
  </script>