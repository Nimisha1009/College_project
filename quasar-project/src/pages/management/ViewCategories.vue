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
            async fetchproduct_categories(){
             let httpClient = await this.$api.get('http://localhost:8055/items/products_categories')
             this.rows = httpClient.data.data
            }
        },
        created(){
            this.fetchproduct_categories()
        }
    }
    
    </script>