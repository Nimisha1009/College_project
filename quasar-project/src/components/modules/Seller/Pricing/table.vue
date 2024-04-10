<template>
  <q-table :rows="rows" :columns="columns">
    <template v-slot:body-cell-actionControl="props">
      <q-td>
        <q-btn icon="edit" :to="'./edit/' + props.row.id" unelevated color="amber" dense></q-btn>
        <q-btn icon="delete" @click="deleteData(props.row.id)" unelevated color="red" dense></q-btn>
      </q-td>

    </template>>
  </q-table>
</template>
<script>
export default {
  name:'PricingTable',
  data () {
    return {
      rows: [],
      columns: [
        { label: 'ID', field: 'id', name: 'id', align: 'left' },
         { label: 'From', field: 'from', name: 'from', align: 'left' },
         { label: 'Status', field: 'status', name: '', align: '' },
        { label: 'To', field: 'to', name: 'to', align: 'left' },
        { label: 'Action', field: '', name: 'actionControl' },
      ]
    }
  },
  methods: {
            async fetchData(){
             let httpClient = await this.$api.get('/items/sellers_products_pricing')
             this.rows = httpClient.data.data
            },
            async deleteData (id) {
      this.$q.dialog({
        title: 'Deleting Data',
        message: 'Are you sure?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        let httpClient = await this.$api.delete('/items/sellers_products_pricing/' + id)
        this.fetchData()
      })
    }
        },
        created(){
            this.$mitt.on('module-data-changed:sellers_products_pricing', this.fetchData)
            this.fetchData()
        }
    }
</script>
     
     


   
   