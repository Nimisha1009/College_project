<template>
    <q-list>
        <q-item v-for="item of menu" :to="item.url">
            <q-item-section avatar><q-icon :name="item.icon"></q-icon></q-item-section>
            <q-item-section >{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
</template>
<script>
export default {
    data(){
        return{
            menu:[
                {label: 'Home', icon:'person', url:'/account'},
                {label: 'Listings', icon:'person', url:'/account'},
                {label: 'Inventory', icon:'person', url:'/account'},
                {label: 'Orders', icon:'person', url:'/account'},
                {label: 'Payments', icon:'person', url:'/account'},
                {label: 'Reports', icon:'person', url:'/account'},
                {label: 'More', icon:'person', url:'/account'},
                {label: 'Help', icon:'person', url:'/account'}
            ]
        }
            }

}
</script>