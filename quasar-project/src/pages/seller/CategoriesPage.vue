<template>

    <q-page class="q-pa-md bg-grey-2">

        <div class="row items-cente q-my-md">
            <div class="text-h5">Category</div>
            <div><q-btn label="Add" to="./add" color="green" rounded></q-btn></div>
        </div>

        <div class="row q-gutter-md q-my-md">
            <q-card  class="q-pa-md" style="width:360px">
                <router-view />
            </q-card>
            <CategoriesTable class="col" />
           </div>
        
       
    </q-page>
</template>
import CategoriesTable from 'components/modules/Categories/table.vue'

<script>
export default{
    name:'CategoriesPage',
    props: ['mode'],
    components: { CategoriesTable, }
}

</script>