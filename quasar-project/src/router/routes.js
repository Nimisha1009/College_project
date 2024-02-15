
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
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
