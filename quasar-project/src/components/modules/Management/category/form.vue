<template>
  <q-form ref="form" class="q-pa-sm" :class="{ 'bg-amber-1': mode === 'edit' }">
    <div clsss="row">
      <div class="text-h5 text-center q-my-lg col-12">Add Category</div>
    </div>
    <div class="column q-ma-sm">
      <label class="q-my-xs text-grey-8 text-bold"> Name</label>
      <q-input ref="name_input" outlined v-model="formData.name" disable="formSubmitting || mode === 'edit'"/>

    </div>
    <div class="column q-ma-sm">
      <label class="q-my-xs text-grey-8 text-bold"> Parent Category</label>
      <q-select outlined v-model="formData.parent_category_id" />

    </div>
    <div class="column q-ma-sm">
      <label class="q-my-xs text-grey-8 text-bold"> Description</label>
      <q-input outlined autogrow v-model="formData.Description" />

    </div>
    <div class="column q-ma-sm ">
      <q-uploader url="http://localhost:8055/items/categories" label="Category Image" color="blue" square flat bordered
        style="max-width: 300px" v-model="formData.Image" />
    </div>
    <div class="column q-ma-sm ">
    <q-select label="status" class="column q-ma-sm " outlined emit-value
          :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
          v-model="formData.status"></q-select>
          </div>
     <div  ref="div" class="row q-mx-sm q-my-lg">
      <div>
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
  name: 'CategoryForm',
  props: ['mode', 'id'],
  data () {
    return {
      formData: {},
      formSubmitting: false,
      formError: false,
      status: {
        loading: false,
        error: false,
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
        this.$refs.name_input.$el.focus()
      } catch (err) {
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Data Updation failed'
        })
      }
    },
    async fetchData () {
      let httpClient = await this.$api.get('items/categories/' + this.id)
      this.formData = httpClient.data.data
    }
  },
  created () {
    if (this.mode === 'edit') {
      this.fetchData()
    }

  }
}


</script>
