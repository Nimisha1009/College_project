 <template>
          <div class="column q-gutter-md q-pa-md">
     
     
     <q-card class="q-pa-md column">
       <div class="text-h6 q-my-md text-bold">Category Detail</div>
       <div class="row">
         <div>
           <q-img width="150px" fit="contain" :src="'http://localhost:8055/assets/' + detail?.id?.avatar"></q-img>
         </div>
         <div class="col q-pa-md">
           <div class="column">
             <div class="row">
               <div><span class="text-bold text-primary">Category name:</span></div>
               <div class="col q-mx-sm"> {{ detail?.name }} </div>
     
     
           
             </div>
             <div class="row">
               <div><span class=" text-bold text-primary">Status:</span></div>
               <div class="col q-mx-sm"> {{ detail?.status}}</div>
            </div>
         </div>
         </div>
       </div>
     </q-card>
     <q-card flat class="q-pa-md">
       <div class="row">
               <div><span class=" text-bold text-primary">Description:</span></div>
               <div class="col q-mx-sm"> {{ detail?.Description}}</div>
             </div>
     </q-card>
    
    
     </div>
     </template>
     
         <script>
         export default{
             name:'CategoryDetail',
             props: ['dataId'],
           data () {
         return {
           detail: null
        
         }
       },
       watch: {
         dataId: {
           handler () {
             this.fetchData()
           },
           immediate: true
         }
       },
       methods: {
         async fetchData () {
           let httpClient = await this.$api.get('/items/categories/' + this.dataId, {
             params: {
               fields: [
                 '*',
                 'id.*',
                
               ]
             }
           })
           this.detail = httpClient.data.data
         }
       }
     }
     </script>
            
       
     