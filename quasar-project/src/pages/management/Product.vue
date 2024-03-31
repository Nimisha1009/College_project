<template>
 <q-page class="bg-grey-3">
  
  <div class="row" v-if="mode === 'detail'">
    <ProductsDetail :data-id="id" class="col" />
    </div>
    <div class="column" v-else>
      <q-card v-if="['add', 'edit'].includes(mode)" class="q-ma-md self-center">
        <ProductForm :mode="mode" :id="id" />
      </q-card>
      <Productstable class="col q-ma-md" v-if="!mode" />
      
    </div>
</q-page>


</template>
<script>
import ProductForm from 'components/modules/Management/products/form.vue'
import Productstable from 'components/modules/Management/products/table.vue'
import ProductsDetail from 'components/modules/Management/products/Detail.vue'



export default {
  props: ['mode','id'],
  components: { ProductForm, Productstable, ProductsDetail }
}
</script>
