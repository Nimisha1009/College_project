<template>
    <q-card class="q-pa-md">
    <div  class="q-pa-md">
    <h3>View Payment</h3>
      <q-table
        :rows="rows"
        row-key="name"
        flat bordered
      />
    </div>
</q-card>
  </template>
  <script>
  const rows = [
    {
        Payment_No:'',
      Invoice_No: '',
      Amount_Paid:'',
      Payment_Method:'',
      Reference_No:'',
      Payment_Date:'',
      Delete_Payment:'',
    },
   ]
  export default {
    setup () {
      return { rows }
    },
}
    </script>
