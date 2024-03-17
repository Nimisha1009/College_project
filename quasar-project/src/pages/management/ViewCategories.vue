<template>
  <div class="container ">
  <div class="row ">
      <div class="text-h5 text-center q-my-lg col-12">Our Categories</div>
      <div>{{ categories[0] }}</div>
  </div>
   <div class="row">
    <div v-for="category of categories" :key="category.id" class="col-4 col-md-6">
      <categorybox :category="category"></categorybox>
    </div>
   </div>
 </div>
</template>
<script>
import CategoryBox from 'components/Category/CategoryBox.vue'
export default{
  name:'ViewCategories',
  components: {ComponentBox},
  data(){
    return {
      };
  },
  methods:{
    async getCategories(){
      await axios.get()
    }
  },
 
  };
  
</script>