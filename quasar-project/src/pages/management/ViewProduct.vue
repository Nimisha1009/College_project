<template>
    <div class="q-pa-md">
      <q-table
        :rows="rows"
        row-key="name"
        flat bordered
      />
    </div>
  </template>
  <script>
  const rows = [
    {
      Product_Category_Id:'',
      Product_Category_Title: '',
      Product_Category_Description: '',
      Delete_Product_Category: '',
      Edit_Product_Category: '',
      
    },
   ]
  export default {
    setup () {
      return { rows }
    }
  }
  </script>
  