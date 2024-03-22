<template>
    <q-table :rows="rows"></q-table>
    </template>
    <script>
    export default {
        name:'ProductCattable',
        data(){
            return {
                rows: [],
            }
        },
        methods: {
            async fetchproductCategories(){
             let httpClient = await this.$api.get('http://localhost:8055/items/product_categories')
             this.rows = httpClient.data.data
            }
        },
        created(){
            this.fetchproductCategories()
        }
    }
    
    </script>