<template>
    <q-page >
      <q-form class=" bg-grey-4 q-pa-md">
      <div style="width:40%" class="bg-grey-3">
              <div class=" bg-grey-6 text-h6 text-center">Product</div>
           <div>
              <div class="q-pa-md ">
              <q-input label="product-Id"/>
              </div>
             <div class="q-pa-md">
              <q-input label="Product-name"/></div>
               <div class="q-pa-md">
              <q-input label="Cost" />
              </div>
              <div class="q-pa-md">
              <q-input label="Seller-Id" />
              </div>
              <div class="q-pa-md">
              <q-input label="product-Date" />
              </div>
              <div class="q-pa-md" style="max-width: 500px">
          <q-input v-model="text" label="Description" filled autogrow/></div>
         <div> <q-icon name="img:my.jpg/my.png" /></div>
              </div>
              </div>
              </q-form>
                    </q-page>
                     </template>
                     <script>
                       export default {
                   data(){
                         }}
                    </script>