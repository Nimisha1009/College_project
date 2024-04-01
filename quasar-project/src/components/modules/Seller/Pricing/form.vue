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
            <label> Effective To Date</label>
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
            <q-uploader url="http://localhost:8055/items/sellers_products_pricing" label="Upload Product Image" color="blue" square flat
              bordered style="max-width: 300px" v-model="formData.image" />
          </div>
           <q-select label="status" class="q-pa-md" outlined emit-value
            :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
            v-model="formData.status"></q-select>
  
            <div ref="div"  class="row q-mx-sm q-my-lg">
        <div >
          <q-btn label="Submit" color="primary" @click="submit" unelevated :loading="formSubmitting"
        />
        </div>
        <div>
          <q-btn unelevated label="Cancel" color="negative" @click="$router.go()" />
        </div>
      </div>
     </template>
     <script>
     export default{
        name:'PricingForm',
        data(){
            formData: {},
            formSubmitting: false,
      formError: false,
      status: {
        loading: false,
        error: false,
        options: [],
        loadingAttempt: 0
      }
      }
     },
     methods: {
    async submit() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return
      }
      this.formSubmitting = true;
      try {
     let httpClient = await this.$api.post('/items/products_request', this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:products_request')
        this.$router.go(-1)
        this.$q.dialog({
          title: 'Successfull',
          message: 'Data Submitted'
        });
        this.$refs.name_input.$el.focus()

      } catch (err) {
        console.log(err)
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Form Submission failed'
        })
      }}

    },

    </script>
     