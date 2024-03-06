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
      Category_Id:'',
      Category_Title: '',
    Category_Description: '',
      Delete_Category: '',
      Edit_Category: '',
      
    },
   ]
  export default {
    setup () {
      return { rows }
    }
  }
  </script>
  
  
  