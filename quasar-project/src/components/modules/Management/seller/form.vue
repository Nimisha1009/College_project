<template>
    <q-form ref="form" class="q-ma-lg" :class="{ 'bg-amber-1': mode === 'edit' }">
    <div clsss="row">
     <div class="text-h5 text-center q-my-lg ">Add Seller</div>
   </div>
       <div ref="name_input" class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Seller name</label>
     <q-input outlined  v-model="formData.name" :rules="[val => !!val || 'Mandatory Field']" disable="formSubmitting || mode === 'edit'"></q-input>
   </div>
   <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Email</label>
     <q-input outlined  v-model="formData.Email"></q-input>
 </div>
 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Mobile number</label>
     <q-input outlined v-model="formData.Mobile_number"  ></q-input>
 </div>
 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Gender</label>
     <q-select outlined v-model="formData.gender" :options="gender.options" map-options
     option-label="text" emit-value option-value="value" :loading="gender.loading" :error-message="gender.error"
     :error="!!gender.error"></q-select>
     </div>
     <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Address</label>
     <q-input outlined  v-model="formData.Address"></q-input>
 </div>
 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">State</label>
     <q-input outlined  v-model="formData.state"></q-input>
 </div>
 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">City</label>
     <q-input outlined  v-model="formData.city"></q-input>
 </div>
 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Pincode</label>
     <q-input outlined  v-model="formData.pincode"></q-input>
 </div>
 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Adhaar number</label>
     <q-input outlined  v-model="formData.adhaar_number"></q-input>
 </div>
     <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Website name</label>
     <q-input outlined  v-model="formData.website_name"></q-input>
 </div>

 <div class="column q-ma-sm">
     <label class="q-my-xs text-grey-8 text-bold">Website Url</label>
     <q-input outlined  v-model="formData.website_url"></q-input>
 </div>

     
     <div class="column q-ma-sm ">
     <q-uploader url="http://localhost:8055/items/categories" label="Category Image" color="blue" square flat bordered
       style="max-width: 300px" v-model="formData.image" />
   </div>
   <div class="column q-ma-sm ">
   <q-select label="status" class="column q-ma-sm " outlined emit-value
         :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
         v-model="formData.status"></q-select>
         </div>
     <div ref="div"  class="row q-mx-sm q-my-lg">
     <div >
       <q-btn label="Submit" color="primary" unelevated @click="submitForm" :loading="formSubmitting" :disable="formSubmitting || mode === 'edit'"></q-btn>
     </div>
     <div>
       <q-btn label="Update" color="amber" unelevated @click="updateForm" :loading="formSubmitting"
         :disable="formSubmitting" v-if="mode === 'edit'" ></q-btn>
      </div>
      <div>
       <q-btn label="Cancel" color="red" unelevated @click="$router.go()"></q-btn>
     </div>
     </div>
   </q-form>
  </template>
  import { useQuasar } from 'quasar'
  <script>
  export default{
   props:['mode','id'],
    name:'SellerForm',
    data(){
   return{
    formData: {},
  
    formSubmitting: false,
    formError: false,
       status: {
         loading: false,
         error: false,
         options: [],
         loadingAttempt: 0
       },
       gender: {
         loading: false,
         error: false,
         options: [],
         loadingAttempt: 0
       }
     }
   },
   methods: {
     async fetchgenderOptions () {
       this.gender.loading = true
       try {
           this.gender.loadingAttempt++
         let httpClient = await this.$api.get('fields/sellers/gender')
         this.gender.loadingAttempt = 0;
         this.gender.error = false;
         this.gender.options = httpClient?.data?.data?.meta?.options?.choices;
       } catch (err) {
         if (this.gender.loadingAttempt <= 5) {
           setTimeout(this.fetchgenderOptions, 1000);
         } else {
           this.gender.error = 'Failed to load options';
         }
       }
       if (!!!this.gender.error || (!!this.gender.error && this.gender.loadingAttempt > 5)) {
         this.gender.loading = false
       }
     },
     async submitForm () {
       let valid = await this.$refs.form.validate();
       if (!valid) {
         return;
       }
       this.formSubmitting = true;
       try {
         let httpClient = await this.$api.post('items/sellers', this.formData)
         this.formSubmitting = false
         this.formData = {}
         this.$mitt.emit('module-data-changed:sellers')
         this.$router.go(-1)
         this.$q.dialog({
           message: 'seller Added Successfully'
         });
         this.$refs.name_input.$el.focus();
       } catch (err) {
         this.formSubmitting = false
         this.$q.dialog({
           message: 'Form Submission failed'
         });
       }
     },
     async updateForm () {
       let valid = await this.$refs.form.validate();
       if (!valid) {
         return
       }
       this.formSubmitting = true;
       try {
         let httpClient = await this.$api.patch('items/sellers/' + this.formData.id, this.formData);
         this.formSubmitting = false;
         this.formData = {};
         this.$mitt.emit('module-data-changed:sellers');
         this.$q.dialog({
           message: 'Data Updated Successfully'
         });
         this.$refs.name_input.$el.focus();
       } catch (err) {
         this.formSubmitting = false;
         this.$q.dialog({
           message: 'Data Updation failed'
         });
       }
     },
     async fetchData () {
       let httpClient = await this.$api.get('items/sellers/' + this.id);
       this.formData = httpClient.data.data;
     }
   },
   created  () {
   this.fetchgenderOptions();
   if (this.mode === 'edit') {
     this.fetchData();
   }
 }
};
</script>

 
  