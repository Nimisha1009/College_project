<template>

        <q-page class="bg-light-green  row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Sign Up</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1" style:width="300px">
          <q-card-section>
            <q-form class="q-gutter-md">
                <q-input v-model="user_name" label="User name" outlined></q-input>
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
              <q-input v-model="password" label="Mobile no" outlined></q-input>
                       <div class="q-gutter-sm">
                            </div>
                       <div class="q-gutter-sm">
                    <q-radio v-model="male"  label="Male" />
                     <q-radio v-model="female"  label="Female" />
                     <div class="">
                          <q-btn label="sign up" style="width:50%" color="primary"></q-btn>
                          <q-btn  to="./login"  label="Login?"  flat style="color: blue"></q-btn>
                       </div>
                   </div>
            </q-form>
          </q-card-section>
         </q-card>
      </div>
    </div>
  </q-page>
             
  
  
</template>
<script>
export default{
    name:signup,
}
</script>