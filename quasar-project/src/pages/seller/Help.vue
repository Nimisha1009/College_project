<template>
    help
    <q-card>  <router-view /></q-card>
    
    </template>
    <script>
    </script>
    <template>
    
        <div class="container ">
       <div class="text-h5 text-center q-my-lg col-12">Add Category</div>
         </div>
       <div class="row flex flex-center">
       <div class="col-6">
          <q-form class="shadow-2">
            <div class="full-width column q-gutter-sm">
        <label> Categories Name</label>
        <q-input outlined v-model="formData.category_name" />
      
        </div>
        <div class="full-width column q-gutter-sm">
        <label> Category Description</label>
        <q-input label="Description" filled autogrow  v-model="formData.Description"/>
       
    </div>
    <div class="row q-pa-md  flex flex-center ">
    <q-uploader
            url="http://localhost:8055/items/product_categories"
            label="Category Image"
            color="blue"
            square
            flat
            bordered
            style="max-width: 300px"
            v-model="formData.imageUrl"
          />
        </div>
      <div class="row q-pa-md  flex flex-center">
        <div class="q-pa-md">
        <q-btn type="button" class="q-my-lg" label="Submit" color="primary" @click="submit" /></div>
        <q-btn class="q-my-lg" label="Cancel" color="negative" @click="$router.go()" />
        </div>
    </q-form>
    </div>
    </div>
    
    </template>
    import { useQuasar } from 'quasar'
    <script>
    
    export default{
        name:'AddCategory',
        data(){
            return{
                formData: {}
            };
        }, methods: {
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
    }
</script>