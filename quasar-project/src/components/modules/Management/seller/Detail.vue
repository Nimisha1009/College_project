<template>
     <div class="column q-gutter-md q-pa-md">
   <q-card class="q-pa-md column">
  <div class="text-h6 q-my-md text-bold">Seller Detail</div>
  <div class="row">
    <div>
      <q-img width="150px" fit="contain" :src="'http://localhost:8055/assets/' + detail?.id?.avatar"></q-img>
    </div>
    <div class="col q-pa-md">
      <div class="column">
        <div class="row">
          <div><span class="text-bold text-primary">Name:</span></div>
          <div class="col q-mx-sm"> {{ detail?.name }} </div>


        </div>
        <div class="row">
          <div><span class=" text-bold text-primary">Mobile number :</span></div>
          <div class="col q-mx-sm"> {{ detail?.Mobile_number }}</div>


        </div>
        <div class="row">
          <div><span class=" text-bold text-primary">Email :</span></div>
          <div class="col q-mx-sm"> {{ detail?.Email }}</div>


        </div>
       
      </div>
    </div>
  </div>
</q-card>
<q-card flat class="q-pa-md">
  <div class="row">
          <div><span class=" text-bold text-primary">Website name :</span></div>
          <div class="col q-mx-sm"> {{ detail?.website_name}}</div>
        </div>
</q-card>
<q-card flat class="q-pa-md">
  <div class="row">
          <div><span class=" text-bold text-primary">Website URL:</span></div>
          <div class="col q-mx-sm"> {{ detail?.website_url }}</div>
</div>
</q-card>
<q-card flat class="q-pa-md">
  <div class="row">
          <div><span class=" text-bold text-primary">Address:</span></div>
          <div class="col q-mx-sm"> {{ detail?.Address}}</div>
          <div><span class=" text-bold text-primary">City:</span></div>
          <div class="col q-mx-sm"> {{ detail?.city}}</div>
          <div><span class=" text-bold text-primary">State:</span></div>
          <div class="col q-mx-sm"> {{ detail?.state}}</div>
          <div><span class=" text-bold text-primary">Pincode:</span></div>
          <div class="col q-mx-sm"> {{ detail?.pincode}}</div>
        </div>
</q-card>
<q-card flat class="q-pa-md">
  <div class="row">
         
          <div><span class=" text-bold text-primary">Adhaar Number:</span></div>
          <div class="col q-mx-sm"> {{ detail?.adhaar_number }}</div>
</div>
</q-card>

</div>

</template>

    <script>
    export default{
        name:'SellerDetail',
        props: ['dataId'],
      data () {
    return {
      detail: null
   
    }
  },
  watch: {
    dataId: {
      handler () {
        this.fetchData()
      },
      immediate: true
    }
  },
  methods: {
    async fetchData () {
      let httpClient = await this.$api.get('/items/sellers/' + this.dataId, {
        params: {
          fields: [
            '*',
            'id.*',
           
          ]
        }
      })
      this.detail = httpClient.data.data
    }
  }
}
</script>
       
  
