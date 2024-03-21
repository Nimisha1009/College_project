<template>
  <div class="container ">
    <div class="row ">
      <div class="text-h5 text-center q-my-lg col-12">
        Add Category
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <q-form>
        <div class="full-width column q-gutter-sm">
          <label> Categories Name</label>
          <q-input outlined type="text" v-model="formData.category_Name" />
        </div>
        <div class="full-width column q-gutter-sm">
          <label> Category Description</label>
          <q-input outlined type="text" v-model="formData.description" />
        </div>
        <div class="full-width column q-gutter-sm">
          <label> Category Image</label>
          <q-input outlined type="text" v-model="formData.imageUrl" />
        </div>
        <div class="column items-center q-my-lg">
          <q-btn type="button" class="q-my-lg" label="Submit" color="primary" @click="submit" />
          <q-btn class="q-my-lg" label="Cancel" color="negative" @click="$router.go(-1)" />

        </div>
      </q-form>
    </div>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
export default {
  name: 'Categoriesform',
  data () {
    return {
      formData: {}
    };
  },
  methods: {
    async submit () {
      let httpClient = await this.$axios.post('http://localhost:8055/items/product_categories', this.formData)

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
