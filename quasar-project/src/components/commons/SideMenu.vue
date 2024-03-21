<template>

  <q-list padding bordered class="rounded-borders">
    <template v-for="item of menu">

      <q-item v-if="item.url" clickable :to="item.url">
        <q-item-section avatar><q-icon :name="item.icon || 'perm_identity'"></q-icon></q-item-section>
        <q-item-section>{{ item.label }} </q-item-section>
      </q-item>
      <q-expansion-item content-inset-level="0.25" expand-separator :icon="item.icon || 'perm_identity'" :to="item.url"
        stretch flat :label="item.label" v-if="item.subMenu">


        <q-item v-for="subMenuItem of item.subMenu" :to="subMenuItem.url">
          <q-item-section avatar><q-icon :name="item.icon || 'perm_identity'"></q-icon></q-item-section>
          <q-item-section>{{ subMenuItem.label }}</q-item-section>
        </q-item>


      </q-expansion-item>
    </template>
  </q-list>

</template>
<script>
export default {
  props: ['menu'],
}
</script>
