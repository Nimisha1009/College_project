<template>
     <header>
        <div class="row q-pa-md">
            <div>
         <q-toolbar class="bg-pink-4 text-white q-my-md shadow-2">
         
         <q-btn-dropdown stretch flat label="Listings">
       <q-list>
        <q-item v-for="item of listings" :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
       </q-btn-dropdown>
        <q-btn-dropdown stretch flat label="Inventory">
       <q-list>
        <q-item v-for="item of Inventory" :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        <div class="q-pa-md">
        <q-btn-dropdown stretch flat label="Orders">
       <q-list>
        <q-item v-for="item of Orders " :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        </div>
        <div class="q-pa-md">
        <q-btn-dropdown stretch flat label="Payments">
       <q-list>
        <q-item v-for="item of Payments" :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        </div>
        <div class="q-pa-md">
        <q-btn-dropdown stretch flat label="Reports">
       <q-list>
        <q-item v-for="item of Reports" :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        </div>
        <div class="q-pa-md">
        <q-btn-dropdown stretch flat label="More">
       <q-list>
        <q-item v-for="item of More" :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        </div>
        <div class="q-pa-md">
        <q-btn-dropdown stretch flat label="Help">
       <q-list>
        <q-item v-for="item of Help" :to="item.url">
          <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
        </q-list>
        </q-btn-dropdown>
        </div>
       </q-toolbar>
       </div>
       <div class="q-pa-md">
      
        <q-input icon="fa fa-search" rounded outlined v-model="text" label="Search" />
        
    </div>
         </div>
   </header>
</template>
<script>
export default {
    data(){
        return{
        
            
        }
            }

}
</script>