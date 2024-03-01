<template>
     <q-form class=" q-pa-md">
        <div>
          <div class=" bg-pink-1 text-h6 text-center">Product</div>
          <div>
            <div class="q-pa-md ">
              <q-input label="product-Id" />
            </div>
            <div class="q-pa-md">
              <q-input label="Product-name" />
            </div>
            <div class="q-pa-md">
              <q-input label="Cost" />
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
            <div> <q-icon name="img:my.jpg/my.png" /></div>
          </div>
        </div>
      </q-form>
</template>