<template>
 
     <q-form class=" q-pa-md">
      <div class="text-h6 text-center"> Add Product</div>
         <div class="q-pa-md">
            <q-input label="Product Name"  v-model="formData.Product_name"/>
            </div>
            <div>
              <q-input label="Product Categories"  v-model="formData.Product_Categories"/>
            </div>
          
           
            <div class="q-pa-md">
              <q-input label="Product Price"  v-model="formData.Product_Price" />
            </div>
            <div class="q-pa-md">
              <q-input label="Seller-Id"  v-model="formData.Seller_Id" />
            </div>
            <div class="q-pa-md">
              <q-input type="date" label="Product-Date"   v-model="formData.Product_Date"/>
            </div>
            <q-select emit-value :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
            v-model="formData.status"></q-select>
            <div class="q-pa-md">
              <q-input type="date" label="Quantity"   v-model="formData.Quantity"/>
            </div>
            <div class="q-pa-md" style="max-width: 500px">
              <q-input label="Description" filled autogrow  v-model="formData.Description"/>
            </div>
            <q-btn type="button" class="q-my-lg" label="Submit" color="primary" @click="submit" />
        <q-btn class="q-my-lg" label="Cancel" color="negative" @click="$router.go(-1)" />
    
      </q-form>
 
</template>
import { useQuasar } from 'quasar'
<script>
export default{
  name:'ProductForm',
  data(){
 return{
  formData: {}
 }
  },
  methods: {
        async submit() {
            let httpClient = await this.$axios.post('http://localhost:8055/items/products', this.formData)
            
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