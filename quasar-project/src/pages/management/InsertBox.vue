<template>
  <q-form class="column q-gutter-md">
    <div class="text-h5 q-ma-md">Insert Box</div>
    <label>Box Title</label>
    <q-input outlined type="text"/>
    <label>Box icon</label>
    <q-input  outlined type="box"/>
    <label>Box Description</label>
    <q-input  outlined type="box"/>
    <q-btn label="Insert Box" color="primary"/>
</q-form>
</template>
<script>
export default{
    name:'InsertBox',

}
</script>