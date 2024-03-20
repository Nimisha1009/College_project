<template>
    <div class="q-pa-md" style="max-width: 328px" >
      <q-list  padding  bordered class="rounded-borders" >
        <q-expansion-item expand-separator icon="perm_identity" :header-inset-level="1" 
          v-for="item of menu" :to="item.url" stretch flat :label="item.label" >
       
            <q-card-section>
                <q-item  v-for="subMenuItem of item.subMenu" :to="subMenuItem.url">
                 <q-item-section>{{ subMenuItem.label }}</q-item-section>
                </q-item>
            </q-card-section>
      
        </q-expansion-item>
      </q-list>
    </div>
  </template>
  <script>
  export default {
      props: ['menu'],
     }
  </script>