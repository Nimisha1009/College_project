<template>
<q-page class="row">
    <div class="col-3 bg-grey-2">
     </div>

   <div class="col-9">
    <ProductCard></ProductCard>
  </div>
</q-page>
</template>
<script>
import ProductCard from 'src/components/Card/ProductCard.vue';
export default{
    name: 'Home',
    components:{ProductCard}
}
</script>