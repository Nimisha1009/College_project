<template>
    <q-page>
        <q-card  class="q-pa-md" style="width:40%">
            <div class="q-pa-md" >
                <div>
                    <div class="text-h6 bg-pink-1 text-center"> Seller Product</div>
                      <div class="q-pa-md">
                      <q-input outlined type="text" label="Seller-Id" />
                        </div>
                        <div class="q-pa-md">
                            <q-input outlined type="text" label="Name" />
                        </div>
                        <div class="q-pa-md">
                            <q-input outlined type="text" label="Email" />
                        </div>
                        <div class="q-pa-md">
                            <q-input outlined type="text" label="Mobile numner" />
                        </div>
                        <div class="q-pa-md">
                            <q-input outlined type="text" label="Address" />
                        </div>
                        <div class="q-gutter-sm">
                             </div>
                        <div class="q-gutter-sm">
                         <label>Gender:</label>
                     <q-radio v-model="male"  label="Male" />
                      <q-radio v-model="female"  label="Female" />
                    </div>
        <q-select filled v-model="Current_status" :options="options" label="Current Status" />
                  
                 
             <div class="row">
                <q-btn type="button" class="q-my-lg" label="Submit" color="primary" />
             <q-btn class="q-my-lg" label="Cancel" color="negative" />
             </div>     
            
            
                    </div></div>

            
          
        </q-card>
    </q-page>
</template>
<script>
export default{
     name:'SellerForm',
     setup () {
    return {
      
      options: [
        'Seller','Employed Graduate','UnEmployed Graduate'
      ]
    }
  }
}
</script>