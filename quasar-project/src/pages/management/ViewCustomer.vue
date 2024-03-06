<template>
    <q-card class="q-pa-md">
    <div  class="q-pa-md">
    <h3>View Customers</h3>
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
      Customer_Id:'',
      Customer_Name: '',
      Customer_Email: '',
      Customer_Image: '',
      Customer_Country: '',
      Customer_City: '',
      Customer_Mobile_Number: '',
      Customer_Delete: '',
      
    },
   ]
  export default {
    setup () {
      return { rows }
    },
}
    </script>
