<template>

    <q-page class="q-pa-md bg-grey-2">

        <div class="row items-cente q-my-md">
            <div class="text-h5">Product</div>
            <div><q-btn label="Add" to="seller/products/:mode?" color="green" rounded></q-btn></div>
        </div>

        <div class="row q-gutter-md q-my-md">
            <q-card  class="q-pa-md" style="width:360px">
                <router-view />
              
            </q-card>
           
           </div>
        
       
    </q-page>
</template>
<script>
export default{
    name:'ProductPage',
    props: ['mode'],
   
}

</script>