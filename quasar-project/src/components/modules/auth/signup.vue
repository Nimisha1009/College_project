<template>
    <div class="row flex justify-center content-center">
<div class="bg-grey-3 col-12 col-md-4 q-mt-md q-mr-sm">
    <div class="text-h5 text-center q-pt-xl q-mt-xl" >Sign UP </div>
    <div class="q-pa-sm">
        <q-input v-model="Name" label=" Enter your name" outlined></q-input>
        <q-input v-model="email" label=" Your Email Address" outlined></q-input>
        <q-input v-model="password" label=" Enter password" outlined q-mt-sm></q-input>
        <q-input v-model="mobileNumber" label=" Enter mobile number" outlined q-mt-sm></q-input></div>
        <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="male"  label="Male" />
      <q-radio v-model="female"  label="Female" />
    <div class="">
       <q-btn label="Register" style="width:100%" class="bg-pink text-white q-pa-sm"></q-btn>
      </div>
       <div class="q-mt-xl text-center">
        <span class="text-grey text-center">Already have an account?</span>
        </div>
         </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>