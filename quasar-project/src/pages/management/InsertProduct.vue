<template>
  <q-page >  
<ProductForm />

</q-page>
<table/>


</template>
<script>
import ProductForm from 'components/modules/Management/products/form.vue'
import table from 'components/modules/Management/products/table.vue'
export default {
    components: {ProductForm,table}
}
</script>