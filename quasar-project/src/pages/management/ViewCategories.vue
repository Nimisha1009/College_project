<template>
    <q-form class="column q-gutter-md">
        <div class="text-h5 q-ma-md">View Categories</div>
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
  
  
  