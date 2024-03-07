<template>
    <q-form class="column q-gutter-md">
        <div class="text-h5 q-ma-md">View Customer</div>
      <q-table
        :rows="rows"
        row-key="name"
        flat bordered
      />
  </q-form>
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
