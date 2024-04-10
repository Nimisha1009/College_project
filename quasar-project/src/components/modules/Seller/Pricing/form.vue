<template>
  <q-form ref="form">
   <div class=" row col-5 q-pa-md" >
       <q-input type="date" outlined label="From" v-model="formData.from" :rules="[required]" />
        <!-- <DateTime v-model="formData.to" range /> -->
        <q-input mask="##-##-####" outlined label=" To" v-model="toDateDisplay" :rules="[required, validateTo]"
          :disable="!formData.from">
          <template v-slot:append>
            <q-icon name="calendar_month">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="formData.to" mask="YYYY-MM-DD" :options="validateDay">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
               </q-icon>
             </template>
           </q-input>
          <div>
           <q-select outlined label="Status" emit-value
          :options="[{ label: 'Active', value: 'active' }, { label: 'In-Active', value: 'in_active' }]"
          v-model="formData.status"></q-select>
        </div>
     </div>
      <div ref="div" >
      <q-btn class="q-my-lg"  label="Submit" color="primary" @click="submit" />
      <q-btn label="Update" color="amber" unelevated @click="updateForm" :loading="formSubmitting"
      :disable="formSubmitting" v-if="mode === 'edit'"></q-btn>
       <q-btn class="q-my-lg" label="Cancel" color="negative" @click="$router.go(-1)" /></div>
         </q-form>
         </template>
         <script>
       import moment from 'moment'
       export default {
          name: 'PricingForm',
             props: ['mode', 'id'],
                data () {
                 return {
               date: { from: null, to: null },
               formData: {},
               status: {
           loading: false,
           error: false,
           options: [],
          loadingAttempt: 0
            },
   
               }
               },
                computed: {
                toDateDisplay: {
                 set (value) {
                let dateArray = value.split('-')
                   if (dateArray?.[0].length === 2 && dateArray?.[1].length === 2 && dateArray?.[2].length === 4) {
                let dateMoment = moment(value, 'DD-MM-YYYY')
               this.formData.to = dateMoment.format('YYYY-MM-DD')
                    }
                         },
                get () {
                 let dateMoment = moment(this.formData.to)
                return dateMoment.format('DD-MM-YYYY')
                        }
                         }
                         },
     methods: {
    validateDay (date) {
      let from = this.formData.from
      let to = date
      let fromDate = moment(from)
      let toDate = moment(to)
      let NumberOfDays = toDate.diff(fromDate, 'days') + 1

      return NumberOfDays > 0
    },
    async required (value) {
      return !!value || 'Mandatory Field'
    },
    async validateTo () {
      console.log(this.formData.to)
      let from = this.formData.from
      let to = this.formData.to
      let fromDate = moment(from)
      let toDate = moment(to)
      let NumberOfDays = toDate.diff(fromDate, 'days') + 1

      return NumberOfDays > 0 || 'Not Valid'
    },
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
    async updateForm () {
      let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.formSubmitting = true
      try {
        let httpClient = await this.$api.patch('items/sellers_products_pricing/' + this.formData.id, this.formData)
        this.formSubmitting = false
        this.formData = {}
        this.$mitt.emit('module-data-changed:sellers_products_pricing')
        console.log
        this.$q.dialog({
          message: 'Data Update Successfully'
        })

        this.$refs.type_input.$el.focus()
      } catch (err) {
        this.formSubmitting = false
        this.$q.dialog({
          message: 'Data Updation Failed'
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

