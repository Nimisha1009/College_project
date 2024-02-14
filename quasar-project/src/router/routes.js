
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'customer', component: () => import('pages/customer.vue')},
      { path: 'loginPage', component: () => import('pages/loginPage.vue')},
      { path: 'signup', component: () => import('pages/signup.vue')},
      { path: 'address', component: () => import('pages/address.vue')},
      { path: 'order', component: () => import('pages/order.vue')},
      { path: 'orderDetails', component: () => import('pages/orderDetails.vue')},
      { path: 'payment', component: () => import('pages/payment.vue')},
      { path: 'productCatogory', component: () => import('pages/productCategory.vue')},
      { path: 'product', component: () => import('pages/product.vue')},
      // { path: 'seller', component: () => import('pages/seller.vue')},
      { path: 'sellerProduct', component: () => import('pages/sellerProduct.vue')},
      { path: 'sellerProductPricing', component: () => import('pages/sellerProductPricing.vue')},
      { path: 'shoppingCart', component: () => import('pages/shoppingCart.vue')},
      { path: 'shippingInformation', component: () => import('pages/shippingInformation.vue')},
    ]
  },

  {
    path: '/seller',
    component: () => import('layouts/seller/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/seller/DashboardPage.vue'),
      },
      {
        path: 'auth',
        component: () => import('pages/AuthPage.vue'),
        children: [
          {
            path: 'login',
            component: ()=> import('components/modules/auth/login.vue')
          },
          {
            path: 'signup',
            component: ()=> import('components/modules/auth/signup.vue')
          },
        
        ]
      },
      {
        path: 'auth',
        component: () => import('pages/AccountPage.vue'),
        children: [
         
          {
            path: 'recovery',
            component: ()=> import('components/modules/auth/forgotpassword.vue')
          },
        ]
      },
        {
          path: 'products/',
          component: () => import('layouts/seller/MainLayout.vue'),
        },
        {
          path: 'products/add',
          component: () => import('layouts/seller/MainLayout.vue'),
        },
        {
          path: 'products/request',
          component: () => import('layouts/seller/MainLayout.vue'),
        }
      
    ]
  },
  {
    path: '/management',
    component: () => import('layouts/management/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/management/DashboardPage.vue'),
      },
      {
        path: 'products/',
        component: () => import('pages/management/ProductsPage.vue'),
      },
      {
        path: 'products/add',
        component: () => import('pages/management/ProductPageForm.vue'),
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
