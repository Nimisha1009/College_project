
export default {
  seller: [
    {
      label: 'Dashboard', url: '/seller/Dashboard', icon: '',
    },

    {
      label: 'Listings', url: '', icon: '', subMenu: [
        { label: 'Products', url: '/seller/ProductPage', icon: '' },
        { label: 'My Products', url: '/seller/MyProduct', icon: '' },
        { label: 'Requested Products', url: '/seller/RequestProduct', icon: '' },
      ]
    },
    {
      label: 'Inventory', url: '', icon: '', subMenu: [
        { label: 'Inventory Management', icon: '', url: '/seller/InventoryManagement' }
      ]
    },
  
    {
      label: 'Orders', url: '', icon: '', subMenu: [
        { label: 'Sells Order', url: '/seller/SellOrder', icon: '' },
        { label: 'Return Order', url: '/seller/ReturnOrder', icon: '' },
        { label: 'Cancellation Order', url: '/seller/CancelletionOrder', icon: '' },
        { label: 'Track Request Approval', url: '/seller/TrackApprovalRequest', icon: '' }
      ]
    },

    {
      label: 'Payments', url: '', icon: '', subMenu: [
        { label: 'Payment Overview', url: '/seller/PaymentOverview', icon: '', },
        { label: 'Transaction', url: '/seller/Transaction', icon: '' },
      ]
    },
    {
      label: 'Help', url: '/seller/Help', icon: '',
    },

  ],
  management: [
    {
      label: 'Dashboard', url: '/management/Dashboard', icon: ''
    },

    {
      label: 'Category', url: '', icon: '', subMenu: [
        { label: 'Add Category', url: '/management/category/add', icon: '', },
        { label: 'view Category', url: '/management/category/', icon: '' }
      ]
    },

    {
      label: 'Products', url: '', icon: '', subMenu: [
        { label: 'Add Products', url: '/management/products/add', icon: '', },
        { label: 'view Products', url: '/management/products/', icon: '' }
      ]
    },


    {
      label: ' Customers', url: '/management/ViewCustomer', icon: ''
    },
    {
      label: 'View Orders', url: '/management/ViewOrder', icon: ''
    },
    {
      label: 'View Payment', url: '/management/ViewPayment', icon: ''
    },
    {
      label: 'Users', url: '/management/ViewUsers', icon: ''



    },
    {
      label: 'Seller', url: '', icon: '', subMenu: [
        { label: 'Add Sellers', url: '/management/seller/add', icon: '', },
        { label: 'view Seller', url: '/management/seller/', icon: '' }
      ]
    },



  ],
  ecommerce: [
    {
      label: 'All Categories', url: 'ecommerce/AllCategories', icon: ''
    },
    {
      label: 'GIRLS FASHION', url: '/ecommerce/GirlsFashion', icon: ''
    },
    {
      label: 'BOYS FASHION', url: '/ecommerce/BoysFashion', icon: ''

    },
    {
      label: 'FOOTWEAR', url: 'ecommerce/Footwear', icon: ''
    },
    {
      label: 'TOYS', url: 'ecommerce/Toys', icon: ''

    },
    {
      label: 'BATH', url: 'ecommerce/Bath', icon: ''
    },
    {
      label: 'DIAPERING', url: 'ecommerce/Diapering', icon: ''
    },

    {
      label: 'HEALTH', url: 'ecommerce/Health', icon: ''
    },


  ]
}
