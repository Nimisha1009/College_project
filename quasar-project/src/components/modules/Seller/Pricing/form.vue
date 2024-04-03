<template>
  <q-form ref="form">
   <div class="row">
    <div class="col-5 q-pa-md" >
      <q-card >
        <q-input  type="date" label="Effective-from-date" v-model="formData.from"></q-input>
      </q-card>
     </div>
   <div class="col-5 q-pa-md">
    <q-card >
    <q-input type="date" label="Effective-to-date" v-model="formData.to"></q-input>
   </q-card>

    </div>
   
 </div>
 <div ref="div"  class="row q-mx-sm q-my-lg">
      <div >
        <q-btn label="Submit" color="primary" @click="submit" unelevated :loading="formSubmitting"
        :disable="formSubmitting || mode === 'edit'" />
      </div>
      </div>

 </q-form>

</template>
<script>
 export default {
  name: 'PricingForm',
  props: ['mode', 'id'],
  data () {
    return {
      formData: {},
      formSubmitting: false,
      formError: false,
    }
  },
 methods:{
    async submit() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return
      }
      this.formSubmitting = true;
      try {
     let httpClient = await this.$api.post('/items/sellers_products_pricing', this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:sellers_products_pricing')
        this.$router.go()
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
    
    async fetchData () {
      let httpClient = await this.$api.get('items/sellers_products_pricing/' + this.id);
      this.formData = httpClient.data.data;
    }
  },
  created () {
    
    if (this.mode === 'edit') {
      this.fetchData()
    }
  }
}
</script>

