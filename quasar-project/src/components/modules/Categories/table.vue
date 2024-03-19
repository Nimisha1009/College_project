<template>
    <q-table :rows="rows"></q-table>
    </template>
    <script>
    export default {
        data(){
            return {
                rows: [],
            }
        },
        methods: {
            async fetchCategories(){
             let httpClient = await this.$axios.get('http://localhost:8055/items/product_categories')
             this.rows = httpClient.data.data
            }
        },
        created(){
            this.fetchCategories()
        }
    }
    
    </script>