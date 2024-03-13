<template>
    <q-page>
<div class="q-pa-md">
    <div class="container">
        <div class="row 1-col-gutter-md">
        <div class="col comp-grid">
            <div class="text-h6 text-bold">The dashboard</div>
        </div>
        </div>
    </div>
    </div>

    <div class="">
    <div class="container">
        <div class="row q-col-gutter-md">
            <div class="col-md-4 col-sm-6 col-6">
                <div class="q-pa-md row items-start q-gutter-md">
    <q-card  class="my-card">
      <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
        <q-chip v-ripple color="red">-30%</q-chip>
      </q-img>
      <q-card-section>
        <div>
            <div class="float-right"><q-btn color="primary" icon="shopping_cart" round ></q-btn></div>
        <div class="text-subtitle1 text-capitalize ellipsis">Product name</div>
    </div>
       
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-capitalize">Price</div> 
        <div class="text-caption text-capitalize text-grey">Price</div> 
      </q-card-section>
    </q-card>
            </div>
            
            </div>
        </div>
    </div>
</div>
    </q-page>
</template>

<script>
export default {
    
}
</script>