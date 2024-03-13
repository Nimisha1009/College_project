<template>
    <q-page>
        <div class="text-h5 q-ma-md">Dashboard</div>
        <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section class="bg-blue-8 text-white">
            <div class="row">
              <div class="col-10">
                <div class="text-h6">Sales</div>
                <div class="text-h5">160</div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="trending_up"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      </div>
     
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section class="bg-orange-4 text-white">
            <div class="row">
              <div class="col-10">
                <div class="text-h6">% Change</div>
                <div class="text-h5">
                  <q-icon name="arrow_downward"/>
                  2%
                </div>
              </div>
              <div class="col-2">
                <q-icon size="62px" name="compare_arrows"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    
    
        <div class="row q-gutter-md item-center justify-center">
            <q-card v-for="i in 4" style="width:320px; height:150px"></q-card>
        </div>
    </q-page>
</template>

<script>
export default {
    
}
</script>