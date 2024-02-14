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
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'},
                {label: 'Account', icon:'person', url:'/account'}
            ]
        }
    }
}
</script>