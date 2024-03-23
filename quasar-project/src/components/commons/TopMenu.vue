<template>
  <div class="row m">
    <template v-for="item of menu">
      <q-btn :outline="variant === 'outlined'" v-if="item.url && (item?.subMenu?.length || 0) === 0" :flat="!variant"
        :label="item.label" :icon="item.icon || 'perm_identity'" :to="item.url"></q-btn>
      <q-btn-dropdown v-if="item.subMenu" :outline="variant === 'outlined'" :to="item.url" :flat="!variant"
        :label="item.label">
        <q-list clickable separator>
          <q-item v-for="subMenuItem of item.subMenu" :to="subMenuItem.url">
            <q-item-section>{{ subMenuItem.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </template>


  </div>



</template>
<script>
export default {
  props: ['menu', 'variant'],
}
</script>
