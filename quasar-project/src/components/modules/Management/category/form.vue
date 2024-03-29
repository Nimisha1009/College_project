<template>
      <q-form ref="form" class="q-gutter-md" :class="{ 'bg-amber-1': mode === 'edit' }"></q-form>
    <div class="container ">
     <div class="text-h5 text-center q-my-lg col-12">Add Category</div>
       </div>
     <div class="row flex flex-center">
     <div class="col-6">
        <q-form class="shadow-2">
          <div class="full-width column q-gutter-sm">
      <label> Categories Name</label>
      <q-input  ref="categories_name_input"  outlined v-model="formData.categories_name" :disable="mode === 'edit'" />
    
      </div>
      <div class="full-width column q-gutter-sm">
      <label> Category Description</label>
      <q-input label="Description" filled autogrow  v-model="formData.Description"/>
     
    </div>
    <div class="row q-pa-md  flex flex-center ">
    <q-uploader
          url="http://localhost:8055/items/categories"  label="Category Image" color="blue"  square flat
          bordered
          style="max-width: 300px"
          v-model="formData.imageUrl"
        />
      </div>
    <div  ref="div" class="row  q-gutter-sm  ">
      <div >
      <q-btn type="button" class="q-my-lg" label="Submit" color="primary" @click="submit" unelevated  :loading="formSubmitting"    v-if="mode === 'add'"/></div>
      <q-btn label="Update" color="amber" unelevated @click="updateForm" :loading="formSubmitting"
        :disable="formSubmitting" v-if="mode === 'edit'"></q-btn>
      <q-btn class="q-my-lg" label="Cancel" color="negative" @click="$router.go()" />
      </div>
    </q-form>
    </div>
    </div>
    
    </template>
    import { useQuasar } from 'quasar'
    <script>
    
    export default{
      name:'CategoryForm',
      props: ['mode', 'id'],
      data(){
          return{
            formData: {},
        formSubmitting: false,
        formError: false,
        status: {
        loading: false,
        error: false,
        }}
          }, 
      methods: {
         async submit () {
      let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.formSubmitting = true
      try {
        let httpClient = await this.$api.post('items/categories', this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:categories')
        this.$q.dialog({
          message: 'Data Submitted Successfully'
        })
        this.$refs.categories_name_input.$el.focus()
      } catch (err) {
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Form Submission failed'
        })
      }
    },
    async updateForm () {
      let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.formSubmitting = true
      try {
        let httpClient = await this.$api.patch('items/categories/' + this.formData.id, this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:categories')
        this.$q.dialog({
          message: 'Data Updated Successfully'
        })
        this.$refs.skill_name_input.$el.focus()
      } catch (err) {
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Data Updation failed'
        } ) 
      }
    },
    async fetchData () {
      let httpClient = await this.$api.get('items/categories/' + this.id)
      this.formData = httpClient.data.data
    }
  },
  created () {
  this.fetchData()
     }
}
    
    
    </script>