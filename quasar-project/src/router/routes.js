
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
        path: 'products',
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
        path: 'InsertProduct',
        component: () => import('pages/management/InsertProduct.vue'),
      },
      {
        path: 'sellerpageform',
        component: () => import('pages/management/sellerpageform.vue'),
      },
      {
        path: 'viewProductCategories/',
        component: () => import('pages/management/viewProductCategories.vue'),
      },
      {
        path: 'InsertProductCategory/',
        component: () => import('pages/management/InsertProductCategory.vue'),
      },
      {
        path: 'ViewCategories/',
        component: () => import('pages/management/ViewCategories.vue'),
      },
      {
        path: 'InsertCategory/',
        component: () => import('pages/management/InsertCategory.vue'),
      },
      {
        path: 'InsertBox/',
        component: () => import('pages/management/InsertBox.vue'),
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
