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
        { label: 'To', field: 'to', name: 'to', align: 'left' },
        { label: 'Action', field: '', name: 'actionControl' },
      ]
    }
  },
}
</script>
   
   