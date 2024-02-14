<template>
    <q-page>
        <div class="row q-ma-md items-center">
            <div class="text-h6 q-mr-sm"> Products Page</div>
            <div class="q-ml-sm"><q-btn label="Add" to="./add" color="green" rounded></q-btn></div>
        </div>
        <q-table :rows="rows">
        </q-table>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            rows: []
        }
    },
    methods: {
        async fetchProducts() {
            let httpClient = await this.$axios.get('http://localhost:8055/items/products')
            this.rows = httpClient.data.data
        }
    },
    created() {
        this.fetchProducts()
    }
}
</script>