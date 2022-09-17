// import MySearch from '@/pages/Search/MySearch'
// import MyHome from '@/pages/Home/MyHome'
// import MyLogin from '@/pages/Login/MyLogin'
// import MyRegister from '@/pages/Register/MyRegister'
// import MyDetail from "@/pages/Detail/MyDetail.vue"
// import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess.vue"
// import ShopCart from "@/pages/ShopCart/ShopCart.vue"
// import MyTrade from "@/pages/Trade/MyTrade.vue"
// import MyPay from "@/pages/Pay/MyPay.vue"
// import PaySuccess from "@/pages/PaySuccess/PaySuccess.vue"
// import MyCenter from "@/pages/Center/MyCenter.vue"
import MyOrder from '@/pages/Center/MyOrder/MyOrder.vue'
import GroupOrder from '@/pages/Center/GroupOrder/GroupOrder'
import LifeOrder from '@/pages/Center/LifeOrder/LifeOrder'
// import HotRank from '@/pages/Home/MyRank/HotRank/HotRank'
// import PriceRank from '@/pages/Home/MyRank/PriceRank/PriceRank'
export default [{
        //在注册路由的时候,如果这里占位，切记务必要传递params
        path: '/search/:keyword?',
        component: ()=>import('@/pages/Search/MySearch'),
        //路由元信息,新学习的一个配置项!!!!给当前路由添加一些额外数据
        //它的右侧是一个对象[可以有多个键值对]
        //路由配置项：书写的时候不要胡写、乱写、瞎写【在VC组件身上获取不到,没有任何意义】
        meta: { show: true },
        name: 'search',
        // props: true
    },
    {
        path: '/home',
        component:()=>import('@/pages/Home/MyHome'),
        meta: { show: true },
        // children: [{
        //         path: 'hotrank',
        //         component: HotRank
        //     },
        //     {
        //         path: 'pricerank',
        //         component: PriceRank
        //     },
        //     {
        //         path: '/home',
        //         redirect: '/home/hotrank'
        //     }
        // ]
    },
    {
        path: '/pay',
        component: ()=>import('../pages/Pay/MyPay.vue'),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // 必须从购物车来
            if (from.path == '/trade') {
                next()
            } else {
                // 其他的不行
                next(false)
            }
        }
    },
    {
        path: '/paysuccess',
        component: ()=>import('@/pages/PaySuccess/PaySuccess.vue'),
        meta: { show: true }
    },
    {
        path: '/center',
        component: ()=>import('@/pages/Center/MyCenter.vue'),
        meta: { show: true },
        children: [{
                path: 'myorder',
                component: MyOrder
            },
            {
                path: 'grouporder',
                component: GroupOrder
            },
            {
                path: 'lifeorder',
                component: LifeOrder

            },
            {
                path: '/center',
                redirect: '/center/myorder'
            },

        ]
    },
    {
        path: '/detail/:skuid?',
        component: ()=>import('@/pages/Detail/MyDetail.vue'),
        meta: { show: true }
    },
    {
        path: '/login',
        component: ()=>import('@/pages/Login/MyLogin'),
        meta: { show: false }

    },
    {
        path: '/register',
        component: ()=>import('@/pages/Register/MyRegister'),
        meta: { show: false }

    },
    {
        path: '/shopcart',
        component: ()=>import('@/pages/ShopCart/ShopCart.vue'),
        meta: { show: true }

    },
    {
        path: '/trade',
        component: ()=>import('@/pages/Trade/MyTrade.vue'),
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 必须从购物车来
            if (from.path == '/shopcart') {
                next()
            } else {
                // 其他的不行
                next(false)
            }
        }

    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: ()=>import('@/pages/AddCartSuccess/AddCartSuccess.vue'),
        meta: { show: true }
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
]