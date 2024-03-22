<template>
  <q-table :rows="rows"></q-table>
  </template>
  <script>
  export default {
      name:'ViewCategories',
      data(){
          return {
              rows: [],
          }
      },
      methods: {
          async fetchProducts(){
           let httpClient = await this.$api.get('/items/category')
           this.rows = httpClient.data.data
          }
      },
      created(){
          this.fetchcategory()
      }
  }
  
  </script>