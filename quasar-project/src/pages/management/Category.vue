<template>
  <q-page>
    {{ $route.params }}
    <CategoryForm v-if="['add', 'edit'].includes(mode)" />
    <CategoryTable v-if="!mode" />

  </q-page>



</template>
<script>
import CategoryForm from 'components/modules/Management/category/form.vue'
import CategoryTable from 'components/modules/Management/category/table.vue'


export default {
  props: ['mode'],
  components: {CategoryForm , CategoryTable }
}
</script>
