<template>
  <q-page class="bg-grey-3">
    <div class="row" v-if="mode === 'detail'">
   <CategoryDetail :data-id="id" class="col" />
    </div>
    <div class="column" v-else>
      <q-card v-if="['add', 'edit'].includes(mode)" class="q-ma-md self-center">
        <CategoryForm :mode="mode" :id="id" />
      </q-card>
      <CategoryTable class="col q-ma-md" v-if="!mode" />
    </div>
 </q-page>
</template>
<script>
import CategoryForm from 'components/modules/Management/category/form.vue'
import CategoryTable from 'components/modules/Management/category/table.vue'
import CategoryDetail from 'components/modules/Management/category/Detail.vue'


export default {
  props: ['mode', 'id'],
  components: { CategoryForm, CategoryTable, CategoryDetail }
}
</script>
