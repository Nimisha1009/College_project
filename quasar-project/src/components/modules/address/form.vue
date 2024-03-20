<template>
    <q-page>
      <q-form  class=" bg-grey q-pa-md">
         <div class="text-h6 q-pa-md">Address</div>
         <div class="q-pa-md" style="max-width: 500px">
          <q-input  label="address" filled autogrow/></div>
           <div class="row">
              <div class="q-pa-md" style="width:24%"><q-select  filled v-model="city" :options="options" label="city" /></div>
              <div  class="q-pa-md" style="width:24%"><q-select filled v-model="district" :options="options" label="district"/></div>
                </div>
                <div class="row">
                 <div  class="q-pa-md" style="width:24%"> <q-select filled v-model="state" :options="options" label="state" /></div>
                 <div class="q-pa-md" style="width:24%"><q-input label="Pincode" /> </div> 
                </div> 
               </q-form>
                    </q-page>
                     </template>
   <script>
   export default {
     data(){
     }}
   </script>
   
 