<template>
  <q-form ref="form" class="q-pa-sm" :class="{ 'bg-amber-1': mode === 'edit' }">
    <div clsss="row">
      <div class="text-h5 text-center q-my-lg col-12">Add product</div>
    </div>
    <div class="column q-ma-sm">
      <label class="q-my-xs text-grey-8 text-bold">Product name</label>
      <q-input ref="name_input" outlined v-model="formData.name" disable="formSubmitting || mode === 'edit'" />
    </div>
        <div class="column q-ma-sm">
          <q-select outlined label="categories"  use-input @filter="filtercategories" :options="categories.options" option-value="id" option-label="name"
            map-options emit-value v-model="formData.categories_id"></q-select>
        </div>

        <div class="column q-ma-sm">
          <label> Price</label>
          <q-input outlined v-model="formData.price" />

        </div>
        <div class="column q-ma-sm">
          <label> Date</label>
          <q-input type="date" outlined v-model="formData.date" />

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
        <q-btn label="Update" color="amber" unelevated @click="updateForm" :loading="formSubmitting"
          :disable="formSubmitting" v-if="mode === 'edit'"></q-btn>
      </div>
      <div>
        <q-btn unelevated label="Cancel" color="negative" @click="$router.go()" />
      </div>

        </div>
      </q-form>
   
</template>
import { useQuasar } from 'quasar'
<script>
export default {
  name: 'ProductForm',
  props: ['mode', 'id'],
  data () {
    return {
      formData: {},
      formSubmitting: false,
      formError: false,
      categories: {
        searchText: '',
        options: [],
        loading: false,
        error: false,
        loadingAttempt: 0
      },
      status: {
        loading: false,
        error: false,
        options: [],
        loadingAttempt: 0
      }

    }
  },
  methods: {
    async filtercategories (inputValue, doneFn, abortFn) {
      this.categories.searchText = inputValue
      await this.fetchcategoriesOptions()
      doneFn()
      console.log(inputValue)
    },
    async fetchcategoriesOptions () {
      this.categories.loading = true
      try {
        this.categories.loadingAttempt++
        let params = {
          fields: [
            '*',
            'categories_id.*'
          ]
        }
        if (this.categories.searchText) {
          params.filter = {
            name: {
              _contains: this.categories.searchText
            }
          }
        }
        let httpClient = await this.$api.get('/items/categories')
        this.categories.loadingAttempt = 0
        this.categories.error = false
        this.categories.options = httpClient?.data?.data
      } catch (err) {
        if (this.categories.loadingAttempt <= 5) {
          // this.department.error = 'Please wait loading options'
          setTimeout(this.fetchcategoriesOptions, 1000)

        } else {
          this.categories.error = 'Failed to load options'

        }

      }
      if (!!!this.categories.error || (!!this.categories.error && this.categories.loadingAttempt > 5)) {
        this.categories.loading = false
      }


    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return
      }
      this.formSubmitting = true;
      try {
     let httpClient = await this.$api.post('/items/products', this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:products')
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
      }

    },
    async updateForm () {
      let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.formSubmitting = true
      try {
        let httpClient = await this.$api.patch('items/products/' + this.formData.id, this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:products')
        this.$q.dialog({
          message: 'Data Update Successfully'
        })

        this.$refs.name_input.$el.focus()
      } catch (err) {
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Data Updation Failed'
        })
      }
    },
    async fetchData () {
      let httpClient = await this.$api.get('items/products/' + this.id);
      this.formData = httpClient.data.data;
    }
  },
  created () {
    this.fetchcategoriesOptions()
    if (this.mode === 'edit') {
      this.fetchData()
    }
  }
}
</script>
