import { RouteRecordRaw } from 'vue-router'

// 布局
import IndexLayout from '../layout/index/index.vue'
import BlankLayout from '../layout/blank/index.vue'

// 页面
// 仪表板
const DashBoard = () => import('../views/dashboard/index.vue')
const Setting = () => import('../views/setting/index.vue')
const V1 = () => import('../views/1.vue')
const V2 = () => import('../views/2.vue')
const V3 = () => import('../views/3.vue')
const V4 = () => import('../views/4.vue')
const V5 = () => import('../views/5.vue')

export const routes: RouteRecordRaw[] = [
    {
        name: 'IndexLayout',
        path: '/',
        component: IndexLayout,
        children: [
            {
                name: 'DashBoard',
                path: '/v5',
                component: V5
            },
            {
                name: 'Setting',
                path: '/setting',
                component: Setting
            },
            {
                name: 'v1',
                path: '/v1',
                component: V1
            },
            {
                name: 'v2',
                path: '/v2',
                component: V2
            },
            {
                name: 'v3',
                path: '/v3',
                component: V3
            },
            {
                name: 'v4',
                path: '/v4',
                component: V4
            }
        ]
    }
]
