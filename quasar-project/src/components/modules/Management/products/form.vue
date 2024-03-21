<template>
  
 <q-form class="q-pa-md shadow-2" style="width: 50%;">
     <div class="text-h6 text-center"> Add Products</div>
      <div class="col-12 col-md-3 q-ma-sm">
        <label for="Name">Product Name</label>
        <q-input outlined v-model="formData.Product_name" />
      </div>
      <div class="col-12 col-md-3 q-ma-sm">
        <label for="Name">Product Categories</label>
        <q-input outlined v-model="formData.Product_Categories" />
      </div>
      <div class="col-12 col-md-3 q-ma-sm">
        <label for="Name">Product Price</label>
        <q-input outlined v-model="formData.Product_Price" />
      </div>
      <div class="col-12 col-md-3 q-ma-sm">
        <label for="Name">Seller Id</label>
        <q-input outlined v-model="formData.Seller_Id" />
      </div>
      <div class="text-center q-my-lg col-12">
<q-uploader
        url="http://localhost:8055/items/products"
        label=" Upload Product Image"
        color="blue"
        square
        flat
        bordered
        style="max-width: 300px"
        v-model="formData.imageUrl"
      />
    </div>
      
      <div class="col-12 col-md-3 q-ma-sm">
        <label for="Name"> Date</label>
        <q-input type="date" outlined v-model="formData.Product_Date" />
      </div>
<q-select outlined emit-value :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
            v-model="formData.status"></q-select>
            <div class="col-12 col-md-3 q-ma-sm">
        <label for="Name">Product- Quantity</label>
        <q-input  outlined v-model="formData.Product_Quantity" />
      </div> 
           <div class="col-12 col-md-3 q-ma-sm">
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