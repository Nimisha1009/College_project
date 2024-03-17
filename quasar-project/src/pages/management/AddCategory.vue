<template>
    <div class="container ">
    <div class="row ">
        <div class="text-h5 text-center q-my-lg col-12">
    Add Category
    </div>
    </div>
</div>
<div class="row">
    <div class="col-3"></div>
    <div class="col-6">
    <q-form>
        <div class="full-width column q-gutter-sm">
    <label> Categories Name</label>
    <q-input outlined type="text"  v-model="categoryName"/>
    </div>
    <div class="full-width column q-gutter-sm">
    <label> Category Description</label>
    <q-input outlined type="text" v-model="description" />
</div>
<div class="full-width column q-gutter-sm">
    <label> Category Image</label>
    <q-input outlined type="text" v-model="imageUrl"/>
</div>
<div class="column items-center q-my-lg">
    <q-btn label="Add" color="primary" v-on:click="addCategory"></q-btn>
</div>
</q-form>
</div>
</div>
</template>
<script>

export default{
    name:'AddCategory',
    data(){
        return{
            categoryName:"",
            description:"",
            imageUrl:"",
        };
    },
    methods:{
        addCategory(){
            console.log(this.categoryName,this.description);
            const newCategory = {
                categoryName: this.categoryName,
                description: this.description,
                imageUrl: this.imageUrl,
            };
            const baseUrl="";
            Axios({
                methods: 'post',
                url:` ${baseUrl}/category/create`,
                data: JSON.stringyfy(neCategory),
                header:{
                    "content-Type":"application/json",
                },
            })
    .then(()=> {
        sweetalert({
            text:"category added successfully",
            icon:"success",
        });
    })
   .catch((err)=>{
    console.log(err);
   });
        },

            
        },
    }
    
</script>