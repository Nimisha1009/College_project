
<template>
    <q-page >
      <q-form class="q-pa-md">
      <div style="width:40%" class="bg-grey-3">
              <div class=" bg-grey-6 text-h6 text-center">Payment</div>
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
              <q-input label="paid" />
              </div>
              <div class="q-pa-md">
              <q-input label="Transaction-number" />
              </div>
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
  