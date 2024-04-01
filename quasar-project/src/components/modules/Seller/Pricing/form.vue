<template>
   
      <div clsss="row">
        <div class="text-h5 text-center q-my-lg col-12">product pricing</div>
      </div>
      <div class="column q-ma-sm">
        <label class="q-my-xs text-grey-8 text-bold">Product name</label>
        <q-input ref="name_input" outlined v-model="formData.name" disable="formSubmitting"  />
      </div>
          <div class="column q-ma-sm">
            <label> Effectiv from Date</label>
            <q-input outlined type="date" v-model="formData.effective_from_date" />
  
          </div>
          <div class="column q-ma-sm">
            <label> Effectivw To Date</label>
            <q-input outlined type="date" v-model="formData.effective_to_date" />
  
          </div>
          <div class="column q-ma-sm">
            <label> Sale Price</label>
            <q-input type="date" outlined v-model="formData.sale_price" />
  
          </div>
  
          <div class="column q-ma-sm">
            <label>Description</label>
            <q-input outlined autogrow v-model="formData.description" />
  
          </div>
          <div class="column q-ma-sm ">
            <q-uploader url="http://localhost:8055/items/products" label="Upload Product Image" color="blue" square flat
              bordered style="max-width: 300px" v-model="formData.image" />
          </div>
           <q-select label="status" class="q-pa-md" outlined emit-value
            :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
            v-model="formData.status"></q-select>
  
            <div ref="div"  class="row q-mx-sm q-my-lg">
        <div >
          <q-btn label="Submit" color="primary" @click="submit" unelevated :loading="formSubmitting"
          v-if="mode === 'add'" />
        </div>
        <div>
          <q-btn unelevated label="Cancel" color="negative" @click="$router.go()" />
        </div>
      </div>
     </template>
     <script>
     export default{
        name:'PricingForm',
     }
    </script>
     