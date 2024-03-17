<template>
    <div class="card">
        <div>
            <q-img  :src="category.imageUrl" alt="card image"></q-img>
      </div>
        <div>
            <h5 class="card-title">{{ category.categoryName }}</h5>
            <p class="c"> {{ category.description }} </p>
        </div>
     </div>
</template>
<script>
export default
{
    name:'CategoryBox',
    props: ["category"],
    methods:{},
};
</script>