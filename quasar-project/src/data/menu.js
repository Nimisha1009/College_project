
export default {
    seller: [
          {
            label: 'Listings', url: '', icon: '', subMenu: [
                { label: 'Products', url: '/seller/Product', icon: '' },
                { label: 'My Products', url: '', icon: '' },
                { label: 'Requested Products', url: '', icon: '' },
            ]
        },
        { label: 'Inventory', url: '', icon: '', subMenu:[
            {label:'Inventory Management', icon:'',url:'/seller/InventoryManagement'}
        ] },

        { label: 'Orders', url: '', icon: '', subMenu:[
            {label: 'Sells Order', url:'/seller/SellsOrder', icon:''},
            {label:'Return Order', url:'/seller/ReturnOrders', icon:''},
            {label:'Cancellation Order', url:'/seller/CancellationOrder', icon:'' },
            {label:'Track Request Approval', url:'/seller/TrackRequestApproval', icon:''}
        ] },

        { label: 'Payments', url: '', icon: '' , subMenu:[
            {label:'Payment Overview', url:'/seller/PaymentOverview' , icon:'' , },
            {label:'Transaction', url:'/seller/Transaction', icon:''},
        ] },
       
        { label: 'Invoices', url: '/seller/Invoices', icon: '' },
        { label: 'Settlement', url: '/seller/Settlement', icon: '' },
        { label: 'Help', url: '/seller/Help', icon: '' }
    ],

    management: [
        {
            label: 'Dashboard', url: '/management/Dashboard', icon: ''
         },
        
        {
            label:'Categories', url:'', icon:'', subMenu:[
                { label:'Add Categories', url:'/management/AddCategory',icon:'',},
                {label:'view Categories', url:'/management/viewCategories', icon:''} 
            ]
        },
        {
            label: 'Product', url: '', icon: '', subMenu:[
                { label:'Insert Product', url:'/management/InsertProduct', icon:'',},
                {label:'view Product', url:'/management/ViewProduct', icon:''}
            ]
        },
       

        {
            label:'View Customer', url:'/management/ViewCustomer', icon:'fas fa-user'
        },
        {
            label:'View Order', url:'/management/ViewOrder', icon:''
        },
        {
            label:'View Payment', url:'/management/ViewPayment', icon:''
        },
        {
            label:'Users', url:'/management/ViewUsers' , icon:''
            
               
            
        },
        {
            label:'Seller', url:'/management/SellerForm', icon:''
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