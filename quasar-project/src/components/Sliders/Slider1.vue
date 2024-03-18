<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" v-for="slide in slides">
                <img :src="slide"/>
           
            </div>
        </div>
    </div>

</template>
export default{
    name:'Slider1',
   data() {
    slides: [
             src:[{}]
          ]
   }
}
<style scoped>

</style>