<template>
  <q-page>
    {{ $route.params }}
    <ProductForm v-if="['add', 'edit'].includes(mode,)" />
    <Productstable v-if="!mode" />

  </q-page>



</template>
<script>
import ProductForm from 'components/modules/Management/products/form.vue'
import Productstable from 'components/modules/Management/products/table.vue'


export default {
  props: ['mode'],
  components: { ProductForm, Productstable }
}
</script>
