<template>
 
     <q-form class=" q-pa-md">
      <div class="text-h6 text-center"> Insert Product</div>
         <div class="q-pa-md">
            <q-input label="Product Tittle"/>
            </div>
            <div>
              <q-input label="Product Categories"/>
            </div>
            <div>
              <q-input/>
            </div>
            <div class="q-pa-md ">
              <q-input label="product-Id" />
            </div>
            <div class="q-pa-md">
              <q-input label="Product-name" />
            </div>
            <div class="q-pa-md">
              <q-input label="Product Price" />
            </div>
            <div class="q-pa-md">
              <q-input label="Seller-Id" />
            </div>
            <div class="q-pa-md">
              <q-input type="date" label="Product-Date" />
            </div>
            <div class="q-pa-md" style="max-width: 500px">
              <q-input label="Description" filled autogrow />
            </div>
            <div>
              <q-btn label="Insert Product"/>
            </div>
            
    
      </q-form>
 
</template>
<script>
export default{
  name:'form',
  data(){

  }
}
</script>