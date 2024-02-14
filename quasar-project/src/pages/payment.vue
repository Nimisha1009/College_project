
<template>
    <q-page >
      <q-card style="width:40%" >
      <q-form class="q-pa-md">
      <div >
              <div class=" bg-pink-1 text-h6 text-center">Payment</div>
           <div>
              <div class="q-pa-md ">
              <q-input label="customer-Id"/>
              </div>
             <div class="q-pa-md">
              <q-input label="Details"/></div>
              <div  class="q-pa-md"> <q-select filled v-model="payment" :options="options" label="payment-list-type" /></div>
              <div class="q-pa-md">
              <q-input label="Total-amount" />
              </div>
              <div class="q-pa-md">
              <q-input label="Paid" />
              </div>
              <div class="q-pa-md">
              <q-input label="Transaction-number" />
              </div>
              </div>
                 </div>
                </q-form>
              </q-card>
                    </q-page>
                     </template>
<script>
  export default {
    data(){

    }}
  </script>
  