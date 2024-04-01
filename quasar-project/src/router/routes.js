
const routes = [
  {
    path: '/',
    component: () => import('layouts/ecommerce/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ecommerce/Home.vue') },
      {
        path: 'auth', component: () => import('pages/ecommerce/AuthPage.vue'),
        children: [
          { path: 'login', component: () => import('components/modules/auth/CustomerLogin.vue') },
          { path: 'signup', component: () => import('components/modules/auth/CustomerSignup.vue') },
          { path: 'forgotpassword', component: () => import('components/ecommerce_modules/auth/CustomerForgotPassword.vue') },
        ]
      },
      {
        path: 'ecommerce',
        component: () => import('layouts/ecommerce/MainLayout.vue'),
        children: [
          { path: 'AllCategories', component: () => import('pages/ecommerce/AllCategories.vue') },
          { path: 'GirlsFashion', component: () => import('pages/ecommerce/GirlsFashion.vue') },
          { path: 'BoysFashion', component: () => import('pages/ecommerce/BoysFashion.vue') },
          { path: 'Footwear', component: () => import('pages/ecommerce/Footwear.vue') },
          { path: 'Toys', component: () => import('pages/ecommerce/Toys.vue') },
          { path: 'Bath', component: () => import('pages/ecommerce/Bath.vue') },
          { path: 'Diapering', component: () => import('pages/ecommerce/Diapering.vue') },
          { path: 'Health', component: () => import('pages/ecommerce/Health.vue') },

        ]
      },
    ]
  },

  {
    path: '/seller',

    component: () => import('layouts/seller/LoginLayout.vue'),
    children: [
      {
        path: 'auth',
        component: () => import('pages/AuthPage.vue'),
        children: [
          {
            path: 'login',
            component: () => import('components/modules/auth/SellerLogin.vue')
          },
          {
            path: 'signup',
            component: () => import('components/modules/auth/SellerSignup.vue')
          },

        ]
      },
      {
        path: 'auth',
        component: () => import('pages/AccountPage.vue'),
        children: [

          {
            path: 'recovery',
            component: () => import('components/modules/auth/forgotpassword.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/seller',
    component: () => import('layouts/seller/MainLayout.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/seller/DashboardPage.vue'),
      },
      {
        path: 'ProductPage',
        component: () => import('pages/seller/ProductPage.vue'),
      },
    
     
    
      {
        path: 'InventoryManagement',
        component: () => import('pages/seller/InventoryManagement.vue'),
      },
      {
        path: 'Pricing',
        component: () => import('pages/seller/Pricing.vue'),
      },
      {
        path: 'SellOrder',
        component: () => import('pages/seller/SellOrder.vue'),
      },
      {
        path: 'ReturnOrder',
        component: () => import('pages/seller/ReturnOrder.vue'),
      },
    
      {
        path: 'RequestProduct:mode?:id?',
        component: () => import('pages/seller/RequestProductPage.vue'),
        props: true,
        children: [
          { path: '',
           component: () => import('components/modules/Seller/RequestProduct/form.vue'), props:true }
        ]
      },
     {
        path: 'CancelletionOrder',
        component: () => import('pages/seller/CancelletionOrder.vue'),
      },
      {
        path: 'PaymentOverview',
        component: () => import('pages/seller/PaymentOverview.vue'),
      },
      {
        path: 'Invoices',
        component: () => import('pages/seller/Invoices.vue'),
      },
      {
        path: 'TrackApprovalRequest',
        component: () => import('pages/seller/TrackApprovalRequest.vue'),
      },
      {
        path: 'Help',
        component: () => import('pages/seller/Help.vue'),
      },
      {
        path: 'Transaction',
        component: () => import('pages/seller/Transaction.vue'),
      },
    





    ]
  },
  {
    path: '/management',
    component: () => import('layouts/management/LoginLayout.vue'),
    children: [
      {
        path: 'auth',
        component: () => import('pages/management/AuthPage.vue'),
        children: [
          {
            path: 'login',
            component: () => import('components/modules/auth/ManagementLogin.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/management',
    component: () => import('layouts/management/MainLayout.vue'),
    children: [

      {
        path: 'Dashboard',
        component: () => import('pages/management/DashboardPage.vue'),
      },
      {
        path: 'products/:mode?/:id?',
        component: () => import('pages/management/Product.vue'),
        props: true
      },
      {
        path: 'category/:mode?/:id?',
        component: () => import('pages/management/Category.vue'),
        props: true
      },
      {
        path: 'seller/:mode?/:id?',
        component: () => import('pages/management/sellerform.vue'),
        props: true
      },
     
      


      {
        path: 'ViewCustomer/',
        component: () => import('pages/management/ViewCustomer.vue'),
      },
      {
        path: 'ViewOrder/',
        component: () => import('pages/management/ViewOrder.vue'),
      },
      {
        path: 'ViewPayment/',
        component: () => import('pages/management/ViewPayment.vue'),
      },
      {
        path: 'ViewUsers/',
        component: () => import('pages/management/ViewUsers.vue'),
      },
      {
        path: 'auth', component: () => import('pages/AuthPage.vue'),
        children: [
          { path: 'login', component: () => import('components/modules/auth/ManagementLogin.vue') },
        ]
      },



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
