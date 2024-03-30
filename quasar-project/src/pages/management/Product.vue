<template>
 <q-page class="bg-grey-3">
  
  <div class="row" v-if="mode === 'detail'">
     products details
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




export default {
  props: ['mode','id'],
  components: { ProductForm, Productstable }
}
</script>
