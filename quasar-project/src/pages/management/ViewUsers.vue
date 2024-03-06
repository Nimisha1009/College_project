<template>
    <q-card class="q-pa-md">
    <div  class="q-pa-md">
    <h3>View Users</h3>
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
       User_Name:'',
       User_Email:'',
       User_Image:'',
       User_Country:'',
       User_Job:'',
    User_Delete:'',
    },
   ]
  export default {
    setup () {
      return { rows }
    },
}
    </script>
