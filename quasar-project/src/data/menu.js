
export default {
    seller: [
          {
            label: 'Listings', url: '', icon: '', subMenu: [
                { label: 'Products', url: '', icon: '' },
                { label: 'My Products', url: '', icon: '' },
                { label: 'Requested Products', url: '', icon: '' },
            ]
        },
        { label: 'Inventory', url: '', icon: '', subMenu:[
            {label:'Inventory Management', icon:'',url:''}
        ] },

        { label: 'Orders', url: '', icon: '', subMenu:[
            {label: 'Sells Order', url:'', icon:''},
            {label:'Return Order', url:'', icon:''},
            {label:'Cancellation Order', url:'', icon:'' },
            {label:'Track Request Approval', url:'', icon:''}
        ] },

        { label: 'Payments', url: '', icon: '' , subMenu:[
            {label:'Payment Overview', url:'' , icon:'' , },
            {label:'Transaction', url:'', icon:''},
        ] },
       
        { label: 'Invoices', url: '', icon: '' },
        { label: 'Settlement', url: '', icon: '' },
        { label: 'Help', url: '', icon: '' }
    ],

    management: [
        {
            label: 'Dashboard', url: '', icon: ''
         },
         {
            label: 'Product', url: '', icon: '', subMenu:[
                { label:'Insert Product', url:'management/InsertProduct',icon:'',},
                {label:'view Product', url:'', icon:''}
            ]
        },
        {
            label:'Product Categories', url:'',icon:'', subMenu:[
                { label:'Insert Product Categories', url:'',icon:'',},
                {label:'view Product Categories', url:'', icon:''}  
            ]
        },
        {
            label:'Categories', url:'', icon:'', subMenu:[
                { label:'Insert Categories', url:'',icon:'',},
                {label:'view Categories', url:'', icon:''}
            ]
        },
        {
            label:'Boxes Section', url:'', icon:'', subMenu:[
                { label:'Insert Box', url:'',icon:'',},
                {label:'view Box', url:'', icon:''}
            ]
        },

        {
            label:'View Customer', url:'', icon:''
        },
        {
            label:'View Order', url:'', icon:''
        },
        {
            label:'View Payment', url:'', icon:''
        },
        {
            label:'Users', url:'' , icon:'', subMenu:[
                { label:'view Users', url:'',icon:'',},
                {label:'Edit Profile', url:'', icon:''}  
            ]
        },


    ],
    ecommerce: [


    ]
}