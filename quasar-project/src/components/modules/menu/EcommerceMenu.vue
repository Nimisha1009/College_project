<template>

  <div class="row">
    <Menu :menu="menu"></Menu>
  </div>



</template>

<script>
import Menu from 'components/commons/TopMenu.vue'

export default {
  components: { Menu },
  data () {
    return {
      categories: []
    }
  },
  computed: {
    menu () {
      return this.categories.map(category => {
        let menuItem = {}
        menuItem.label = category.name
        menuItem.url = category.sub_categories.length > 0 ? '/' : ''
        menuItem.icon = ''
        if (category.sub_categories.length > 0) {
          menuItem.subMenu = category.sub_categories.map(sc => {
            let subMenuItem = {}
            subMenuItem.label = sc.name
            subMenuItem.url = '/'
            subMenuItem.icon = ''
            return subMenuItem
          })
        }

        return menuItem
      })
    }
  },
  methods: {
    async fetchCategories () {
      let httpClient = await this.$api.get('/items/categories', {
        params: {
          fields: ['*', 'sub_categories.*'],
          filter: {
            parent_category_id: {
              _null: true
            }
          }
        }
      })
      this.categories = httpClient.data.data
    }
  },
  created () {
    this.fetchCategories()
  }

}
</script>
