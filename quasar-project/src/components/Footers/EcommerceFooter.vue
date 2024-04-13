<template>
<q-footer>
   <div class="footer-container">
        <div class="row flat q-pa-md">
        <div class="row ">
          <FooterMenu />
        </div>
      </div>
        <div class="footer-row">
           <div class="arrow-up"><ul>
                    <li><q-btn icon="fa fa-arrow-up" >TOP</q-btn></li>
                 </ul></div>

                <div class="f-list"><ul>
                    <li><q-btn  to="/management/auth/login">Admin</q-btn></li>
                 </ul></div>
                 </div>  </div>
      </q-footer>
</template>

<script>
import FooterMenu from 'components/modules/menu/FooterMenu.vue'

export default{
name:'EcommerceFooter',
components: { FooterMenu },
}
</script>

  <style scoped>
.footer-container {
  --tw-bg-opacity: 1;
    background-color: #D9F3F4;
    padding: 30px 30px 10px 30px;
    color: black;
}
.footer-container {
 flex: 3; 
}
.arrow-up ul {
    list-style-type: none;
    text-align: right;
    }


.f-list ul {
    list-style-type: none;
    text-align: right; 
    
}

  </style>



   