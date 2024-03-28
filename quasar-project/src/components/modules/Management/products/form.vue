<template>
  <div class="container">
    <div class="text-h6 text-center  q-my-lg "> Add Products</div>
  </div>
  <div class="row flex flex-center">
    <div class="col-6">
      <q-form class="shadow-3 ">
        <div class="q-pa-md q-gutter-sm">
          <label> Product Name</label>
          <q-input outlined v-model="formData.name" />
        </div>
        <div class="q-pa-md q-gutter-sm">
          <label> Product Category</label>
          <q-input outlined v-model="formData.Product_Categories" />
        </div>

        <div class="q-pa-md q-gutter-sm">
          <label> Product Price</label>
          <q-input outlined v-model="formData.Product_Price" />

        </div>

        <div class="q-pa-md q-gutter-sm">
          <label>Product Details</label>
          <q-input filled autogrow v-model="formData.Details" />

        </div>
        <div class="row q-pa-md  flex flex-center ">
          <q-uploader url="http://localhost:8055/items/products" label="Upload Product Image" color="blue" square flat
            bordered style="max-width: 300px" v-model="formData.imageUrl" />
        </div>


        <q-select label="status" class="q-pa-md" outlined emit-value
          :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
          v-model="formData.status"></q-select>

        <div class="row q-pa-md  flex flex-center">
          <div class="q-pa-md">
            <q-btn type="button" class="q-my-lg" label="Submit" color="primary" @click="submit" />
          </div>
          <q-btn class="q-my-lg" label="Cancel" color="negative" @click="$router.go()" />
        </div>
      </q-form>
    </div>
  </div>
</template>
import { useQuasar } from 'quasar'
<script>
export default {
  name: 'ProductForm',
  data () {
    return {
      formData: {},
      products: {
        option: [],
        loading: false,
        error: false
      }

    }
  },
  methods: {
    async fetchproducts () {
      this.products.loading = true
      try {
        this.products.loadingAttempt++
        let httpClient = await this.$api.get('/items/products')
        this.products.loadingAttempt = 0
        this.products.error = false
        this.products.options = httpClient?.data?.data
      } catch (err) {
        if (this.products.loadingAttempt <= 5) {
          // this.department.error = 'Please wait loading options'
          setTimeout(this.fetchcategoryOptions, 1000)

        } else {
          this.products.error = 'Failed to load options'

        }

      }
      if (!!!this.products.error || (!!this.products.error && this.products.loadingAttempt > 5)) {
        this.products.loading = false
      }


    },
    async submit () {
      let httpClient = await this.$axios.post('http://localhost:8055/items/products', this.formData)

      this.$q.dialog({
        title: 'Successfull',
        message: 'Data Submitted'
      }).onOk(() => {
        this.$router.go(-1)
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        this.$router.go(-1)
      })

    }
  },
  created () {
    this.fetchproducts()
  }
}
</script>
