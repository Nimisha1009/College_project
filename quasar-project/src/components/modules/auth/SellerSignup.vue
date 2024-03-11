<template>
     <q-form class="bg-pink-1 ">
        <div class="row q-pa-md">
            <div class="text-h5 text-center ">Registration Form</div>
            </div>
            <div class="column">
                    <div class="full-width column q-gutter-sm">
                        <q-input v-model="seller_name" label="Seller name" outlined></q-input>
                        <q-input v-model="email" label="seller Email" outlined></q-input>
                        <q-input v-model="password" label="Password" outlined></q-input>
                        <q-input v-model="password" label="Mobile no" outlined></q-input>
                        <q-input v-model="address" label="Address" outlined></q-input>
                       
                        <div class="q-gutter-sm">
                             </div>
                        <div class="q-gutter-sm">
                         <label>Gender:</label>
                     <q-radio v-model="male"  label="Male" />
                      <q-radio v-model="female"  label="Female" />
                    </div>
                    <q-select filled v-model="Current_status" :options="options" label="Current Status" />

                    <div class="">
                           <q-btn label="Submit" style="width:50%" color="primary"></q-btn>
                           <q-btn  to="./login"  label="Login?"  flat style="color: blue"></q-btn>
                        </div>
                      
                      </div>
                 
                    </div>
               </q-form>
   
   
</template>
<script>
export default{
     name:'SellerSignup',
     setup () {
    return {
      
      options: [
        'Student','Employed Graduate','UnEmployed Graduate'
      ]
    }
  }
}
</script>