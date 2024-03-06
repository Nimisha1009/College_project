<template>
    <q-card class="q-pa-md">
    <div  class="q-pa-md">
    <h3>View Orders</h3>
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
        Order_No:'',
      Customer_Email: '',
      Invoice_no:'',
      product_tittle:'',
      Product_quantity:'',
      Product_Size:'',
      Order_Date:'',
      Total_Amount:'',
      Order_Status:'',
      Delete_Order:'',
     
    },
   ]
  export default {
    setup () {
      return { rows }
    },
}
    </script>
