<template>
 <div class="container">
   <div class="text-h5 text-center  col-12"> Seller</div>
     </div>
   <div class="row flex flex-center">
   <div class="col-6">
      <q-form class="shadow-4">
        <div class="full-width column q-gutter-sm">
    <label> Seller Name</label>
    <q-input outlined v-model="formData.Seller_name" />
  
    </div>
    <div class="full-width column q-gutter-sm">
    <label> Email</label>
    <q-input outlined  v-model="formData.email"/>
   
</div>
<div class="full-width column q-gutter-sm">
  <label> Mobile number</label>
  <q-input  outlined v-model="formData.Product_Price"/>
 
</div>
<div class="full-width column q-gutter-sm">
  <label>Address</label>
  <q-input outlined  v-model="formData.adress"/>
 
</div>
     <div class="q-pa-md">
                         <label>Gender:</label>
                     <q-radio v-model="male"  label="Male" />
                      <q-radio v-model="female"  label="Female" />
                    </div>
                    <q-select filled v-model="Identity_Proof" :options="options" label="Identity Proof" />
                    
    <div class="q-pa-md">
    <q-btn type="button" class="q-my-lg" label="Submit" color="primary" @click="submit" /></div>
  
</q-form>
</div>
</div>
</template>
import { useQuasar } from 'quasar'
<script>
export default{
  name:'SellerForm',
  data(){
 return{
  formData: {},
  options: [
        'Pan Card','AdhaarCard','Other Identity proof'
      ]
 }
  },
  methods: {
        async submit() {
            let httpClient = await this.$axios.post('http://localhost:8055/items/sellers', this.formData)
            
            this.$q.dialog({
                title: 'Successfull',
                message: 'Data Submitted'
            }).onOk(() => {
                this.$router.go(-1)
            }).onCancel(() => {
                // console.log('Cancel')
            }).onDismiss(() => {
                this.$router.go(-1)
            })

        }
    }

}
</script>



   