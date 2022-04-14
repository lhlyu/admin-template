import { RouteRecordRaw } from 'vue-router'

// 布局
import IndexLayout from '../layout/index/index.vue'
import BlankLayout from '../layout/blank/index.vue'

// 页面
const V = () => import('../views/index.vue')

export const routes: RouteRecordRaw[] = [
    {
        name: 'IndexLayout',
        path: '/',
        component: IndexLayout,
        children: [
            {
                name: 'v1',
                path: '/v1',
                component: V,
                children: [
                    {
                        name: 'v1-1',
                        path: '/v1_1',
                        component: V
                    },
                    {
                        name: 'v1-2',
                        path: '/v1_2',
                        component: V
                    },
                    {
                        name: 'v1-3',
                        path: '/v1_3',
                        component: BlankLayout,
                        children: [
                            {
                                name: 'v1-3-1',
                                path: '/v1_3_1',
                                component: V
                            },
                            {
                                name: 'v1-3-2',
                                path: '/v1_3_2',
                                component: V
                            }
                        ]
                    }
                ]
            },
            {
                name: 'v2',
                path: '/v2',
                component: BlankLayout,
                children: [
                    {
                        name: 'v2-1',
                        path: '/v2',
                        component: V
                    },
                    {
                        name: 'v2-2',
                        path: '/v2_2',
                        component: V
                    }
                ]
            }
        ]
    }
]
