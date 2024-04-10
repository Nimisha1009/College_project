
export default {
  seller: [
    {
      label: 'Dashboard', url: '/seller/Dashboard', icon: 'home',
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
      label: 'My Products', url: '/seller/ProductPage', icon: 'filter_1'
    },
    {
      label: 'Requested Products', url: '/seller/RequestProduct', icon: ''
    },
    {
      label: 'Inventory', url: '/seller/InventoryManagement', icon: 'inventory'
    },
    {
      label: 'Pricing', url: '/seller/Pricing', icon: 'attach_money'
    },


    {
      label: 'Payments', url: '/seller/PaymentOverview', icon: 'payment'
    },
    {
      label: 'Help', url: '/seller/Help', icon: 'help',
    },

  ],
  management: [
    {
      label: 'Dashboard', url: '/management/Dashboard', icon: 'home'
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
      label: ' Customers', url: '/management/ViewCustomer', icon: 'people'
    },
    {
      label: 'View Orders', url: '/management/ViewOrder', icon: ''
    },
    {
      label: 'View Payment', url: '/management/ViewPayment', icon: 'payment'
    },
    {
      label: 'Users', url: '/management/ViewUsers', icon: 'people'



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
